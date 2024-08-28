import style from "../scss/pages/detailproductpage.module.scss";
import { useLoaderData } from "react-router-dom";
import { urlServer } from "../data/endpoints.js";
import { ScrollRestoration } from "react-router-dom";
import Button from "../components/smalls/Button.jsx";
import CartButton from "../components/smalls/CartButton.jsx";
import ButtonLight from "../components/smalls/ButtonLight.jsx";
import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";

const DetailProductPage = () => {
  const { productDetail, newProducts } = useLoaderData();

  const firstNewsProducts = newProducts.newProducts.slice(0, 4);

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
          <CartButton />
          <Button text={"Add to Cart"} />
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
