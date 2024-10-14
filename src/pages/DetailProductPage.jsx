import style from "../scss/pages/detailproductpage.module.scss";
import { useLoaderData } from "react-router-dom";
import { urlServer } from "../data/endpoints.js";
import { ScrollRestoration } from "react-router-dom";
import Button from "../components/smalls/Button.jsx";
import CartButton from "../components/smalls/CartButton.jsx";
import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";
import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext.jsx";
import ColorPicker from "../components/smalls/ColorPicker.jsx";
import SizePicker from "../components/smalls/SizePicker.jsx";

const DetailProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const { itemsInCart, setItemsInCart } = useContext(GlobalContext);
  const { productDetail, newProducts } = useLoaderData();
  const firstNewsProducts = newProducts.newProducts.slice(0, 4);
  const product = productDetail.data[0];
  const stock = productDetail.stock;
  const productPrice = Math.trunc(product.price);
  const ofertPrice = Math.trunc(
    product.price - product.price * (product.discount / 100)
  );

  const [selectedColor, setSelectedColor] = useState(stock[0] || product); //Si no llega por el stock, ver producto

  const uniqueSize = new Set();
  const uniqueColor = new Set();
  const auxColors = [];
  const auxSizes = [];

  stock.forEach((element) => {
    const checkColor = auxColors.find((color) => color === element.rgb_code);
    if (!checkColor) {
      auxColors.push(element.rgb_code);
      uniqueColor.add(element);
    }
    const checkSize = auxSizes.find((size) =>  size === element.size_name);
  
    if (!checkSize) {
      auxSizes.push(element.size_name);
      console.log(element.quantity);
      uniqueSize.add(element);
    }
  });

  const colorsList = Array.from(uniqueColor);
  const sizeList = Array.from(uniqueSize);

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
      (item) => item.rgb_code === color.rgb_code && item.size_name === size
    );
    return stockItem ? stockItem.quantity : 0;
  }

  const handleClickAdd = () => {
    const stock = getStock(selectedColor, selectedSize);

    if (quantity > 0 && quantity <= stock) {
      setItemsInCart(itemsInCart + 1);
    } else {
      alert("Sin stock ");
    } // Falta un else con algun sweet alert
    // ACA tengo que hacer un fecth a un endpoint, necesito mandar el id del producto, el color y la cantidad.
  };

  return (
    <>
      <div className={style.image_container}>
        <img
          className={style.image}
          src={urlServer + "images/" + selectedColor.imageurl}
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
            sizeList={sizeList}
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
