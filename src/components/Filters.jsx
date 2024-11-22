/* eslint-disable react/prop-types */
import style from "../scss/modules/filters.module.scss";
import ColorPicker from "./smalls/ColorPicker";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import SizePicker from "./smalls/SizePicker";

const Filters = ({
  colorsList,
  handleColorClick,
  selectedColor,
  sizeList,
  selectedSize,
  handleSizeClick,
  priceValue,
  setPriceValue,
}) => {
  return (
    <div className={style.container}>
      <h2>Filters</h2>

      <div className={style.price_container}>
        <h4>Price</h4>
        <input
          type="range"
          min="0"
          max="500"
          className={style.range_slider}
          onChange={(e) => setPriceValue(e.target.value)}
        />
        <div className={style.range_labels}>
          <span>{priceValue || 0}</span>
          <span>{500}</span>
        </div>
      </div>
      <hr />

      <div className={style.colors_container}>
        <div className={style.subtitle}>
          <h2>Colors</h2>
          <FaAngleDown />
        </div>

        <ColorPicker
          colorsList={colorsList}
          handleColorClick={handleColorClick}
          selectedColor={selectedColor}
        />
      </div>
      <hr />
      <div className={style.colors_container}>
        <div className={style.subtitle}>
          <h2>Sizes</h2>
          <FaAngleUp />
        </div>
        <SizePicker
          sizeList={sizeList}
          handleSizeClick={handleSizeClick}
          selectedSize={selectedSize}
        />
      </div>
    </div>
  );
};

export default Filters;
