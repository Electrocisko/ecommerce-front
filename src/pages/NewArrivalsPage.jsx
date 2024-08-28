import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { urlServer } from "../data/endpoints.js";

const NewArrivalsPage = () => {
  const { products } = useLoaderData();
  const data = products.data;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>NewArrivalsPage</h1>

      {data.map((item) => (
        <Card
          key={item.product_id}
          name={item.name}
          price={item.price}
          urlImage={urlServer + "images/" + item.imageurl}
        />
      ))}
    </div>
  );
};

export default NewArrivalsPage;
