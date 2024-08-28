import style from "../../scss/modules/cartbutton.module.scss";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const CartButton = () => {

  
  return (
    <div className={style.button}>
      <FaMinus />
      <p>1</p>
      <FaPlus />
    </div>
  );
};

export default CartButton;
