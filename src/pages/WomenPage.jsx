//import style from "../scss/pages/womenpage.module.scss"
//import ByProductNav from "../components/smalls/ByProductNav";
import { useState, useEffect } from "react";
import { urlServer } from "../data/endpoints";
import style from "../scss/pages/filterpages.module.scss";
import { useLocation, Link, ScrollRestoration } from "react-router-dom";
import Card from "../components/Card";
import Filters from "../components/Filters";
import { IoIosOptions } from "react-icons/io";
import PageButtons from "../components/PageButtons";

const WomenPage = () => {
  const location = useLocation();
  const styleFromState = location.state?.styleState || null;
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(false);

  // limit of pagination
  const quantityToShow = 8;
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [products, setProducts] = useState({
    data: [],
    productsRange: [0, quantityToShow],
  });


  const fetchFilteredProducts = async (filters) => {
    try {
      setLoading(true);
      let urlParams = `${urlServer}api/products/querys/?genders=Women&limit=${quantityToShow}&page=1`;

      if (filters.colors.length > 0) {
        const colors = filters.colors.map((c) => c.color_id).join(",");
        urlParams += `&colors=${colors}`;
      }

      if (filters.sizes.length > 0) {
        const sizes = filters.sizes.map((s) => s.size_id).join(",");
        urlParams += `&sizes=${sizes}`;
      }

      if (filters.styles.length > 0) {
        const styles = filters.styles.join(",");
        urlParams += `&styles=${styles}`;
      }

      const [min, max] = filters.range;
      urlParams += `&price_min=${min}&price_max=${max}`;

      const resp = await fetch(urlParams);
      const data = await resp.json();

      setProducts(data);
      setTotalPages(data.totalPages);
      setPage(1);
    } catch (error) {
      console.error("Error fetching filtered products", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchInitialProducts = async () => {
    try {
      const url = `${urlServer}api/products/querys/?genders=Women&limit=${quantityToShow}&page=${page}${
        styleFromState ? `&styles=${styleFromState}` : ""
      }`;

      const resp = await fetch(url);
      const data = await resp.json();
      setProducts(data);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error("Error fetching initial products", err);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchInitialProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [styleFromState, page]);


  const handleFilterIcon = () => {
    setPage(1);
    setShowFilters(!showFilters);
  };

  // Tengo que mandar el page y el limit.
  const handleNextPage = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };


  return (
    <div className={style.maindiv}>
      <h1>Women</h1>
      <div className={style.show_icon_info}>
        <button
          onClick={handleFilterIcon}
          className={showFilters ? `${style.hide}` : `${style.filterButton}`}
        >
          <IoIosOptions className={style.icon} />
        </button>
      </div>

      <div className={style.container}>
        <section
          className={showFilters ? `${style.filter_section}` : `${style.hide}`}
        >
      <Filters
            onApply={fetchFilteredProducts}
            styleFromState={styleFromState}
            handleFilterIcon={handleFilterIcon}
          />
        </section>

        <section className={style.cards_section}>
          <div className={style.title}>
            <h2>{styleFromState} Style</h2>
            <p className={style.pagination}>
              {products?.productsRange[0]} - {products?.productsRange[1]}{" "}
              Showing of {products.totalProducts} Products{" "}
            </p>
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

      <PageButtons
        page={page}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </div>
  );
}

export default WomenPage