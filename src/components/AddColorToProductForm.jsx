/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "../scss/modules/fullform.module.scss";
import { urlServer } from "../data/endpoints";
import ColorStockPicker from "../components/smalls/ColorStockPicker ";
import { useLoaderData } from "react-router-dom";

const AddColorToProductForm = () => {
  // Valores iniciales para el formulario
  const initialProductState = {
    product_id: "",
    imageurl: null,
    color_id: 2,
    sizeXS: "",
    sizeS: "",
    sizeM: "",
    sizeL: "",
    sizeXL: "",
    sizeXXL: "",
    size3XL: "",
  };

  const { colors } = useLoaderData();
  const [selectedColor, setSelectedColor] = useState({
    color_id: 2,
    color_name: "Blanco",
    rgb_code: "#FFFFFF",
  });

  const colorID = selectedColor.color_id;

  const [product, setProduct] = useState({
    product_id: "",
    imageurl: null,
    color_id: colorID,
    sizeXS: "",
    sizeS: "",
    sizeM: "",
    sizeL: "",
    sizeXL: "",
    sizeXXL: "",
    size3XL: "",
  });

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setProduct((prev) => ({
      ...prev,
      color_id: color.color_id,
    }));
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === "imageurl" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product_id", product.product_id);
    formData.append("color_id", product.color_id);
    formData.append("sizeXS", product.sizeXS);
    formData.append("sizeS", product.sizeS);
    formData.append("sizeM", product.sizeM);
    formData.append("sizeL", product.sizeL);
    formData.append("sizeXL", product.sizeXL);
    formData.append("sizeXXL", product.sizeXXL);
    formData.append("size3XL", product.size3XL);
    if (product.imageurl) {
      formData.append("imageurl", product.imageurl);
    }

    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(urlServer + "api/addcolor", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const result = await response.json();
      if (!result.statusOk)
        throw new Error(
          "Error: products could not be entered, check if the data is complete"
        );

      // Resetea el formulario y el color seleccionado

      setProduct(initialProductState);
      setSelectedColor({
        color_id: 2,
        color_name: "Blanco",
        rgb_code: "#FFFFFF",
      });

      // Reemplazar por un alert o directamente al value de form stock
      alert("Agregado correctamente");
    } catch (error) {
      console.error("Error", error.message);
      alert("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor="productId">Product ID</label>
      <input
        id="productId"
        type="text"
        className={style.input}
        placeholder="Enter product ID"
        name="product_id"
        onChange={handleChange}
        value={product.product_id}
        required
      />

      <div className={style.input_file}>
        <label htmlFor="fileInput">Elegir archivo</label>
        <input
          type="file"
          name="imageurl"
          onChange={handleChange}
          id="fileInput"
        />
      </div>

      <div className={style.colors_container}>
        <input
          type="color"
          value={selectedColor.rgb_code}
          onChange={() => {}}
        />
        <p> Choose Color</p>
        <ColorStockPicker
          colorsList={colors}
          handleColorClick={handleColorClick}
          selectedColor={selectedColor}
        />
      </div>

      <div className={style.inputs_container}>
        <p>Enter the quantity of each size</p>
        <div className={style.sizes_container}>
          <input
            className={style.input}
            type="text"
            name="sizeXS"
            placeholder="XS"
            onChange={handleChange}
            value={product.sizeXS}
          />
          <input
            className={style.input}
            type="text"
            name="sizeS"
            placeholder="S"
            onChange={handleChange}
            value={product.sizeS}
          />
          <input
            className={style.input}
            type="text"
            name="sizeM"
            placeholder="M"
            onChange={handleChange}
            value={product.sizeM}
          />
          <input
            className={style.input}
            type="text"
            name="sizeL"
            placeholder="L"
            onChange={handleChange}
            value={product.sizeL}
          />
          <input
            className={style.input}
            type="text"
            name="sizeXL"
            placeholder="XL"
            onChange={handleChange}
            value={product.sizeXL}
          />
          <input
            className={style.input}
            type="text"
            name="sizeXXL"
            placeholder="XXL"
            onChange={handleChange}
            value={product.sizeXXL}
          />
          <input
            className={style.input}
            type="text"
            name="size3XL"
            placeholder="3XL"
            onChange={handleChange}
            value={product.size3XL}
          />
        </div>
      </div>

      <button className={style.button} type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddColorToProductForm;
