/* eslint-disable react/prop-types */
import style from "../../scss/modules/price.module.scss";

const Price = ({ product }) => {
  const productPrice = Math.trunc(product.price);
  const ofertPrice = Math.trunc(
    product.price - product.price * (product.discount / 100)
  );
  return (
    <div className={style.container} >
      {product.discount === 0 ? (
        <div className={style.price}>  $ {productPrice} </div>
      ) : (
        <div className={style.price_container}>
          <span className={style.price}> ${ofertPrice} </span>
          <span className={style.original_price}>${productPrice} </span>
          <span className={style.discount}>-{product.discount}%</span>
        </div>
      )}
    </div>
  );
};

export default Price;
