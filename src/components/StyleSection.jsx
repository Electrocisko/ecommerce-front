import style from "../scss/modules/stylesectionA.module.scss";
import { Link } from "react-router-dom";

const StyleSection = () => {
  return (
    <>
      <section className={style.style_section}>
        <h2 className={style.h2}>BROWSE BY DRESS STYLE</h2>
        <div className={style.styles_container}>
          <Link
            className={`${style.styles_casual} ${style.links}`}
            to={"/filter"}
            state={{ styleState: "Casual" }}
          >
            <p>Casual</p>
            <img src="/images/casual_original.png" alt="casual clothes" />
          </Link>

          <Link
            className={`${style.styles_formal} ${style.links}`}
            to={"/filter"}
            state={{ styleState: "Formal" }}
          >
            <p>Formal</p>
            <img src="/images/formal.png" alt="formal clothes" />
          </Link>

          <Link
            className={`${style.styles_party} ${style.links}`}
            to={"/filter"}
            state={{ styleState: "Party" }}
          >
            <p>Party</p>
            <img src="/images/party.png" alt="party clothes" />
          </Link>

          <Link
            className={`${style.styles_gym} ${style.links}`}
            to={"/filter"}
            state={{ styleState: "Gym" }}
          >
            <p>Gym</p>
            <img src="/images/gym.png" alt="gym clothes" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default StyleSection;
