import style from '../scss/pages/detailproductpage.module.scss';
import { useLoaderData } from "react-router-dom";
import {urlServer} from "../data/endpoints.js";
import { ScrollRestoration } from "react-router-dom";

const DetailProductPage = () => {

const { productDetail} = useLoaderData();

const product = productDetail.data;

const productPrice = Math.trunc(product.price)
const ofertPrice = Math.trunc(product.price  - (product.price * (product.discount/100)))

  return (
    <>
    <div className={style.image_container}>
    <img className={style.image} src={urlServer+"images/"+product.imageurl} alt={"Imagen de "+product.name} />
    <h1 className={style.title}>{product.name}</h1>
    
    {product.discount === 0 ?
      <h2 className={style.price}>$ {productPrice}</h2> :
      <h2><span className={style.price} >${ofertPrice}</span>
          <span className={style.original_price}> ${productPrice}</span>
          <span className={style.discount}>-{product.discount}%</span>
          
            </h2>}
    </div>


   

    <ScrollRestoration />
    </>
   
  )
}

export default DetailProductPage