/* eslint-disable react/prop-types */
import style from "../../scss/modules/price.module.scss";

const Price = ({ product }) => {
  const productPrice = Math.trunc(product.price);
  const ofertPrice = Math.trunc(
    product.price - product.price * (product.discount / 100)
  );
  return (
    <div>
      {product.discount === 0 ? (
        <h2 className={style.price}>$ {productPrice}</h2>
      ) : (
        <h2>
          <span className={style.price}>${ofertPrice}</span>
          <span className={style.original_price}> ${productPrice}</span>
          <span className={style.discount}>-{product.discount}%</span>
        </h2>
      )}
    </div>
  );
};

export default Price;
