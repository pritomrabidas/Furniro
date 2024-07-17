import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/pages/Home";
import Shop from "./Components/pages/Shop";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}></Route>
        <Route path="shop" element={<Shop/>}></Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />
}

export default App;
