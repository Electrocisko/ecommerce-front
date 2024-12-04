/* eslint-disable react/prop-types */
import style from "../../scss/modules/sizepicker.module.scss";

const SizePicker = ({ sizeList, handleSizeClick, selectedSize, filters }) => {

  let sizesFilter = [];
 if (! filters) {
  sizesFilter = [selectedSize]
 } else {
  sizesFilter = filters.sizes;
 }

  return (

    <div className={style.sizesContainer}>
      {sizeList.map((item, index) => (
        <p
          // className={`${ selectedSize == item ? style.size_badge_dark : style.size_badge}`}
          className={`${
            sizesFilter.some((size) => size.size_name === item.size_name) // si algun color concuerda es true
              ? style.size_badge_dark
              : style.size_badge
          }`}
          key={index}
          onClick={ ()=> handleSizeClick(item)}
        >
          {item.size_name}
        </p>
      ))}
    </div>
  );
};

export default SizePicker;
