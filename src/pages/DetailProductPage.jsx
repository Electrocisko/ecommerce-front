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
  const { productDetail, newProducts } = useLoaderData();
  const firstNewsProducts = newProducts.newProducts.slice(0, 4);
  const product = productDetail.data;
  const productPrice = Math.trunc(product.price);
  const ofertPrice = Math.trunc(
    product.price - product.price * (product.discount / 100)
  );

  const initColor = product.color_stock[0]; // Color inicial si no seleciona ninguno
  const [selectedColor, setSelectedColor] = useState(initColor);
  const [quantity, setQuantity] = useState(1);
  const [itemsInCart, setItemsInCart] = useOutletContext();
  const [selectedSize, setSelectedSize] = useState('s');

  const handleSizeClick = (item) => {
    console.log("Clickeando den sizes", item.size);
    setSelectedSize(item.size)
  }



  const handleColorClick = (color) => {
    setSelectedColor(color);    
  };

  const handleClickAdd = () => {
    console.log(selectedColor);
    if (quantity > 0 & quantity <= selectedColor.quantity) {
      setItemsInCart(itemsInCart + 1);
    }
    // ACA tengo que hacer un fecth a un endpoint, necesito mandar el id del producto, el color y la cantidad.
    // Las validaciones los podria hacer aca y luego tambien en el server
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
            product={product}
            handleColorClick={handleColorClick}
            selectedColor={selectedColor}
          />

          <hr className={style.hr} />
          <h3 className={style.subtitle}>Choose Size</h3>


          <SizePicker product={product} handleSizeClick={handleSizeClick} selectedSize={selectedSize}/>

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
