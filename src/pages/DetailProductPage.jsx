import style from '../scss/pages/detailproductpage.module.scss';
import { useLoaderData } from "react-router-dom";
import {urlServer} from "../data/endpoints.js";


const DetailProductPage = () => {

const { productDetail} = useLoaderData();

const product = productDetail.data;



  return (
    <>
    <div className={style.image_container}>
    <img className={style.image} src={urlServer+"images/"+product.imageurl} alt={"Imagen de "+product.name} />
    <h1 className={style.title}>{product.name}</h1>
    <h2>$ {product.price}</h2>
    </div>
    
   


    </>
   
  )
}

export default DetailProductPage