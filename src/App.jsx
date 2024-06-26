import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/pages/Home";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}></Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />
}

export default App;
