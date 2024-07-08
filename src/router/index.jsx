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

export const router = createBrowserRouter([
    {
        path:"/",
        element:<LayoutPublic/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
          
            },
            {
                path: "/detail",
                element: <DetailProductPage/>,
          
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
            },
            {
                path: "/brands",
                element: <BrandsPage/>,
            },
        ]
    }








 
]);
