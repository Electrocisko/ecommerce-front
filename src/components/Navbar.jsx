import style from "../scss/modules/navbar.module.scss";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
// import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { menuItemsData } from "../data/menuItemsData";
import MenuItems from "./smalls/MenuItems";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.ul_list}>
        <li className={style.logo}>
          <Link to={"/"}>SHOP.CO</Link>
        </li>
        <div className={style.center_links}>
          {/* Show menu items */}
          {menuItemsData.map((menu, index) => (
            <MenuItems items={menu} key={index} />
          ))}
        </div>

        <li className={style.searchbar}>
          <FaSearch />
          Search for products....
        </li>
        <div className={style.right_links}>
          <li className={style.icon}>
            <LuShoppingCart />
          </li>
          <li className={style.icon}>
            <FaRegCircleUser />
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
