import About from "./Components/pages/About"
import Catolog from "./Components/pages/Catolog"
import Contact from "./Components/pages/Contact"
import Delivery from "./Components/pages/Delivery";
import Main from "./Components/pages/Main";
import News from "./Components/pages/News";
import Product from "./Components/pages/Product";
import Cart from "./Components/pages/Cart";
import Checkout from "./Components/pages/Checkout";
import {CATALOG_ROUTE, DELIVERY_ROUTE, CONTACT_ROUTE, ABOUT_ROUTE, NEWS_ROUTE, HOME_ROUTE, 
        PRODUCT_ROUTE, CART_ROUTE, CHECKOUT_ROUTE, WISHLIST_ROUTE, LOGIN_ROUTE, ERROR_ROUTE, SINGLE_ROUTE, MYACOUNT_ROUTE,
         SUBCATEGORY_ROUTE,PRODUCTCATEGORY_ROUTE, ORDER_ROUTE, PURCHASES_ROUTE} from "./utils/Const";
import Wishlist from "./Components/pages/Wishlist";
import Login from "./Components/pages/Login";
import Error from "./Components/pages/Error";
import Single from "./Components/pages/Single";
import Myacount from "./Components/pages/Myacount";
import ProdCategory from "./Components/pages/ProdCategory";
import ProductCategory from "./Components/pages/ProductCategory";
import OrdersTable from "./Components/pages/OrdersTable";
import Purchases from "./Components/pages/Purchases";



export const orderRoutes = [
    
]
export const publicRoutes = [
    {
        path: CATALOG_ROUTE,
        Component: Catolog,
    },
    {
        path: DELIVERY_ROUTE,
        Component: Delivery,
    },
    {
        path: CONTACT_ROUTE,
        Component: Contact,
    },
    {
        path: ABOUT_ROUTE ,
        Component: About,
       
    },
    {
        path: NEWS_ROUTE ,
        Component: News,
    },
    {
        path: HOME_ROUTE ,
        Component: Main,
    },
    {
        path: PRODUCT_ROUTE ,
        Component: Product,
    },
    {
        path: CART_ROUTE ,
        Component: Cart,
    },
    {
        path: CHECKOUT_ROUTE ,
        Component: Checkout,
    },
    {
        path: WISHLIST_ROUTE ,
        Component: Wishlist,
    },
    {
        path: LOGIN_ROUTE ,
        Component: Login,
    },
    {
        path: ERROR_ROUTE ,
        Component: Error,
    },
    {
        path: SINGLE_ROUTE ,
        Component: Single,
    },
    {
        path: MYACOUNT_ROUTE ,
        Component: Myacount,
    },
    {
        path: SUBCATEGORY_ROUTE,
        Component: ProdCategory,
    },
    // {
    //     path: PRODUCTCATEGORY_ROUTE,
    //     Component: ProductCategory,
    // },
    {
        path: ORDER_ROUTE,
        Component: OrdersTable,
    },
    {
        path: PURCHASES_ROUTE,
        Component: Purchases,
    },
]