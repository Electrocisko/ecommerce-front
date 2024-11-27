/* eslint-disable react/prop-types */
import style from "../scss/modules/filters.module.scss";
import ColorPicker from "./smalls/ColorPicker";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import SizePicker from "./smalls/SizePicker";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Link } from "react-router-dom";

const Filters = ({
  colorsList,
  handleColorClick,
  selectedColor,
  sizeList,
  selectedSize,
  handleSizeClick,
}) => {
  const [dropdownColor, setDropdownColor] = useState(true);
  const [dropdownSize, setDropdownSize] = useState(true);
  const [dropdownStyle, setDropdownStyle] = useState(false);

  const [range, setRange] = useState([0, 500]); // Valores iniciales [min, max]

  const handleSlider = (value) => {
    setRange(value);
  };

  return (
    <div className={style.container}>
      <h2>Filters</h2>
      <div className={style.price_container}>
        <h2>Price</h2>
        <Slider
          range
          min={0}
          max={500}
          step={10}
          defaultValue={range}
          styles={{
            track: { backgroundColor: "black", height: 6 }, // Estilo del track (barra activa)
            handle: { backgroundColor: "black", borderColor: "black" }, // Estilo de los handles
            rail: { backgroundColor: "#d9d9d9", height: 6 }, // Estilo de la barra inactiva
          }}
          onChange={(e) => handleSlider(e)}
        />
        <div className={style.range_labels}>
          <span>{range[0] || 0}</span>
          <span>{range[1]}</span>
        </div>
      </div>
      <hr />

      <div
        className={`${style.colors_base} ${
          dropdownColor ? style.colors_container : style.colors_full_container
        }`}
      >
        <div className={style.subtitle}>
          <h2>Colors</h2>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdownColor ? "true" : "false"}
            onClick={() => setDropdownColor((prev) => !prev)}
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
          <h2>Size</h2>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdownSize ? "true" : "false"}
            onClick={() => setDropdownSize((prev) => !prev)}
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

      <hr />
      <div>
        <div className={style.subtitle}>
          <h2>Dress Style</h2>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdownStyle ? "true" : "false"}
            onClick={() => setDropdownStyle((prev) => !prev)}
            className={style.icon}
          >
            {dropdownStyle ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </div>

        <div className={`${dropdownStyle ? style.show : style.hide}`}>
          <div>
            <input type="checkbox" id="casual" name="casual" />
            <label htmlFor="casual">Casual</label>
          </div>

          <div>
            <input type="checkbox" id="formal" name="formal" />
            <label htmlFor="formal">Formal</label>
          </div>

          <div>
            <input type="checkbox" id="party" name="party" />
            <label htmlFor="party">Party</label>
          </div>

          <div>
            <input type="checkbox" id="gym" name="gym" />
            <label htmlFor="gym">Gym</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
