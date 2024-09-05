/* eslint-disable react/prop-types */
import style from "../../scss/modules/sizepicker.module.scss"



const SizePicker = ({product, handleSizeClick}) => {
  return (
    <div className={style.sizesContainer}>
    {product.sizes_stock.map((item, index) => (
      <p className={style.size_badge} key={index} onClick={handleSizeClick}>
        {item.size}
      </p>
    ))}
  </div>
  )
}

export default SizePicker
