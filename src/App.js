import React, { Fragment } from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/cart/Cart";
import Signin from "./pages/Signin";
import Registration from "./pages/Registration";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Variant from "./pages/Variant";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Fragment>
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/product/:id" element={<Variant />} />
      </Fragment>
    )
  );
  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
