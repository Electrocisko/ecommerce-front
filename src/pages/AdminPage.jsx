import { Link } from "react-router-dom";
import style from "../scss/pages/adminpage.module.scss";
import LoginForm from "../components/smalls/LoginForm";

const AdminPage = () => {
  return (
    <div className={style.container} >
      <h1>Dashboard Admin</h1>
      <h2><Link to="/admin/full">Enter new product</Link></h2>
      <h2><Link to="/admin/delete">Delete Product by Id</Link></h2>
      <hr />
      <LoginForm/>
      
    </div>
  );
};

export default AdminPage;
