import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";


const PrivateLayout = () => {


    const [itemsInCart, setItemsInCart] = useState(0);

    return (
        <>
          <Navbar itemsInCart={itemsInCart}/>
          <Outlet context={[itemsInCart, setItemsInCart]} />
        </>
    );
};
export default PrivateLayout;