import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { urlServer } from "../data/endpoints.js";
import style from "../scss/pages/newarrivalspage.module.scss";
import StyleSection from "../components/StyleSection.jsx";
import { Link } from "react-router-dom";

const NewArrivalsPage = () => {
  const { newProducts } = useLoaderData();
  const data =newProducts.newProducts

  return (
    <>
      <div>
        <h1 className={style.h1}>New Arrivals</h1>
        <div className={style.cards_container}>
          {data.map((item) => (
           <Link to={"/detail/" + item.product_id} key={item.product_id}>
           <Card
            product={item}
             urlImage={urlServer + "images/" + item.imageurl}
           />
         </Link>
          ))}
        </div>
      </div>
      <StyleSection/>
    </>
  );
};

export default NewArrivalsPage;
