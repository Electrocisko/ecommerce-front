import {createBrowserRouter} from "react-router-dom";
import CartPage from "../pages/CartPage";
import CategoryPage from "../pages/CategoryPage";
import ComingSoon from "../pages/ComingSoon";
import DetailProductPage from "../pages/DetailProductPage";
import OnSalePage from "../pages/OnSalePage";
import NewArrivalsPage from "../pages/NewArrivalsPage";
import BrandsPage from "../pages/BrandsPage";
import HomePage from "../pages/HomePage";
import NotFound from "../components/NotFound";
import LayoutPublic from "../layout/LayOut";
import WomenPage from "../pages/WomenPage";
import ManPage from "../pages/ManPage";
import ShopPage from "../pages/ShopPage";
import { loaderProducts, loaderHomePage, loaderProductDetail } from "../loaders/productsLoader.js";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<LayoutPublic/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
                loader: loaderHomePage
            },
            {
                path: "/detail/:id",
                element: <DetailProductPage/>,
                loader: loaderProductDetail
            },
            {
                path: "/cart",
                element: <CartPage/>,
            },
            {
                path: "/category",
                element: <CategoryPage/>,
            },
            {
                path: "/soon",
                element: <ComingSoon/>,
            },
            {
                path: "/onsale",
                element: <OnSalePage/>,
            },
            {
                path: "/new",
                element: <NewArrivalsPage/>,
                loader: loaderProducts
            
            },
            {
                path: "/brands",
                element: <BrandsPage/>,
            },
            {
                path: "/shop",
                element: <ShopPage/>,
            },
            {
                path: "/women",
                element: <WomenPage/>,
            },
            {
                path: "/men",
                element: <ManPage/>,
            },
        ]
    }








 
]);
