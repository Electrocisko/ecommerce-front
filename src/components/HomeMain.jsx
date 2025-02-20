import Button from "./smalls/Button";
import style from "../scss/modules/homemain.module.scss";
import { useLoaderData } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import { Link } from "react-router-dom";
import StyleSection from "./StyleSection.jsx";
import CardsSection from "./CardsSection.jsx";

const HomeMain = () => {
  const { newProducts, topProducts } = useLoaderData();
  const firstNewsProducts = newProducts.newProducts.slice(0, 4);
  const firstTopProducts = topProducts.topsells.slice(0, 4);

  return (
    <>
      <main className={style.container}>
        <div>
          <h1 className={style.title}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className={style.text}>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link to="/shop">
            <Button text={"Shop Now"} />
          </Link>

          <div className={style.data_container}>
            <div>
              <h3 className={style.text_data}>200+</h3>
              <p className={style.text_data_small}>International Brands</p>
            </div>
            <div>
              <h3 className={style.text_data}>2,000+</h3>
              <p className={style.text_data_small}>High-Quality Products</p>
            </div>
            <div>
              <h3 className={style.text_data}>30,000+</h3>
              <p className={style.text_data_small}>Happy Customers</p>
            </div>
          </div>
        </div>
        <div className={style.image_container}></div>
      </main>
      <div className={style.branchs_container}>
        <p>VERSACE</p>
        <p>ZARA</p>
        <p>GUCCI</p>
        <p>PRADA</p>
        <p>Calvin Klein</p>
      </div>

      <CardsSection products={firstNewsProducts} title="NEW ARRIVALS" urlPath={"/new"} />
      <CardsSection products={firstTopProducts} title="TOP SELLING"  />

      <StyleSection />
      <ScrollRestoration />
    </>
  );
};

export default HomeMain;
