/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { urlServer } from "../data/endpoints";
import style from "../scss/pages/stylespages.module.scss";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Filters from "../components/Filters";

const FilterPage = ({estilo}) => {

  let filtersInit = {
    minPrice: 0,
    maxPrice: 500,
    range: [0, 500],
    colors: [],
    sizes: [],
    styles: [],
  };

  if (estilo) {
    filtersInit={...filtersInit, styles:[estilo]}
  }

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState({ data: [] });
  const [sizes, setSizes] = useState({
    statusOk: true,
    sizesList: [
      {
        size_id: 1,
        size_name: "XS",
      },
    ],
  });
  const [colors, setColors] = useState({
    statusOk: true,
    colorList: [
      {
        color_id: 1,
        color_name: "Negro",
        hsl_code: "hsl(0, 0%, 0%)",
      },
    ],
  });
  const [filters, setFilters] = useState(filtersInit);
  const [priceValue, setPriceValue] = useState(100);

  const filteredProducts = async (urlParams) => {
    try {
      setLoading(true);
      const resp = await fetch(urlParams);
      const data = await resp.json();
      setProducts(data);
    } catch (error) {
      console.log("Error");
    } finally {
      setLoading(false);
    }
  };

  const handleColorClick = (e) => {
    const auxColorsList = filters.colors;
    const index = auxColorsList.indexOf(e);
    if (index != -1) {
      auxColorsList.splice(index, 1);
    } else {
      auxColorsList.push(e);
    }
    const auxFilter = {
      ...filters,
      colors: auxColorsList,
    };
    setFilters(auxFilter);
  };

  const handleSizeClick = (e) => {
    const auxSizesList = filters.sizes;
    const index = auxSizesList.indexOf(e);
    if (index != -1) {
      auxSizesList.splice(index, 1);
    } else {
      auxSizesList.push(e);
    }
    const auxFilter = {
      ...filters,
      sizes: auxSizesList,
    };
    setFilters(auxFilter);
  };

  const handleSlider = (value) => {
    const auxFilter = {
      ...filters,
      range: value,
    };
    setFilters(auxFilter);
  };

  const handleStyleChange = (e) => {
    const { name, checked } = e.target;
    const updatedStyles = checked
      ? [...filters.styles, name] // Agregar el estilo seleccionado
      : filters.styles.filter((style) => style !== name);

    const auxFilter = {
      ...filters,
      styles: updatedStyles,
    };
    setFilters(auxFilter);
  };

  const handleApplyFilters = () => {
    let urlParams = urlServer + "api/products/querys/?";
    if (filters.colors.length > 0) {
      const colors = filters.colors.map((color) => color.color_id);
      const queryColors = "colors=" + colors + "&";
      urlParams += queryColors;
    }

    if (filters.sizes.length > 0) {
      const sizes = filters.sizes.map((size) => size.size_id);
      const querySizes = "sizes=" + sizes + "&";
      urlParams += querySizes;
    }

    if (filters.styles.length > 0) {
      const queryStyles = "styles=" + filters.styles + "&";
      urlParams += queryStyles;
    }

    if (filters.range[0] > 0) {
      const queryMinPrice = "price_min=" + filters.range[0] + "&";
      urlParams += queryMinPrice;
    } else {
      const queryMinPrice = "price_min=" + filters.minPrice + "&";
      urlParams += queryMinPrice;
    }

    if (filters.range[1] < filters.maxPrice) {
      const queryMaxPrice = "price_max=" + filters.range[1] + "&";
      urlParams += queryMaxPrice;
    } else {
      const queryMaxPrice = "price_max=" + filters.maxPrice + "&";
      urlParams += queryMaxPrice;
    }
    // Hacer scroll hacia arriba
    window.scrollTo({ top: 0, behavior: "smooth" });

    filteredProducts(urlParams);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const URL = urlServer + "api/products";

    try {
      const fetchData = async () => {
        let response;
        if (estilo) {
          response = await fetch(`${URL}/querys/?styles=${estilo}`);
        } else {
          response = await fetch(`${URL}/querys/`);
        }
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
  }, [estilo]);

  return (
    <div className={style.container}>
      <section>
        <Filters
          colorsList={colors.colorList}
          handleColorClick={handleColorClick}
          selectedColor={colors.colorList[0]}
          sizeList={sizes.sizesList}
          selectedSize={sizes.sizesList[0]}
          handleSizeClick={handleSizeClick}
          priceValue={priceValue}
          setPriceValue={setPriceValue}
          filters={filters}
          minPrice={filters.minPrice}
          maxPrice={filters.maxPrice}
          handleSlider={handleSlider}
          handleApplyFilters={handleApplyFilters}
          handleStyleChange={handleStyleChange}
        />
      </section>

      <section>
        <div className={style.cards_container}>
          {loading ? (
            <div className={style.message}>
              <h2>Loading Products...</h2>
            </div>
          ) : products.dataFound ? (
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
            <div className={style.message}>
              <h2> Oops! No products found.</h2> <h3>Try modifying your search.</h3> 
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FilterPage;
