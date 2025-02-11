/* eslint-disable react/prop-types */
import style from "../scss/modules/filters.module.scss";
import ColorPicker from "./smalls/ColorPicker";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import SizePicker from "./smalls/SizePicker";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { RiEqualizer3Line, RiCloseLine } from "react-icons/ri";

const Filters = ({
  colorsList,
  handleColorClick,
  selectedColor,
  sizeList,
  selectedSize,
  handleSizeClick,
  filters,
  minPrice,
  maxPrice,
  handleSlider,
  handleApplyFilters,
  handleStyleChange,
}) => {
  const [dropdownColor, setDropdownColor] = useState(true);
  const [dropdownSize, setDropdownSize] = useState(true);
  const [dropdownStyle, setDropdownStyle] = useState(false);
  const [showFilters, setShowFilters] = useState(window.matchMedia("(max-width: 415px)").matches); // Va de acuerdo a la pantalla

  const handleFilterIcon = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className={` ${style.container} ${!showFilters && style.border}`}>
      <div className={style.header}>
        {!showFilters && <h2>Filters</h2>}
        {showFilters ? (
          <button onClick={handleFilterIcon} className={style.filterButton}>
            <RiEqualizer3Line className={style.icon} /><p>Filters</p>
          </button>
        ) : (
          <button onClick={handleFilterIcon}>
            <RiCloseLine className={style.icon} />
          </button>
        )}
      </div>
      <div className={` ${showFilters ? style.hide : style.show}`}>
        <div className={style.price_container}>
          <hr></hr>
          <h2>Price</h2>

          <Slider
            range
            min={minPrice}
            max={maxPrice}
            step={10}
            value={filters.range}
            styles={{
              track: { backgroundColor: "black", height: 6 }, // Estilo del track (barra activa)
              handle: { backgroundColor: "black", borderColor: "black" }, // Estilo de los handles
              rail: { backgroundColor: "#d9d9d9", height: 6 }, // Estilo de la barra inactiva
            }}
            onChange={(e) => handleSlider(e)}
          />
          <div className={style.range_labels}>
            <span>{filters.range[0] || 0}</span>
            <span>{filters.range[1]}</span>
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
            filters={filters}
          />
        </div>
        <hr />
        <div
          className={`${style.sizes_base} ${
            dropdownSize ? style.sizes_container : style.sizes_full_container
          }`}
        >
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
            filters={filters}
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
              <input
                type="checkbox"
                id="Casual"
                name="Casual"
                onChange={handleStyleChange}
                checked={filters.styles.includes("Casual")}
              />
              <label htmlFor="Casual">Casual</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="Formal"
                name="Formal"
                onChange={handleStyleChange}
                checked={filters.styles.includes("Formal")}
              />
              <label htmlFor="Formal">Formal</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="Party"
                name="Party"
                onChange={handleStyleChange}
                checked={filters.styles.includes("Party")}
              />
              <label htmlFor="Party">Party</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="Gym"
                name="Gym"
                onChange={handleStyleChange}
                checked={filters.styles.includes("Gym")}
              />
              <label htmlFor="Gym">Gym</label>
            </div>
          </div>
          <hr />
          <button className={style.button_filter} onClick={handleApplyFilters}>
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
