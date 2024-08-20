import style from "../scss/modules/card.module.scss";


const Card = ({name, price, urlImage}) => {
  return (
    <div className={style.card}>
        <img src={urlImage} alt="camisa azul" />
        <h3>{name}</h3>
        <h4>{price}</h4>
    </div>
  )
}

export default Card