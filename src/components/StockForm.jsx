import ColorStockPicker from "../components/smalls/ColorStockPicker ";
import { useLoaderData } from "react-router-dom";
import style from "../scss/modules/stockform.module.scss";
import { useState } from "react";
import SizeStockPicker from "./smalls/SizeStockPicker";
import { urlServer } from "../data/endpoints";

const StockForm = () => {
  const { colors, sizes } = useLoaderData();
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");
  const [selectedSize, setSelectedSize] = useState("S");

  // aca asigno el color id al objeto stock
  const handleColorClick = (color) => {
    setSelectedColor(color.rgb_code);
    setStock((prev) => ({
      ...prev,
      color_id: color.color_id,
    }));
  };

  const [stock, setStock] = useState({
    product_id: "",
    color_id: "1",
    size_id: "1",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStock((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size.size_name);
    setStock((prev) => ({
      ...prev,
      size_id: size.size_id,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const stockData = JSON.stringify(stock);
    try {
      const response = await fetch(urlServer + "api/stock", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: stockData,
      });
      const result = await response.json();
      // Puedes manejar el resultado aquí, por ejemplo, mostrar un mensaje de éxito
      if (result.statusOk == false) {
        throw new Error(result.message);
      } else {
        alert("Add successfully ");
      }
    } catch (error) {
      // Cambiar por un Sweet Alert
      alert(error.message);
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input type="color" value={selectedColor} onChange={() => {}} />
      <span>
        Choose Color
        <ColorStockPicker
          colorsList={colors}
          handleColorClick={handleColorClick}
        />
      </span>
      <div className={style.inputs_container}>
        <input
          className={style.input}
          type="text"
          placeholder="Enter Product ID"
          onChange={handleChange}
          name="product_id"
        />
        <input
          className={style.input}
          type="number"
          placeholder="Enter stock quantity "
          onChange={handleChange}
          name="quantity"
        />
      </div>
      <SizeStockPicker
        sizes={sizes}
        handleSizeClick={handleSizeClick}
        selectedSize={selectedSize}
      />
      <button className={style.button} type="submit">
        Add Stock
      </button>
    </form>
  );
};

export default StockForm;
