import style from "../scss/modules/stylesection.module.scss"

const StyleSection = () => {
  return (
   <>
          <section className={style.style_section}>
       <h2 className={style.h2}>BROWSE BY DRESS STYLE</h2>
       <div className={style.styles_container}>
        <div className={style.styles_casual}>
          <p>Casual</p>
          <img src="/images/casual_original.png" alt="casual clothes" />
          </div>
        <div className={style.styles_formal}>
        <img src="/images/formal.png" alt="formal clothes" />
          <p>Formal</p></div>
        <div className={style.styles_party}><p>Party</p> <img src="/images/party.png" alt="party clothes" /></div>
        <div className={style.styles_gym}><p>Gym</p> <img src="/images/gym.png" alt="gym clothes" /></div>
       </div>
       </section>
   </>
  )
}

export default StyleSection