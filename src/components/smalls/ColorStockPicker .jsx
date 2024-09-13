/* eslint-disable react/prop-types */
import style from "../../scss/modules/colorpicker.module.scss";
import { FaCheck } from "react-icons/fa6";

const ColorStockPicker = ({ colorsList, handleColorClick, selectedColor }) => {

  return (
  
    <div className={style.colorsContainer}>
      {colorsList.colorList.map((item, index) => (
        <div
          key={index}
          className={style.circle}
          style={{ backgroundColor: `${item.rgb_code}` }}
          onClick={() => handleColorClick(item)}
        >
          <span
            className={`${
              selectedColor === item.rgb_code
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

export default ColorStockPicker;
