import style from "../../scss/modules/button.module.scss"
import PropTypes from 'prop-types';


const Button = ({text}) => {

return (
<div className={style.button}>{text}</div>)
}

Button.propTypes = {
  text: PropTypes.string
}

export default Button