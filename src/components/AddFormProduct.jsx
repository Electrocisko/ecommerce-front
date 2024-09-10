import { useState } from "react";
import style from "../scss/modules/addformproduct.module.scss";
import { urlServer } from "../data/endpoints";

const AddFormProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    discount: "",
    style: "",
    branch: "",
    gender: "",
    imageurl: null,
  });

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
    if (product.imageurl) {
      formData.append("imageurl", product.imageurl);
    }

    try {
      const response = await fetch(urlServer+'api/product', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      console.log(result);
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

      <input type="file" name="imageurl" onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddFormProduct;
