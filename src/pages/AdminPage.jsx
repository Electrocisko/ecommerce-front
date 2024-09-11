import AddFormProduct from "../components/AddFormProduct";
import ColorPicker from "../components/smalls/ColorPicker";
import { useLoaderData } from "react-router-dom";
import style from "../scss/pages/adminpage.module.scss";

const AdminPage = () => {
  const { colorsList } = useLoaderData();

  console.log(colorsList);

  return (
    <>
      <div className={style.container}>
        <h1 style={{ textAlign: "center" }}>Admin Page</h1>
        <AddFormProduct />
        <h2>Colors</h2>
        <ColorPicker colorsList={colorsList} />
      </div>
    </>
  );
};

export default AdminPage;
