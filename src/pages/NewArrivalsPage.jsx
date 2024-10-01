import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { urlServer } from "../data/endpoints.js";
import style from "../scss/pages/newarrivalspage.module.scss";

const NewArrivalsPage = () => {
  const { products } = useLoaderData();
  const data = products.data;

  return (
    <div>
      <h1 className={style.h1}>NewArrivalsPage</h1>

      <div className={style.cards_container}>

      {data.map((item) => (
        <Card
          key={item.product_id}
          name={item.name}
          price={item.price}
          urlImage={urlServer + "images/" + item.imageurl}
        />
      ))}
      </div>

    </div>
  );
};

export default NewArrivalsPage;
