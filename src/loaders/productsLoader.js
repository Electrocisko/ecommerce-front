import {urlServer} from "../data/endpoints.js";

const URL = urlServer+"api/products";


export const loaderProducts = async () => {
    try {
        const response = await fetch(URL);
        const products = await response.json();
        return {products};
    } catch (error) {
      console.log(error);
    }



}

