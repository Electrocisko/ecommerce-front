/* eslint-disable react/prop-types */
import { useState } from "react";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(true);

  return (
    <li>
      {items.subMenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={(prev) => setDropdown(!prev)}
          >
            {items.title}
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
