/* eslint-disable react/prop-types */
import style from "../../scss/modules/sizepicker.module.scss";

const SizePicker = ({ product, handleSizeClick, selectedSize }) => {

  return (

    <div className={style.sizesContainer}>
      {product.map((item, index) => (
        <p
          className={`${ selectedSize == item ? style.size_badge_dark : style.size_badge}`}
          key={index}
          onClick={ ()=> handleSizeClick(item)}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default SizePicker;
