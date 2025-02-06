import style from "../scss/modules/stylesection.module.scss";
import { Link } from "react-router-dom";

const StyleSection = () => {
  return (
    <>
      <section className={style.style_section}>
        <h2 className={style.h2}>BROWSE BY DRESS STYLE</h2>
        <div className={style.styles_container}>
          <div className={style.styles_casual}>
            <p>Casual</p>
            <Link to={"/casual"}>
              <img src="/images/casual_original.png" alt="casual clothes" />
            </Link>
          </div>
          <div className={style.styles_formal}>
            <Link to={"/formal"}>
              <img src="/images/formal.png" alt="formal clothes" />
              <p>Formal</p>
            </Link>
        
          </div>
          <div className={style.styles_party}>
            <p>Party</p>
            <Link to={"/filter"}><img src="/images/party.png" alt="party clothes" /></Link> 
          </div>
          <div className={style.styles_gym}>
            <p>Gym</p>
            <Link to={"gym"}><img src="/images/gym.png" alt="gym clothes" /></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default StyleSection;
