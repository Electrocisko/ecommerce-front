/* eslint-disable react/prop-types */
import style from "../scss/modules/filters.module.scss"
import ColorPicker from "./smalls/ColorPicker"

const Filters = ({colorsList, handleColorClick, selectedColor}) => {

 
  return (
    <div className={style.container}>
      <h3>Filters</h3>
      <div>
        <ColorPicker colorsList={colorsList} handleColorClick={handleColorClick} selectedColor={selectedColor}/>
      </div>
    </div>
  )
}

export default Filters