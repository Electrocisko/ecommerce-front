/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "../scss/modules/card.module.scss";


const Card = ({name, price, urlImage, discount}) => {

  const [loading, setLoading] = useState(true);
  const handleLoad = () => {
    setLoading(false)
  }

  return (
    <div className={style.card}>
         {loading && <div className={style.spinner}> <h2>Loading...</h2></div>}
      <img 
        src={urlImage} 
        alt={"Imagen de " + name} 
        onLoad={handleLoad} 
        style={{ display: loading ? 'none' : 'block' }} 
      />
      <div className={style.info}>
      <h3>{name}</h3>
        {/* <h4>{price}  {discount !== 0 ?  discount : null}</h4> */}
        {discount > 0? <h4 > <span >${price - ((discount/100) * price)}</span> <span >SALE!</span></h4>  : <h4>${price}</h4> }
      </div>
       
    </div>
  )
}

export default Card