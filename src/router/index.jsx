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
import { loaderProducts, loaderHomePage, loaderProductDetail, loaderStockData, loaderOnSaleProducts } from "../loaders/productsLoader.js";
import AdminPage from "../pages/AdminPage.jsx";
import PrivateLayout from "../layout/PrivateLayout.jsx";
import FullProduct from "../pages/FullProduct.jsx";
import DeleteProductPage from "../pages/DeleteProductPage.jsx";

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
                loader: loaderOnSaleProducts
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
    },
    {
        path: "/admin",
        element: <PrivateLayout/>,
        children: [
            {
                index: true,
                element: <AdminPage/>
            },
            {
                path: "/admin/full",
                element: <FullProduct/>,
                loader: loaderStockData
            },
            {
                path: "/admin/delete",
                element: <DeleteProductPage/>,
                loader: loaderStockData
            },
        ]   
    }


]);
