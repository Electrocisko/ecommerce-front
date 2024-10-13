/* eslint-disable react/prop-types */
import style from "../../scss/modules/sizepicker.module.scss";

const SizePicker = ({ sizeList, handleSizeClick, selectedSize }) => {

  console.log(sizeList);

  return (

    <div className={style.sizesContainer}>
      {sizeList.map((item, index) => (
        <p
          className={`${ selectedSize == item ? style.size_badge_dark : style.size_badge}`}
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
