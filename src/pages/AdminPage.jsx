import AddFormProduct from "../components/AddFormProduct";
import style from "../scss/pages/adminpage.module.scss";
import StockForm from "../components/StockForm";
import { useState } from "react";

const AdminPage = () => {

  const [productId, setProductId] = useState('');

  return (
    <>
      <div className={style.container}>
        <h1 style={{ textAlign: "center" }}>Admin Page</h1>
        <AddFormProduct  setProductId={setProductId} />


        <h2>Stock Form</h2>
        <StockForm productId={productId}/>
      </div>
    </>
  );
};

export default AdminPage;
