import style from "../scss/pages/detailproductpage.module.scss";
import { useLoaderData } from "react-router-dom";
import { urlServer } from "../data/endpoints.js";
import { ScrollRestoration } from "react-router-dom";
import Button from "../components/smalls/Button.jsx";
import CartButton from "../components/smalls/CartButton.jsx";
import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import ColorPicker from "../components/smalls/ColorPicker.jsx";
import SizePicker from "../components/smalls/SizePicker.jsx";

const DetailProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [itemsInCart, setItemsInCart] = useOutletContext();
  const { productDetail, newProducts } = useLoaderData();
  const firstNewsProducts = newProducts.newProducts.slice(0, 4);
  const product = productDetail.data[0];
  const stock = productDetail.stock;
  const productPrice = Math.trunc(product.price);
  const ofertPrice = Math.trunc(
    product.price - product.price * (product.discount / 100)
  );

  //Aca convierto a set la lista de colores y tallas para que no queden repetidos al mostrar en el front
  const colors = new Set();
  const sizes = new Set();
  for (let index = 0; index < stock.length; index++) {
    const item = stock[index];
    colors.add(item.rgb_code);
    sizes.add(item.size_name);
  }
  //Los paso a Arrays para poder iterarlos
  const colorsList = Array.from(colors);
  const sizeList = Array.from(sizes);

  const initColor = colorsList; // Color inicial si no seleciona ninguno
  const [selectedColor, setSelectedColor] = useState(initColor[0]);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const [selectedSize, setSelectedSize] = useState("S");

  const handleSizeClick = (item) => {
    setSelectedSize(item);
  };

  // Función para obtener el stock de un color y talla específicos
  function getStock(color, size) {
    const stockItem = stock.find(
      (item) => item.rgb_code === color && item.size_name === size
    );
    return stockItem ? stockItem.quantity : 0;
  }

  const handleClickAdd = () => {
    const stock = getStock(selectedColor, selectedSize);

    if (quantity > 0 && quantity <= stock) {
      setItemsInCart(itemsInCart + 1);
    } else {
      alert("Sin stock ")
    } // Falta un else con algun sweet alert
    // ACA tengo que hacer un fecth a un endpoint, necesito mandar el id del producto, el color y la cantidad.
  };

  return (
    <>
      <div className={style.image_container}>
        <img
          className={style.image}
          src={urlServer + "images/" + product.imageurl}
          alt={"Imagen de " + product.name}
        />

        <div className={style.buttons_container}>
          <h1 className={style.title}>{product.name}</h1>

          {product.discount === 0 ? (
            <h2 className={style.price}>$ {productPrice}</h2>
          ) : (
            <h2>
              <span className={style.price}>${ofertPrice}</span>
              <span className={style.original_price}> ${productPrice}</span>
              <span className={style.discount}>-{product.discount}%</span>
            </h2>
          )}

          <p>{product.description}</p>
          <hr className={style.hr} />

          <h3 className={style.subtitle}>Select Colors</h3>

          <ColorPicker
            colorsList={colorsList}
            handleColorClick={handleColorClick}
            selectedColor={selectedColor}
          />

          <hr className={style.hr} />
          <h3 className={style.subtitle}>Choose Size</h3>

          <SizePicker
            product={sizeList}
            handleSizeClick={handleSizeClick}
            selectedSize={selectedSize}
          />

          <hr className={style.hr} />

          <div className={style.cart_buttons_container}>
            <CartButton quantity={quantity} setQuantity={setQuantity} />
            <span onClick={handleClickAdd}>
              <Button text={"Add to Cart"} />
            </span>
          </div>
        </div>
      </div>
      <section className={style.section}>
        <h2 className={style.h2}>YOU MIGHT ALSO LIKE</h2>
        <div className={style.card_container}>
          {firstNewsProducts.map((item) => (
            <Link to={"/detail/" + item.product_id} key={item.product_id}>
              <Card
                name={item.name}
                price={item.price}
                urlImage={urlServer + "images/" + item.imageurl}
              />
            </Link>
          ))}
        </div>
      </section>
      <ScrollRestoration />
    </>
  );
};

export default DetailProductPage;
