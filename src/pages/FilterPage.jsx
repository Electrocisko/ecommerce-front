/* eslint-disable react/prop-types */
import { useState, useEffect, useMemo } from "react";
import { urlServer } from "../data/endpoints";
import style from "../scss/pages/filterpages.module.scss";
import { useLocation, Link, ScrollRestoration } from "react-router-dom";
import Card from "../components/Card";
import Filters from "../components/Filters";
import { IoIosOptions } from "react-icons/io";
import PageButtons from "../components/PageButtons";


const FilterPage = () => {
  const location = useLocation();
  const styleFromState = location.state?.styleState || null;
  const [showFilters, setShowFilters] = useState(false);

  const filtersInit = useMemo(() => ({
    minPrice: 0,
    maxPrice: 500,
    range: [0, 500],
    colors: [],
    sizes: [],
    styles: styleFromState ? [styleFromState] : [],
  }), [styleFromState]);

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
    // limit of pagination
    const quantityToShow = 8;
    const [pagination, setPagination] = useState({limit: quantityToShow, page: 1});
    const [totalPages, setTotalPages] = useState(1);

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
    // pagination
    const {limit} = pagination;
    urlParams+="limit=" + limit + "&";
    
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

    console.log(urlParams);

    filteredProducts(urlParams);
  };

  const handleFilterIcon = () => {
    setShowFilters(!showFilters);
  };

  // Tengo que mandar el page y el limit.
  const handleNextPage = () => {
    if (pagination.page < totalPages)
    setPagination((prev) => ({
      ...prev,
      page: prev.page + 1
    }));
  };

  const handlePreviousPage = () => {
    setPagination((prev) => ({
      ...prev,
      page: prev.page > 1 ? prev.page - 1 : 1
    }));
  };
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const URL = urlServer + "api/products";
     try {
      const fetchData = async () => {
        let response;
        if (styleFromState) {
          response = await fetch(`${URL}/querys/?styles=${styleFromState}&limit=${pagination.limit}&page=${pagination.page}`);
        } else {
          response = await fetch(`${URL}/querys/?limit=${pagination.limit}&page=${pagination.page}`);
        }
        const products = await response.json();
        const response1 = await fetch(urlServer + "api/colors");
        const response2 = await fetch(urlServer + "api/sizes");
        const colors = await response1.json();
        const sizes = await response2.json();
        setProducts(products);
        setColors(colors);
        setSizes(sizes);
        setTotalPages(products.totalPages)
        setFilters(filtersInit);


        console.log(products);
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [styleFromState, pagination, filtersInit]);



  return (
    <div className={style.maindiv}>

      <div className={style.show_icon_info}>
      <button onClick={handleFilterIcon} className={ showFilters?  `${style.hide}` : `${style.filterButton}` }>
        < IoIosOptions className={style.icon} />
      </button>
      {/* <p className={style.pagination}>Showing {products.totalProductShowing} of {products.totalProducts} Products </p> */}
      </div>
 
      <div className={style.container}>
    
        <section className={ showFilters?  `${style.filter_section}` : `${style.hide}` }>
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
            handleFilterIcon={handleFilterIcon}
            styleFromState={styleFromState}
          />
        </section>

        <section className={style.cards_section}>
          <div className={style.title}>
          <h2>{styleFromState} Style</h2>
          <p className={style.pagination}>Showing {products.totalProductShowing} of {products.totalProducts} Products </p>
          </div>
      
          <div className={style.cards_container}>
            {loading ? (
              <div className={style.message}>
                <h2>Loading Products...</h2>
              </div>
            ) : products.dataFound ? (
              products.data.map((item) => (
                <Link to={`/detail/${item.product_id}`} key={item.product_id}>
                  <Card
                    urlImage={`${urlServer}images/${item.imageurl}`}
                    discount={item.discount}
                    product={item}
                  />
                </Link>
              ))
            ) : (
              <div className={style.message}>
                <h2> Oops! No products found.</h2>{" "}
                <h3>Try modifying your search.</h3>
              </div>
            )}
          </div>
        </section>
        <ScrollRestoration />
      </div>

      <PageButtons page={pagination.page} handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage}/>
    </div>
  );
};

export default FilterPage;
