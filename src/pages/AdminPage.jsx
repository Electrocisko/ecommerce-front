import { Link } from "react-router-dom";
import style from "../scss/pages/adminpage.module.scss";
import LoginForm from "../components/smalls/LoginForm";

import { GlobalContext } from '../context/GlobalContext.jsx';
import { useContext } from "react";

const AdminPage = () => {

  const { user} = useContext(GlobalContext);
  return (
    <div className={style.container} >
      <h1>Dashboard Admin</h1>
      <h2>{user}</h2>
      <h2><Link to="/admin/full">Enter new product</Link></h2>
      <h2><Link to="/admin/delete">Delete Product by Id</Link></h2>
      <hr />
      <LoginForm user={user} />
      
    </div>
  );
};

export default AdminPage;
