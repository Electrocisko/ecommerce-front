/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "../../scss/modules/fullform.module.scss";
import { urlServer } from "../../data/endpoints";
import ColorStockPicker from "../smalls/ColorStockPicker ";
import { useLoaderData } from "react-router-dom";

const FullForm = () => {
  // Valores iniciales para el formulario
  const initialProductState = {
    name: "",
    price: "",
    description: "",
    discount: "0",
    style: "",
    branch: "",
    gender: "",
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
    name: "",
    price: "",
    description: "",
    discount: "0",
    style: "",
    branch: "",
    gender: "",
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
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("discount", product.discount);
    formData.append("style", product.style);
    formData.append("branch", product.branch);
    formData.append("gender", product.gender);
    formData.append("color_id", product.color_id);
    formData.append("sizeXS", product.sizeS);
    formData.append("sizeS", product.sizeS);
    formData.append("sizeM", product.sizeM);
    formData.append("sizeL", product.sizeL);
    formData.append("sizeXL", product.sizeXL);
    formData.append("sizeXXL", product.sizeS);
    formData.append("size3XL", product.sizeS);
    if (product.imageurl) {
      formData.append("imageurl", product.imageurl);
    }

    try {
      const response = await fetch(urlServer + "api/fullproduct", {
        method: "POST",
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
      alert("Error");
      console.error("Error to send form :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        type="text"
        className={style.input}
        placeholder="Enter product name"
        name="name"
        onChange={handleChange}
        value={product.name}
        required
      />



      <textarea
        name="description"
        className={style.input}
        placeholder="Enter description "
        onChange={handleChange}
        value={product.description}
        rows={4}
        required
      ></textarea>



 
      <input
        type="text"
        className={style.input}
        placeholder="Enter branch"
        name="branch"
        onChange={handleChange}
        value={product.branch}
        required
      />

      <div className={style.radio_container}>
      <input
        type="number"
        className={style.input}
        placeholder="Enter price"
        name="price"
        onChange={handleChange}
        value={product.price}
        required
      />

<input
        type="number"
        className={style.input}
        placeholder="Enter discount"
        name="discount"
        onChange={handleChange}
        value={product.discount}
      />
      </div>

    <div className={style.radio_container}>
    <fieldset className={style.radio_group}>
        <legend>Select style:</legend>
        <label className={style.radio_label}>
          <input type="radio" id="Casual" name="style" value="Casual" />
          <span htmlFor="Casual">Casual</span>
        </label>
        <label className={style.radio_label}>
          <input type="radio" id="Formal" name="style" value="Formal" />
          <span htmlFor="Formal">Formal</span>
        </label>
        <label className={style.radio_label}>
          <input type="radio" id="Party" name="style" value="Party" />
          <span htmlFor="Party">Party</span>
        </label>
      </fieldset>

      <fieldset className={style.radio_group}>
        <legend>Select gender:</legend>
        <label className={style.radio_label}>
          <input type="radio" id="men" name="gender" value="Men" />
          <span htmlFor="men">Men</span>
        </label>
        <label className={style.radio_label}>
          <input type="radio" id="women" name="gender" value="Women" />
          <span htmlFor="women">Women</span>
        </label>
        <label className={style.radio_label}>
          <input type="radio" id="unisex" name="gender" value="Unisex" />
          <span htmlFor="unisex">Unisex</span>
        </label>
      </fieldset>
    </div>




      <input type="file" name="imageurl" onChange={handleChange} />

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

export default FullForm;
