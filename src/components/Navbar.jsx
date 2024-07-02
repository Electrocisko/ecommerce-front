import style from '../scss/modules/navbar.module.scss';
import { LuShoppingCart } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
  <nav>
    <ul className={style.ul_list}>
      <li className={style.logo}>SHOP.CO</li>

    

     <div className={style.center_links}>
     <li className={style.dropdown}>Shop <FaAngleDown/></li>
     <li>On Sale</li>
      <li>New Arrivals</li>
      <li>Brands</li>
     </div>
  
      <li className={style.searchbar}>
        <FaSearch/>
        Search for products....</li>
      <div className={style.right_links}>
        <li className={style.icon}><LuShoppingCart /></li>
        <li className={style.icon}><FaRegCircleUser/></li>
      </div>
    </ul>
  </nav>
  )
}

export default Navbar