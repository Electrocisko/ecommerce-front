/* eslint-disable react/prop-types */
import style from "../../scss/modules/colorpicker.module.scss";
import { FaCheck } from "react-icons/fa6";

const ColorPicker = ({ colorsList, handleColorClick, selectedColor, filters }) => {

  console.log(filters);


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
              selectedColor === item
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
