/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "../../scss/modules/fullform.module.scss";
import { urlServer } from "../../data/endpoints";
import ColorStockPicker from "../smalls/ColorStockPicker ";
import { useLoaderData } from "react-router-dom";
import ColorPicker from "../smalls/ColorPicker";

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
      const response = await fetch(urlServer + "api/fullproduct", {
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
      console.error(error);
      alert("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        className={style.input}
        placeholder="Enter product name"
        name="name"
        onChange={handleChange}
        value={product.name}
        required
      />

      <label htmlFor="description"> Product Description</label>
      <textarea
        id="description"
        name="description"
        className={style.input}
        placeholder="Enter description "
        onChange={handleChange}
        value={product.description}
        rows={4}
        required
      ></textarea>

      <label htmlFor="branch"> Branch</label>
      <input
        id="branch"
        type="text"
        className={style.input}
        placeholder="Enter branch"
        name="branch"
        onChange={handleChange}
        value={product.branch}
        required
      />

      <label htmlFor="price">Price</label>
      <input
        id="price"
        type="number"
        className={style.input}
        placeholder="Enter price"
        name="price"
        onChange={handleChange}
        value={product.price}
        required
      />

      <label htmlFor="discount">Discount in %</label>
      <input
        id="discount"
        type="number"
        className={style.input}
        placeholder="Enter discount"
        name="discount"
        onChange={handleChange}
        value={product.discount}
      />

      <div className={style.radio_container}>
        <fieldset className={style.radio_group}>
          <legend>Select style:</legend>
          <label className={style.radio_label}>
            <input
              type="radio"
              id="Casual"
              name="style"
              value="Casual"
              checked={product.style == "Casual"}
              onChange={handleChange}
            />
            <span htmlFor="Casual">Casual</span>
          </label>
          <label className={style.radio_label}>
            <input
              type="radio"
              id="Formal"
              name="style"
              value="Formal"
              checked={product.style == "Formal"}
              onChange={handleChange}
            />
            <span htmlFor="Formal">Formal</span>
          </label>
          <label className={style.radio_label}>
            <input
              type="radio"
              id="Party"
              name="style"
              value="Party"
              checked={product.style == "Party"}
              onChange={handleChange}
            />
            <span htmlFor="Party">Party</span>
          </label>
        </fieldset>

        <fieldset className={style.radio_group}>
          <legend>Select gender:</legend>
          <label className={style.radio_label}>
            <input
              type="radio"
              id="men"
              name="gender"
              value="Men"
              checked={product.gender == "Men"}
              onChange={handleChange}
            />
            <span htmlFor="men">Men</span>
          </label>
          <label className={style.radio_label}>
            <input
              type="radio"
              id="women"
              name="gender"
              value="Women"
              checked={product.gender == "Women"}
              onChange={handleChange}
            />
            <span htmlFor="women">Women</span>
          </label>
          <label className={style.radio_label}>
            <input
              type="radio"
              id="unisex"
              name="gender"
              value="Unisex"
              checked={product.gender == "Unisex"}
              onChange={handleChange}
            />
            <span htmlFor="unisex">Unisex</span>
          </label>
        </fieldset>
      </div>
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
        <p> Choose Color</p>
        {/* <ColorStockPicker
          colorsList={colors}
          handleColorClick={handleColorClick}
          selectedColor={selectedColor}
        /> */}
        <ColorPicker
          colorsList={colors.colorList}
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
