/* eslint-disable react/prop-types */
import style from "../../scss/modules/cartbutton.module.scss";
import PropTypes from 'prop-types';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const CartButton = ({quantity, setQuantity,selectedSize}) => {

  const addQuantity = () => {
    if (quantity < selectedSize.quantity)   setQuantity(quantity+1);
  };

  const subtractQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity-1);
    }
  }

  
  return (
    <div className={style.button}>
      <FaMinus onClick={subtractQuantity} className={style.cursor_pointer} />
      <p>{quantity}</p>
      <FaPlus onClick={addQuantity}  className={style.cursor_pointer} />
    </div>
  );

};

CartButton.propTypes = {
  quantity: PropTypes.number,
  setQuantity: PropTypes.func
}


export default CartButton;
