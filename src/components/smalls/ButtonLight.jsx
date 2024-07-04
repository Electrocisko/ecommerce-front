import style from "../../scss/modules/button_light.module.scss"
import PropTypes from 'prop-types';

const ButtonLight = ({text}) => {
  return (
    <div className={style.button}>{text}</div>
  )
}

ButtonLight.propTypes = {
  text: PropTypes.string
}

export default ButtonLight