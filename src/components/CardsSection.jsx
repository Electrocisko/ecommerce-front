/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "../scss/modules/cardssection.module.scss";
import ButtonLight from "./smalls/ButtonLight";
import Card from "./Card";
import { urlServer } from "../data/endpoints.js";

const CardsSection = ({ products, title, urlPath }) => {

  return (
    <section className={style.section}>
      <h2 className={style.h2}>{title}</h2>
      <div className={style.card_container}>
        {products.map((item) => (
          <Link to={"/detail/" + item.product_id} key={item.product_id} >
            <Card
              name={item.name}
              urlImage={urlServer + "images/" + item.imageurl}
              product={item}
            />
          </Link>
        ))}
      </div>
      {urlPath && <Link to={urlPath} className={style.button_center} onClick={() => window.scrollTo(0, 0)}> <ButtonLight text={"View All"} />
      </Link> }

      
    </section>
  );
};

export default CardsSection;

