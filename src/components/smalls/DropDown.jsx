/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "../../scss/modules/dropdown.module.scss";

const DropDown = ({ subMenus, dropdown, setDropdown , setLinks}) => {

const handleClick = () => {
  setDropdown((prev) => !prev)
  setLinks((prev) => !prev)
}



  return (
    <ul className={dropdown ? style.dropdown_container : style.hide}>
      {subMenus.map((sub, index) => (
        <li key={index}>
          <button onClick={() => handleClick()}>
            <Link className={style.link} to={sub.url}>{sub.title}</Link>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DropDown;
