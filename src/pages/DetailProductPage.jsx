
import { useLoaderData } from "react-router-dom";

const DetailProductPage = () => {



  const { productDetail} = useLoaderData();

console.log(productDetail.data);

  return (
    <h1 style={{ textAlign: 'center'}}>DetailProductPage</h1>
  )
}

export default DetailProductPage