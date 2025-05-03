/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "../scss/modules/card.module.scss";
import Price from "./smalls/Price";

const Card = ({ urlImage, product }) => {
  const [loading, setLoading] = useState(true);
  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className={style.card}>
      {loading && (
        <div className={style.spinner}>
          <h2>Loading...</h2>
        </div>
      )}
      <img
        src={urlImage}
        alt={"Imagen de " + name}
        onLoad={handleLoad}
        style={{ display: loading ? "none" : "block" }}
      />
      <div className={style.info}>
        <h3>{product.name}</h3>
        <Price product={product} />
      </div>
    </div>
  );
};

export default Card;
