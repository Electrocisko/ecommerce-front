/* eslint-disable react/prop-types */
import { useState } from "react";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import style from "../../scss/modules/menuitems.module.scss";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <li className={style.li}>
      {items.subMenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
            className={style.dropdown_button}
          >
            {items.title} {" "}
            {dropdown ?  <FaAngleUp /> :  <FaAngleDown /> }
              
          </button>
          <DropDown subMenus={items.subMenu} dropdown={dropdown} />
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;
