/* eslint-disable react/prop-types */
import style from "../scss/modules/filters.module.scss";
import ColorPicker from "./smalls/ColorPicker";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import SizePicker from "./smalls/SizePicker";
import { useState } from "react";

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
  const [dropdownColor, setDropdownColor] = useState(true);
  const [dropdownSize, setDropdownSize] = useState(true);


  const [min, setMin] = useState(100); // Estado para el mínimo
  const [max, setMax] = useState(500); // Estado para el máximo
  const [value, setValue] = useState(min); // Estado para el valor actual

  return (
    <div className={style.container}>
      <h2>Filters</h2>

      <div className={style.price_container}>
        <h4>Price</h4>
        <input
          type="range"
          min={min}
          max={max}
          className={style.range_slider}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className={style.range_labels}>
          <span>{value || min}</span>
          <span>{max}</span>
        </div>
      </div>
      <hr />

      <div
        className={
          dropdownColor ? style.colors_container : style.colors_full_container
        }
      >
        <div className={style.subtitle}>
          <h2>Colors</h2>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdownColor ? "true" : "false"}
            onClick={() =>  setDropdownColor((prev) => !prev)}
            className={style.icon}
          >
            {dropdownColor ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </div>

        <ColorPicker
          colorsList={colorsList}
          handleColorClick={handleColorClick}
          selectedColor={selectedColor}
        />
      </div>
      <hr />
      <div className={style.sizes_container}>
        <div className={style.subtitle}>
          <h2>Sizes</h2>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdownSize ? "true" : "false"}
            onClick={() =>  setDropdownSize((prev) => !prev)}
            className={style.icon}
          >
            {dropdownSize ? <FaAngleUp /> : <FaAngleDown />}
          </button>
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
