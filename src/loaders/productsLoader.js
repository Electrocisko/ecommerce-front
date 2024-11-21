import { urlServer } from "../data/endpoints.js";

const URL = urlServer + "api/products";

const loaderProducts = async () => {
  const response = await fetch(URL);
  const products = await response.json();
  return { products };
};

const loaderCasualProducts = async () => {
  const response = await fetch(`${URL}/filter/?key=style&value=casual`);
  const products = await response.json();
  const response1 = await fetch(urlServer + "api/colors");
  const response2 = await fetch(urlServer + "api/sizes");
  const colors = await response1.json();
  const sizes = await response2.json();
  return { products, colors, sizes };
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

const loaderStockData = async () => {
  const response1 = await fetch(urlServer + "api/colors");
  const response2 = await fetch(urlServer + "api/sizes");
  const colors = await response1.json();
  const sizes = await response2.json();
  return { colors,sizes };
};

const loaderOnSaleProducts = async () => {
  const pathToFetch = URL + "/onsale";
  const response = await fetch(pathToFetch);
   const products = await response.json();
  return { products };
}

export { loaderHomePage, loaderProducts, loaderProductDetail, loaderStockData, loaderOnSaleProducts, loaderCasualProducts };
