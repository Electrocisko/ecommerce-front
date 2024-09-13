/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "../../scss/modules/addformproduct.module.scss";
import { urlServer } from "../../data/endpoints";
import ColorStockPicker from "../smalls/ColorStockPicker ";
import { useLoaderData } from "react-router-dom";

const FullForm = () => {

  const { colors } = useLoaderData();
  const [selectedColor, setSelectedColor] = useState({
    color_id: 2,
    color_name: "Blanco",
    rgb_code: '#FFFFFF'
  });

  const colorID = selectedColor.color_id

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    discount: "",
    style: "",
    branch: "",
    gender: "",
    imageurl: null,
    color_id: colorID,
    sizeS: "",
    sizeM: "",
    sizeL: "",
    sizeXL: "",
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
    formData.append("sizeS", product.sizeS);
    formData.append("sizeM", product.sizeM);
    formData.append("sizeL", product.sizeL);
    formData.append("sizeXL", product.sizeXL);
    if (product.imageurl) {
      formData.append("imageurl", product.imageurl);
    }

    try {
      const response = await fetch(urlServer+'api/fullproduct', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      if (!result.statusOk) throw new Error("Error: products could not be entered, check if the data is complete")
      
// Reemplazar por un alert o directamente al value de form stock
    alert("Agregado correctamente");
    } catch (error) {
      alert("Error")
      console.error('Error to send form :', error);
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

      <input
        type="number"
        className={style.input}
        placeholder="Enter price"
        name="price"
        onChange={handleChange}
        value={product.price}
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
        type="number"
        className={style.input}
        placeholder="Enter discount"
        name="discount"
        onChange={handleChange}
        value={product.discount}
      />

      <input
        type="text"
        className={style.input}
        placeholder="Enter style"
        name="style"
        onChange={handleChange}
        value={product.style}
        required
      />

      <input
        type="text"
        className={style.input}
        placeholder="Enter branch"
        name="branch"
        onChange={handleChange}
        value={product.branch}
        required
      />
      <input
        type="text"
        className={style.input}
        placeholder="Enter gender"
        name="gender"
        onChange={handleChange}
        value={product.gender}
        required
      />

      <input  type="file" name="imageurl" onChange={handleChange} />

      <input type="color" value={selectedColor.rgb_code} onChange={() => {}} />
      <span>
        Choose Color
        <ColorStockPicker
          colorsList={colors}
          handleColorClick={handleColorClick}
          selectedColor={selectedColor}
        />
      </span>


      <div className={style.sizes_container}>
        <input  className={style.input} type="text" name="sizeS" placeholder="S" onChange={handleChange}   value={product.sizeS}/>
        <input  className={style.input} type="text" name="sizeM" placeholder="M" onChange={handleChange}   value={product.sizeM} />
        <input  className={style.input} type="text" name="sizeL" placeholder="L" onChange={handleChange}   value={product.sizeL} />
        <input  className={style.input} type="text" name="sizeXL" placeholder="XL" onChange={handleChange} value={product.sizeXL} />
      </div>







      <button className={style.button} type="submit">Submit</button>
    </form>
  );
};

export default FullForm;