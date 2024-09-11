import ColorStockPicker from "../components/smalls/ColorStockPicker ";
import { useLoaderData } from "react-router-dom";
import style from "../scss/modules/stockform.module.scss"
import { useState } from "react";

const StockForm = () => {

    const { colors } = useLoaderData();
    const [selectedColor, setSelectedColor] = useState('#FFFFFF');

  // aca asigno el color id al objeto stock
    const handleColorClick = (color) => {
      setSelectedColor(color.rgb_code)
      setStock((prev) => ({
        ...prev,
        color_id:  color.color_id}));
    }

    const [stock, setStock] = useState({
      product_id: "",
      color_id: "",
      size_id:"",
      quantity: ""
    })

    const handleChange = (e) => {
      const { name, value } = e.target;
      setStock((prev) => ({
        ...prev,
        [name]:  value}));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(stock);
    }

  return (
   
   <form className={style.form} onSubmit={handleSubmit}>
        <input type="color" value={selectedColor} onChange={() => {}} />
        <span>Choose Color
             <ColorStockPicker colorsList={colors} handleColorClick={handleColorClick} />
        </span>
         <div className={style.inputs_container}>
         <input className={style.input} type="text" placeholder="Enter Product ID"  onChange={handleChange} name="product_id" />
         <input className={style.input} type="number" placeholder="Enter stock quantity "  onChange={handleChange} name="quantity" />
         </div>
         <button className={style.button} type="submit">Add Stock</button>
   </form>
  )
}

export default StockForm