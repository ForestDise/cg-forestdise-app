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
import Cart from "./components/main/cart/Cart";
import Signin from "./pages/Signin";
import Error from "./pages/Error";
import Registration from "./pages/Registration";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import ProductDetail from "./components/main/variant/ProductDetail";
import SellingHeader from "./components/common/sellingheader/SellingHeader";
import Selling from "./components/main/selling/Selling";
import Market from "./components/main/selling/Market";
import ListingProduct from "./components/main/selling/ListingProduct";
import Inventory from "./components/main/selling/Inventory";
import Orders from "./components/main/selling/Orders";
import Info from "./components/main/selling/Info";

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
const SellingLayout = () => {
  return (
    <div>
      <SellingHeader />
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
        <Route path="/error" element={<Error />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>
        <Route path="/selling" element={<SellingLayout />}>
          <Route index element={<Selling />} />
          <Route path="/selling/market" element={<Market />} />
          <Route path="/selling/listing" element={<ListingProduct />} />
          <Route path="/selling/inventory" element={<Inventory />} />
          <Route path="/selling/order" element={<Orders />} />
          <Route path="/selling/info" element={<Info />} />
          <Route path="/selling/sellerInfo" element={<Info />} />
          <Route path="/selling/inventory/vitals" element={<Inventory />} />


        </Route>
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
