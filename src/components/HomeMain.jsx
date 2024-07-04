import Button from "./smalls/Button";
import style from "../scss/modules/homemain.module.scss";
import Card from "./Card";
import ButtonLight from "./smalls/ButtonLight";

const HomeMain = () => {
  return (
    <>
    <main className={style.container}>
      <div>
        <h1 className={style.title}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className={style.text}>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button />
        <div className={style.data_container}>
          <div>
            <h3 className={style.text_data}>200+</h3>
            <p className={style.text_data_small}>International Brands</p>
          </div>
          <div>
            <h3 className={style.text_data}>2,000+</h3>
            <p className={style.text_data_small}>High-Quality Products</p>
          </div>
          <div>
            <h3 className={style.text_data}>30,000+</h3>
            <p className={style.text_data_small}>Happy Customers</p>
          </div>
        </div>
      </div>
      <div className={style.image_container}></div>
    </main>
         <div className={style.branchs_container}>
         <p>VERSACE</p>
         <p>ZARA</p>
         <p>GUCCI</p>
         <p>PRADA</p>
         <p>Calvin Klein</p>
       </div>
       <section className={style.arrivals}>
       <h2 className={style.h2}>NEW ARRIVALS</h2>
       <div className={style.card_container}>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       </div>
       <ButtonLight/>

    

       </section>
       <section>
       <h2 className={style.h2}>TOP SELLING</h2>
       </section>
       <section>
       <h2 className={style.h2}>BROWSE BY DRESS STYLE</h2>
       </section>
       </>
  );
};

export default HomeMain;
