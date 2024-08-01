import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/pages/Home";
import Shop from "./Components/pages/Shop";
import Errorpage from "./Components/Errorpage";
import Cart from "./Components/pages/Cart";
import ProductDetails from "./Components/pages/ProductDetails";
import Chackout from "./Components/pages/Chackout";
import Contact from "./Components/pages/Contact";
import Blog from "./Components/pages/Blog";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}></Route>
        <Route path="shop" element={<Shop/>}></Route>
        <Route path="cart" element={<Cart/>}></Route>
        <Route path="checkout" element={<Chackout/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path="blog" element={<Blog/>}></Route>
        <Route path="shop/details" element={<ProductDetails/>}></Route>
        <Route path="*" element={<Errorpage/>}></Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />
}

export default App;
