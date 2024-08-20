import Button from "./smalls/Button";
import style from "../scss/modules/homemain.module.scss";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import {urlServer} from "../data/endpoints.js"
import ButtonLight from "./smalls/ButtonLight";
import StayUpdated from "./smalls/StayUpdated";
import {Link} from "react-router-dom";


const HomeMain = () => {

  const { products } = useLoaderData();
  const items = products.data;
  const firstFourItems = items.slice(0, 4);

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
        <Link to="/shop"><Button text={"Shop Now"} /></Link>
        
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
       <section className={style.section}>
       <h2 className={style.h2}>NEW ARRIVALS</h2>
       <div className={style.card_container}>
     {firstFourItems.map((item) => (
          <Card key={item.key} name={item.name} price={item.price} urlImage={urlServer+"images/"+item.imageurl}/>
     ))}
       </div>
       <a href="/" className={style.button_center}><ButtonLight text={"View All"}/></a>
       </section>

       <section className={style.section}>
       <h2 className={style.h2}>TOP SELLING</h2>
       <div className={style.card_container}>
       {firstFourItems.map((item) => (
          <Card key={item.key} name={item.name} price={item.price} urlImage={urlServer+"images/"+item.imageurl}/>
     ))}
       </div>
        <a href="/" className={style.button_center}><ButtonLight text={"View All"}/></a>
    
       </section>

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

      <section>
        <StayUpdated/>
      </section>


       </>
  );
};

export default HomeMain;
