import { useState, useEffect } from "react";
import { urlServer } from "../data/endpoints";
import style from "../scss/pages/stylespages.module.scss";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const FormalPage = () => {

  const filtersInit = {
    minPrice: 0,
    maxPrice: 500,
    range: [0, 500],
    colors: [],
    sizes: [],
    styles: [],
  };

  const [products, setProducts] = useState({ data: [] })
  const [sizes, setSizes] = useState();
  const [colors, setColors] = useState();
  const [filters, setFilters] = useState(filtersInit);



  useEffect(() => {
    const URL = urlServer + "api/products";

    try {
      const fetchData = async () => {
        const response = await fetch(`${URL}/querys/`);
        const products = await response.json();
        const response1 = await fetch(urlServer + "api/colors");
        const response2 = await fetch(urlServer + "api/sizes");
        const colors = await response1.json();
        const sizes = await response2.json();
        setProducts(products);
        setColors(colors);
        setSizes(sizes);
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);



  return  <div className={style.container}>
    <h1>Query Page</h1>

    <section>
     
        <div className={style.cards_container}>
          {products?.data?.length > 0 ? (
            products.data.map((item) => (
              <Link to={`/detail/${item.product_id}`} key={item.product_id}>
                <Card
                  name={item.name}
                  price={item.price}
                  urlImage={`${urlServer}images/${item.imageurl}`}
                  discount={item.discount}
                />
              </Link>
            ))
          ) : (
            <p>Cargando productos...</p>
          )}
        </div>
      </section>

    </div>
};

export default FormalPage;
