import { useState } from "react";
import style from "../../scss/modules/deleteform.module.scss";
import { urlServer } from "../../data/endpoints";

const DeleteForm = () => {
  const [productId, setProductId] = useState({
    productId: "",
  });
 
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const token = localStorage.getItem("authToken");
      const data = urlServer+`api/product/${productId.productId}`;
      const response = await fetch(data,{
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      console.log(result);
      if (result.statusOk == false) throw new Error( result.message || "Error deleting product");
      alert("Sucessfully deleted")
    } catch (error) {
      alert(error.message);
    }
    finally {
      setProductId({productId:""});
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.formId}>
      <label htmlFor="inputId">Enter the id of the product to delete</label>
      <input
        type="text"
        id="inputId"
        placeholder="Here"
        name="productId"
        value={productId.productId}
        onChange={(e) =>
          setProductId({ ...productId, productId: e.target.value })
        }
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DeleteForm;
