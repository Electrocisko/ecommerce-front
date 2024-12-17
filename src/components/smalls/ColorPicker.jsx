/* eslint-disable react/prop-types */
import style from "../../scss/modules/colorpicker.module.scss";
import { FaCheck } from "react-icons/fa6";

const ColorPicker = ({ colorsList, handleColorClick, selectedColor, filters }) => {
  // Esto es porque depende de que componente llame a este puede recibir un color o un array de colores.
let colorsFilter = [];
 if (! filters) {
  colorsFilter = [selectedColor]
 } else {
  colorsFilter = filters.colors;
 }

  return (
    <div className={style.colorsContainer}>
      {colorsList.map((item, index) => (
        <div
          key={index}
          className={style.circle}
          style={{ backgroundColor: `${item.hsl_code}` }}
          onClick={() => handleColorClick(item)}
        >
          <span
            className={`${
              colorsFilter.some((color) => color.hsl_code === item.hsl_code) // si algun color concuerda es true
                ? style.selected
                : style.unselected
            }`}
          >
            <FaCheck />
          </span>
        </div>
      ))} 
    </div>

  );
};

export default ColorPicker;
