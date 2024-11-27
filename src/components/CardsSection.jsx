/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "../scss/modules/cardssection.module.scss";
import ButtonLight from "./smalls/ButtonLight";
import Card from "./Card";
import { urlServer } from "../data/endpoints.js";

const CardsSection = ({ products, title }) => {
  return (
    <section className={style.section}>
      <h2 className={style.h2}>{title}</h2>
      <div className={style.card_container}>
        {products.map((item) => (
          <Link to={"/detail/" + item.product_id} key={item.product_id} >
            <Card
              name={item.name}
              price={item.price}
              urlImage={urlServer + "images/" + item.imageurl}
              discount = {item.discount}
            />
          </Link>
        ))}
      </div>
      <a href="/" className={style.button_center}>
        <ButtonLight text={"View All"} />
      </a>
    </section>
  );
};

export default CardsSection;

