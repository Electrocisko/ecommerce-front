/* eslint-disable react-hooks/exhaustive-deps */
import style from "../scss/pages/detailproductpage.module.scss";
import { useLoaderData, useParams } from "react-router-dom";
import { urlServer } from "../data/endpoints.js";
import { ScrollRestoration } from "react-router-dom";
import Button from "../components/smalls/Button.jsx";
import CartButton from "../components/smalls/CartButton.jsx";
import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext.jsx";
import ColorPicker from "../components/smalls/ColorPicker.jsx";
import SizePicker from "../components/smalls/SizePicker.jsx";
import Price from "../components/smalls/Price.jsx";
import CardsSection from "../components/CardsSection.jsx";

const DetailProductPage = () => {
  const { id } = useParams(); // Captura el parámetro de la URL
  const [quantityAddButton, setQuantityAddButton] = useState(1);
  const { itemsInCart, setItemsInCart } = useContext(GlobalContext);
  const { productDetail, newProducts } = useLoaderData();
  const firstNewsProducts = newProducts.newProducts.slice(0, 4);
  const product = productDetail.data[0];
  const stock = productDetail.stock;

  const [selectedColor, setSelectedColor] = useState(stock[0] ); //Si no llega por el stock, ver producto
  const uniqueColor = new Set();
  const auxColors = [];

  stock.forEach((element) => {
    const checkColor = auxColors.find((color) => color === element.hsl_code);
    if (!checkColor) {
      auxColors.push(element.hsl_code);
      uniqueColor.add(element);
    }
  });

  const colorsList = Array.from(uniqueColor);

  const handleColorClick = (item) => {
    setSelectedColor(item);
    setSelectedSize(item);
  };

  //Sizes

  const [sizeList, setsizeList] = useState([]);
  const [selectedSize, setSelectedSize] = useState(stock[0]);
 
  const handleSizeClick = (item) => {
    setSelectedSize(item);
  };

  const actualizarStock = async (quantity,product_id ,color_id,size_id) => {
    const token = localStorage.getItem("authToken");

    try {
      const response = await fetch("http://localhost:8080/api/products/updatestock", {
        method: "PUT",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": `Bearer ${token}`
        },
        body: new URLSearchParams({
          quantity,
          product_id,
          color_id,
          size_id
        }).toString()
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log("Stock actualizado:", data);
      } else {
        console.error("Error al actualizar el stock:", data);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };
  
  const handleClickAdd =  () => {
    const quantityInStock = selectedSize.quantity;// Para controlar el stock que se agrega al boton de agregar
    if (quantityAddButton > 0 && quantityAddButton <= quantityInStock) {
      setItemsInCart(itemsInCart + quantityAddButton);
    } else {
      alert("Sin stock ");
    } 
    // ACA tengo que hacer un fecth a un endpoint, necesito mandar el id del producto, talle el color y la cantidad.
    //En realidad no va aca sino tiene que ir al carrito cuando se hace la compra.
    actualizarStock(quantityAddButton, productDetail.data[0].product_id, selectedSize.color_id, selectedSize.size_id);
  };

  useEffect(() => {
    const listOfSizesByColor = stock.filter(
      (item) => item.hsl_code === selectedColor.hsl_code
    );
    setsizeList(listOfSizesByColor);
  }, [selectedColor]);


  useEffect(() => {
   setSelectedColor(stock[0])
   setSelectedSize(stock[0])
  },[id])


  return (
    <>
      <div className={style.image_container}>
        <img
          className={style.image}
          //src={urlServer + "images/" + selectedColor.imageurl}
          src={selectedColor.imageurl}
          alt={"Imagen de " + product.name}
        />

        <div className={style.buttons_container}>
          <h1 className={style.title}>{product.name}</h1>
          <Price product={product}/>
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
            <CartButton quantity={quantityAddButton} setQuantity={setQuantityAddButton} selectedSize={selectedSize} />
            <span onClick={handleClickAdd}>
              <Button text={"Add to Cart"} />
            </span>
          </div>
        </div>
      </div>
      <CardsSection products={firstNewsProducts} title="YOU MIGHT ALSO LIKE" />
      <ScrollRestoration />
    
    </>
  );
};

export default DetailProductPage;
