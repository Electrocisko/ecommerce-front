import Filters from "../components/Filters";
import style from "../scss/pages/stylespages.module.scss";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { urlServer } from "../data/endpoints.js";
import { Link } from "react-router-dom";
import { useState } from "react";

const CasualPage = () => {
  const { products, colors, sizes } = useLoaderData();

  const handleColorClick = () => {
    console.log("Handel click");
  };

  const handleSizeClick = () => {
    console.log("handleclick");
  };

  const sizeList = sizes.sizesList;

  const data = products.data;

 const [priceValue, setPriceValue] = useState(100)

  return (
    <div className={style.container}>
      <section>
        <Filters
          colorsList={colors.colorList}
          handleColorClick={handleColorClick}
          selectedColor={colors.colorList[0]}
          sizeList={sizeList}
          selectedSize={sizeList[0]}
          handleSizeClick={handleSizeClick}
          priceValue={priceValue}
          setPriceValue={setPriceValue}
        />
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
                discount={item.discount}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CasualPage;
