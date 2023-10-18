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
import HomeContent from "./components/main/store/HomeContent";
import Error from "./pages/Error";
import Registration from "./pages/Registration";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import ProductDetail from "./components/main/variant/ProductDetail";
import StoreHeader from "./components/main/store/StoreHeader";
import StoreFooter from "./components/main/store/StoreFooter";
import StoreBanner from "./components/main/store/StoreBanner";
import SellingHeader from "./components/common/sellingheader/SellingHeader";
import Selling from "./components/main/selling/Selling";

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

const StoreLayout = () => {
  return (
    <div>
      <StoreBanner />
      <StoreHeader />
      <ScrollRestoration />
      <Outlet />
      <StoreFooter />
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
          <Route path="/store" element={<StoreLayout />}>
            <Route index element={<HomeContent />} />
          </Route>
        </Route>
        <Route path="/selling" element={<SellingLayout />}>
          <Route index element={<Selling />} />
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
