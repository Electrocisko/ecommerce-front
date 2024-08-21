import {urlServer} from "../data/endpoints.js";

const URL = urlServer+"api/products";


 const loaderProducts = async () => {
    try {
        const response = await fetch(URL);
        const products = await response.json();
        return {products};
    } catch (error) {
      console.log(error);
    }
}

const loaderHomePage = async () => {
  try {
      let response = await fetch(URL+"/new");
      const newProducts = await response.json();
       response = await fetch(URL+"/top");
      const topProducts = await response.json();
      return {newProducts, topProducts};
  } catch (error) {
    console.log(error);
  }
}







export {

  loaderHomePage,
  loaderProducts


}