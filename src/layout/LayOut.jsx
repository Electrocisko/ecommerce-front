import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StayUpdated from "../components/smalls/StayUpdated";
import { useState } from "react";


const LayoutPublic = () => {


    const [itemsInCart, setItemsInCart] = useState(0);

    return (
        <>
          <Navbar itemsInCart={itemsInCart}/>
          <Outlet context={[itemsInCart, setItemsInCart]} />;
            <StayUpdated/>
            <Footer/>
        </>
    );
};
export default LayoutPublic;
