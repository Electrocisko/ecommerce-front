/* eslint-disable react/prop-types */
import style from "../scss/modules/filters.module.scss";
import ColorPicker from "./smalls/ColorPicker";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import SizePicker from "./smalls/SizePicker";
import {useState, useEffect, useMemo } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { RiCloseLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { urlServer } from "../data/endpoints";

const Filters = ({ onApply, styleFromState, handleFilterIcon }) => {
  const [dropdownColor, setDropdownColor] = useState(true);
  const [dropdownSize, setDropdownSize] = useState(true);
  const [dropdownStyle, setDropdownStyle] = useState(false);
  const thisPagePath = useLocation().pathname;

 



  const filtersInit = useMemo(
    () => ({
      minPrice: 0,
      maxPrice: 500,
      range: [0, 500],
      colors: [],
      sizes: [],
      styles: styleFromState ? [styleFromState] : [],
    }),
    [styleFromState]
  );

  const [filters, setFilters] = useState(filtersInit);
  const [colors, setColors] = useState({ statusOk: true, colorList: [] });
  const [sizes, setSizes] = useState({ statusOk: true, sizesList: [] });


  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const resColors = await fetch(`${urlServer}api/colors`);
        const resSizes = await fetch(`${urlServer}api/sizes`);
        const colorData = await resColors.json();
        const sizeData = await resSizes.json();
        setColors(colorData);
        setSizes(sizeData);
      } catch (error) {
        console.error("Error fetching filters data", error);
      }
    };
    fetchFilters();
  }, []);

  const handleColorClick = (color) => {
    const updatedColors = filters.colors.some(c => c.color_id === color.color_id)
      ? filters.colors.filter(c => c.color_id !== color.color_id)
      : [...filters.colors, color];

    setFilters({ ...filters, colors: updatedColors });
  };

  const handleSizeClick = (size) => {
    const updatedSizes = filters.sizes.some(s => s.size_id === size.size_id)
      ? filters.sizes.filter(s => s.size_id !== size.size_id)
      : [...filters.sizes, size];

    setFilters({ ...filters, sizes: updatedSizes });
  };

  const handleSlider = (value) => {
    setFilters({ ...filters, range: value });
  };



  const handleApplyFilters = () => {
    onApply(filters);
  };


  return (
    <div className={` ${style.container}`}>
      <button className={style.icon_close} onClick={handleFilterIcon}>
        <RiCloseLine />
      </button>

      <div className={style.price_container}>
        <h2>Filters</h2>

        <hr></hr>
        <h2>Price</h2>

        <Slider
          range
          min={filters.minPrice}
          max={filters.maxPrice}
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
          colorsList={colors.colorList}
          handleColorClick={handleColorClick}
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
          sizeList={sizes.sizesList}
          handleSizeClick={handleSizeClick}
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

        <Link
            className={`${
              styleFromState == "All" ? style.bold : style.links
            }`}
            to={thisPagePath}
           state={{ styleState: "All" }}
          >
            <p>All</p>
          </Link>
          <Link
            className={`${
              styleFromState == "Casual" ? style.bold : style.links
            }`}
            to={thisPagePath}
            state={{ styleState: "Casual" }}
          >
            <p>Casual</p>
          </Link>

          <Link
            className={`${
              styleFromState == "Formal" ? style.bold : style.links
            }`}
            to={thisPagePath}
            state={{ styleState: "Formal" }}
          >
            <p>Formal</p>
          </Link>

          <Link
            className={`${
              styleFromState == "Party" ? style.bold : style.links
            }`}
            to={thisPagePath}
            state={{ styleState: "Party" }}
          >
            <p>Party</p>
          </Link>

          <Link
            className={`${styleFromState == "Gym" ? style.bold : style.links}`}
            to={thisPagePath}
            state={{ styleState: "Gym" }}
          >
            <p>Gym</p>
          </Link>
        </div>
        <hr />
        <button className={style.button_filter} onClick={handleApplyFilters}>
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default Filters;
