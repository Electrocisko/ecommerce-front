import { urlServer } from "../data/endpoints.js";

const URL = urlServer + "api/products";

const loaderProducts = async () => {
  const response = await fetch(URL);
  const products = await response.json();
  return { products };
};

const loaderHomePage = async () => {
  let response = await fetch(URL + "/new");
  const newProducts = await response.json();
  response = await fetch(URL + "/top");
  const topProducts = await response.json();
  return { newProducts, topProducts };
};

const loaderProductDetail = async ({ params }) => {
  let response = await fetch(URL + "/new");
  const newProducts = await response.json();
  const url = urlServer + "api/product/" + params.id;
  response = await fetch(url);
  const productDetail = await response.json();
  return { productDetail, newProducts };
};

export { loaderHomePage, loaderProducts, loaderProductDetail };