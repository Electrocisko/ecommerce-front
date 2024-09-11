/* eslint-disable react/prop-types */
import style from "../../scss/modules/sizepicker.module.scss";

const SizeStockPicker = ({ sizes, handleSizeClick, selectedSize }) => {
  const sizesList = sizes.sizesList;
  const list = [...sizesList];

  return (
    <div className={style.sizesContainer}>
      {list.map((item, index) => (
        <p
          className={`${
            selectedSize == item.size_name ? style.size_badge_dark : style.size_badge
          }`}
          key={index}
          onClick={() => handleSizeClick(item)}
        >
          {item.size_name}
        </p>
      ))}
    </div>
  );
};

export default SizeStockPicker;
