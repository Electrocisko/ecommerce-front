/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const DropDown = ({subMenus, dropdown}) => {

    console.log("Dropdwon state:" + dropdown);

  return (
   <ul>
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

