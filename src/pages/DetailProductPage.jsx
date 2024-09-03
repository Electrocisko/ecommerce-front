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

const DetailProductPage = () => {
  const { productDetail, newProducts } = useLoaderData();
  const firstNewsProducts = newProducts.newProducts.slice(0, 4);
  const product = productDetail.data;
  const productPrice = Math.trunc(product.price);
  const ofertPrice = Math.trunc(
    product.price - product.price * (product.discount / 100)
  );


 
  const [quantity, setQuantity] = useState(1);
  const[itemsInCart, setItemsInCart] = useOutletContext();

  const handleClickAdd = () => {
    console.log(productDetail);
    console.log("Cantidad en Carrito",itemsInCart);
    if (quantity > 0) {
      setItemsInCart(itemsInCart+1)
    }

   
  
    // ACA tengo que hacer un fecth a un endpoint, necesito mandar el id del producto, el color y la cantidad.
    // Las validaciones los podria hacer aca y luego tambien en el server
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
<div className={style.colorsContainer}>
  {product.color_stock.map((item, index) => (
    <div
      key={index}
      className={style.circle}
      style={{ backgroundColor: `rgba${item.color}` }}
    ></div>
  ))}
</div>

<hr className={style.hr} />
<h3 className={style.subtitle}>Choose Size</h3>

<div className={style.colorsContainer}>
  {product.sizes_stock.map((item, index) => (
    <p className={style.size_badge} key={index}>
      {item.size}
    </p>
  ))}
</div>

<hr className={style.hr} />

<div className={style.cart_buttons_container}>
  <CartButton quantity={quantity} setQuantity={setQuantity} />
  <span onClick={handleClickAdd}> <Button text={"Add to Cart"}  /></span>
   

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
