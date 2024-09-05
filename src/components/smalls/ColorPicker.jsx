/* eslint-disable react/prop-types */
import style from "../../scss/modules/colorpicker.module.scss";
import { FaCheck } from "react-icons/fa6";

const ColorPicker = ({product, handleColorClick, selectedColor}) => {





  return (
    <div className={style.colorsContainer}>
    {product.color_stock.map((item, index) => (
      <div
        key={index}
        className={style.circle}
        style={{ backgroundColor: `rgba${item.color}` }}
        onClick={() => handleColorClick(item.color)}
      >
        <span
          className={`${
            selectedColor === item.color
              ? style.selected
              : style.unselected
          }`}
        >
          <FaCheck />
        </span>
      </div>
    ))}
  </div>
  )
}

export default ColorPicker