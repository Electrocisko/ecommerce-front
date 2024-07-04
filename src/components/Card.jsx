import style from "../scss/modules/card.module.scss"

const Card = () => {
  return (
    <div className={style.card}>
        <img src="/images/camisa_azul_hombre-removebg-preview.png" alt="camisa azul" />
        <h3>Blue Shirt</h3>
        <h4>$212</h4>
    </div>
  )
}

export default Card