/* eslint-disable react/prop-types */
import style from "../../scss/modules/sizepicker.module.scss";

const SizePicker = ({ product, handleSizeClick, selectedSize }) => {

    console.log(selectedSize);

  return (
    <div className={style.sizesContainer}>
      {product.sizes_stock.map((item, index) => (

    
        <p
          className={`${ selectedSize == item.size ? style.size_badge_dark : style.size_badge}`}
          key={index}
          onClick={ ()=> handleSizeClick(item)}
        >
          {item.size}
        </p>
      ))}
    </div>
  );
};

export default SizePicker;
