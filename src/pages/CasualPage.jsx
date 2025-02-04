/* eslint-disable no-fallthrough */
import Filters from "../components/Filters";
import style from "../scss/pages/stylespages.module.scss";
import { urlServer } from "../data/endpoints.js";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useState } from "react";

const CasualPage = () => {
  const { products, colors, sizes } = useLoaderData();

  const filtersInit = {
    minPrice: 0,
    maxPrice: 500,
    range: [0, 500],
    colors: [],
    sizes: [],
    styles: [],
  };

  const [filters, setFilters] = useState(filtersInit);

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
    let urlParams = urlServer+"api/products/querys/?";
    if (filters.colors.length > 0) {
     const colors =  filters.colors.map((color) => color.color_id )
     const queryColors = "colors="+colors
     urlParams=urlParams+queryColors;
    }
    filteredProducts(urlParams);

    //SEGUIR TRABAJANDO ACA PARA QUE HAGA FETCH AL ENDPOINT
  };

  const sizeList = sizes.sizesList;

  const data = products.data;

  const [priceValue, setPriceValue] = useState(100);

  const filteredProducts = async (urlParams) => {
    try {
      console.log(urlParams);
      const resp = await fetch(urlParams);
      const data = await resp.json();
      console.log(data);
 
    } catch (error) {
      console.log("Error");
    }
 
  }

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
          filters={filters}
          minPrice={filters.minPrice}
          maxPrice={filters.maxPrice}
          handleSlider={handleSlider}
          handleApplyFilters={handleApplyFilters}
          handleStyleChange={handleStyleChange}
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
