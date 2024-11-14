import Filters from "../components/Filters";
import style from "../scss/pages/stylespages.module.scss";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { urlServer } from "../data/endpoints.js";
import { Link } from "react-router-dom";

const CasualPage = () => {

  const { products } = useLoaderData();
  const data = products.data;
  return (
    <div className={style.container}>
      <section>
        <Filters />
      </section>
      <section>
        <h1>Casual</h1>
        <div className={style.cards_container}>
          {data.map((item) => (
           <Link to={"/detail/" + item.product_id} key={item.product_id}>
           <Card
             name={item.name}
             price={item.price}
             urlImage={urlServer + "images/" + item.imageurl}
             discount = {item.discount}
           />
         </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CasualPage;
