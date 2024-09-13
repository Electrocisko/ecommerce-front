/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "../../scss/modules/addformproduct.module.scss";
import { urlServer } from "../../data/endpoints";
import ColorStockPicker from "../smalls/ColorStockPicker ";
import { useLoaderData } from "react-router-dom";

const FullForm = () => {

  const { colors } = useLoaderData();
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    discount: "",
    style: "",
    branch: "",
    gender: "",
    imageurl: null,
    color_id: "",
    size_id: "",
    quantity: "",
    sizeS: "",
    sizeM: "",
    sizeL: "",
    sizeXL: "",
  });

  const handleColorClick = (color) => {
    setSelectedColor(color.rgb_code);
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
    formData.append("size_id", product.size_id);
    formData.append("quantity", product.quantity);
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
      console.log(result);
      
// Reemplazar por un alert o directamente al value de form stock
    alert("Agregado correctamente");
    } catch (error) {
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
      />

      <input
        type="number"
        className={style.input}
        placeholder="Enter price"
        name="price"
        onChange={handleChange}
        value={product.price}
      />

      <textarea
        name="description"
        className={style.input}
        placeholder="Enter description "
        onChange={handleChange}
        value={product.description}
        rows={4}
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
      />

      <input
        type="text"
        className={style.input}
        placeholder="Enter branch"
        name="branch"
        onChange={handleChange}
        value={product.branch}
      />
      <input
        type="text"
        className={style.input}
        placeholder="Enter gender"
        name="gender"
        onChange={handleChange}
        value={product.gender}
      />

      <input  type="file" name="imageurl" onChange={handleChange} />

      <input type="color" value={selectedColor} onChange={() => {}} />
      <span>
        Choose Color
        <ColorStockPicker
          colorsList={colors}
          handleColorClick={handleColorClick}
        />
      </span>
{/* 
      <input
        type="text"
        className={style.input}
        placeholder="Enter color_id"
        name="color_id"
        onChange={handleChange}
        value={product.color_id}
      />

<input
        type="text"
        className={style.input}
        placeholder="Enter size_id"
        name="size_id"
        onChange={handleChange}
        value={product.size_id}
      />     */}

<input
        type="text"
        className={style.input}
        placeholder="Enterquantity"
        name="quantity"
        onChange={handleChange}
        value={product.quantity}
      /> 

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