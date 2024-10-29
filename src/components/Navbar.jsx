import style from "../scss/modules/navbar.module.scss";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { menuItemsData } from "../data/menuItemsData";
import MenuItems from "./smalls/MenuItems";
import PropTypes from 'prop-types';
import { useState, useContext } from "react";
import {GlobalContext} from "../context/GlobalContext.jsx"; 
import LoginForm from "../components/smalls/LoginForm.jsx";
import Modal from "../components/smalls/Modal.jsx";




const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [links, setLinks] = useState(false);
  const {itemsInCart} = useContext(GlobalContext);

  // Para modal de login
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <nav className={style.navbar}>
      <ul className={style.ul_list}>
        <li
          className={style.mobil_menu}
          onClick={() => setLinks((prev) => !prev)}
        >
          <FaBars />
        </li>

        <li className={style.logo}>
          <Link to={"/"}>SHOP.CO</Link>
        </li>

        <div className={style.center_links}>
          {/* Show menu items */}
          {menuItemsData.map((menu, index) => (
            <MenuItems
              items={menu}
              key={index}
              dropdown={dropdown}
              setDropdown={setDropdown}
              
            />
          ))}
        </div>

        <li className={style.searchbar}>
          <FaSearch />
          Search for products....
        </li>

        <div className={style.right_links}>
          <li className={style.mobil_searchbar}>
            <IoSearchSharp /> 
            
          </li>
          <li className={style.icon}>
            <LuShoppingCart /><span className={style.cart_items}>{itemsInCart > 0 ? itemsInCart : null}</span>
          </li>
          <li className={style.icon}>
           

            <button onClick={toggleModal}>
            <FaRegCircleUser className={style.icon} />
      </button>

      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <LoginForm />
      </Modal>






          </li>
        </div>
      </ul>
      {links && (
        <div className={style.mobile_menu_expanded}>
          {menuItemsData.map((menu, index) => (
            <MenuItems
              items={menu}
              key={index}
              dropdown={dropdown}
              setDropdown={setDropdown}
              setLinks={setLinks}
            />
          ))}
        </div>
      )}
    </nav>
  );
};


Navbar.propTypes = {
  itemsInCart: PropTypes.number
}
export default Navbar;
