/* eslint-disable react/prop-types */
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import style from "../../scss/modules/menuitems.module.scss";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const MenuItems = ({ items, setDropdown, dropdown, setLinks }) => {
  const handleClick = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <li className={style.li}>
      {items.subMenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => handleClick()}
            className={style.dropdown_button}
          >
            {items.title} {dropdown ? <FaAngleUp /> : <FaAngleDown />}
          </button>
          <DropDown
            subMenus={items.subMenu}
            dropdown={dropdown}
            setDropdown={setDropdown}
            setLinks={setLinks}
          />
        </>
      ) : (
        <div onClick={() => setLinks((prev) => !prev)}>
          <Link to={items.url}>{items.title}</Link>
        </div>
      )}
    </li>
  );
};

export default MenuItems;
