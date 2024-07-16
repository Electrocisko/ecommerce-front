/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "../../scss/modules/dropdown.module.scss"



const DropDown = ({subMenus, dropdown}) => {

  return (
   <ul className={dropdown? style.dropdown_container : style.hide }>

    {
        subMenus.map((sub, index) => (
            <li key={index}>
                <Link to={sub.url}>{sub.title}</Link>
            </li>
        ))
    }
   </ul>
  ) 
}

export default DropDown 

