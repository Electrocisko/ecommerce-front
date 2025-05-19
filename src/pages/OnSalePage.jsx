import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import style from "../scss/pages/onsalepage.module.scss";
import StyleSection from "../components/StyleSection.jsx";
import { Link } from "react-router-dom";


const OnSalePage = () => {

  const { products } = useLoaderData();
  const data = products.onsale;


  return (
    <>
      <div>
        <h1 className={style.h1}>On Sale</h1>
        <div className={style.cards_container}>
          {data.map((item) => (
           <Link to={"/detail/" + item.product_id} key={item.product_id}>
           <Card
            product={item}
            urlImage={item.imageurl}
           />
         </Link>
          ))}
        </div>
      </div>
      <StyleSection/>
    </>
   
  )
}

export default OnSalePage