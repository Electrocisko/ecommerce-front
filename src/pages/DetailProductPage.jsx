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
  const product = productDetail.data[0];
  const stock = productDetail.stock;
  const productPrice = Math.trunc(product.price);
  const ofertPrice = Math.trunc(
    product.price - product.price * (product.discount / 100)
  );

  const colors = new Set();
  const sizes = new Set();
  for (let index = 0; index < stock.length; index++) {
    const item = stock[index];
    colors.add(item.rgb_code);
    sizes.add(item.size_name);
  }
  const colorsList = Array.from(colors);
  const sizeList = Array.from(sizes);

  const initColor = colorsList; // Color inicial si no seleciona ninguno
  const [selectedColor, setSelectedColor] = useState(initColor[0]);

  const handleColorClick = (color) => {
    setSelectedColor(color);  
  };

  const [selectedSize, setSelectedSize] = useState('S');

  const handleSizeClick = (item) => {
     setSelectedSize(item)
  }

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

          
          <SizePicker product={sizeList} handleSizeClick={handleSizeClick} selectedSize={selectedSize}/>

          <hr className={style.hr} />

          {/* <div className={style.cart_buttons_container}>
            <CartButton quantity={quantity} setQuantity={setQuantity} />
            <span onClick={handleClickAdd}>
              <Button text={"Add to Cart"} />
            </span>
          </div> */}
        </div>
      </div>
      <ScrollRestoration />
    </>
  );
};

export default DetailProductPage;
