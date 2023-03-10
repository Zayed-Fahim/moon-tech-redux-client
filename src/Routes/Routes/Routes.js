import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import About from "../../Pages/About/About";
import Cart from "../../Pages/Cart/Cart";
import Home from "../../Pages/Home/Home";
import TopRated from "../../Pages/TopRated/TopRated";
import Wishlist from "../../Pages/Wishlist/Wishlist";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/top-rated",
        element: <TopRated />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default routes;
