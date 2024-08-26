import style from "../scss/pages/detailproductpage.module.scss";
import { useLoaderData } from "react-router-dom";
import { urlServer } from "../data/endpoints.js";
import { ScrollRestoration } from "react-router-dom";
import Button from "../components/smalls/Button.jsx";



const DetailProductPage = () => {
  const { productDetail } = useLoaderData();

  const product = productDetail.data;

  const productPrice = Math.trunc(product.price);
  const ofertPrice = Math.trunc(
    product.price - product.price * (product.discount / 100)
  );

  return (
    <>
      <div className={style.image_container}>
        <img
          className={style.image}
          src={urlServer + "images/" + product.imageurl}
          alt={"Imagen de " + product.name}
        />
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

        {/* ////////////////////////////////////////////////////////////////////////////////////// */}

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

        {/* ////////////////////////////////////////////////////////////////////////////////////// */}

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

        <div className={style.buttons_container}>
 
        </div>
        <div className={style.buttons_container}>
        <Button text={"Add to Cart"}/>
        </div>

   


      </div>

      <ScrollRestoration />
    </>
  );
};

export default DetailProductPage;
