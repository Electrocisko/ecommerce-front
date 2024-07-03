import Button from "./smalls/Button";
import style from "../scss/modules/homemain.module.scss";

const HomeMain = () => {
  return (
    <main className={style.container}>
      <div>
        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button />
        <div>
          <div>
            <h2>200+</h2>
            <p>International Brands</p>
          </div>
          <div>
            <h2>2,000+</h2>
            <p>High-Quality Products</p>
          </div>
          <div>
            <h2>30,000+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>

      <div className={style.image_container}></div>
    </main>
  );
};

export default HomeMain;
