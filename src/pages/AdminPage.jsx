import AddFormProduct from "../components/AddFormProduct";


import style from "../scss/pages/adminpage.module.scss";
import StockForm from "../components/StockForm";

const AdminPage = () => {




  return (
    <>
      <div className={style.container}>
        <h1 style={{ textAlign: "center" }}>Admin Page</h1>
        <AddFormProduct />


        <h2>Stock Form</h2>
        <StockForm/>
      </div>
    </>
  );
};

export default AdminPage;
