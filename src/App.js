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
import SellingHeader from "./components/common/sellingheader/SellingHeader";
import Selling from "./components/main/selling/Selling";
import ShopCreat from "./components/main/selling/main/ShopCreate";
import Category from "./components/main/selling/main/Category";
import Inventory from "./components/main/selling/Inventory";
import Orders from "./components/main/selling/Orders";
import Info from "./components/main/selling/Info";
import Payment from "./pages/Payment";
import StoreHeader from "./components/main/store/StoreHeader";
import StoreFooter from "./components/main/store/StoreFooter";
import StoreBanner from "./components/main/store/StoreBanner";
import Variants from "./components/main/selling/main/Variants";
import Product from "./components/main/selling/main/Product";
import Offers from "./components/main/selling/main/Offers";
import Dashboard from "./components/main/dashboard/Dashboard";
import SideBar from "./components/main/dashboard/SideBar";
import DashBoardHeader from "./components/main/dashboard/DashBoardHeader";
import Categories from "./components/main/dashboard/element/Categories";
import HomeDasboard from "./components/main/dashboard/element/HomeDasboard";
import OrdersDashboard from "./components/main/dashboard/element/OrdersDashboard";
import Products from "./components/main/dashboard/element/Products";
import Profile from "./components/main/dashboard/element/Profile";
import Images from "./components/main/selling/main/Images";
import HomeSelling from "./components/main/selling/main/HomeSelling";




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
      <Selling>
        <Outlet />
      </Selling>
      <Footer />
    </div>
  );
};
const DashboardLayout = () => {
  return (
    <div>
      <DashBoardHeader />
      <ScrollRestoration />
      <Dashboard>
        <Outlet/>
      </Dashboard>
    </div>
  );
};

const StoreLayout = () => {
  return (
    <div>
      <StoreBanner />
      <StoreHeader />
      <Outlet />
      <StoreFooter />
    </div>
  );
};

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Fragment>
        <Route path="/payment" element={<Payment />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/error" element={<Error />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/store/:id" element={<StoreLayout />}>
            <Route index element={<HomeContent />} />
          </Route>
        </Route>
        <Route path="/selling" element={<SellingLayout />}>
          <Route index element={<HomeSelling />} />
          <Route path="/selling/shop" element={<ShopCreat />} />
          <Route path="/selling/category" element={<Category />} />
          <Route path="/selling/product" element={<Product/>} />
          <Route path="/selling/attributes" element={<Offers />} />
          <Route path="/selling/variant" element={<Variants />} />
          <Route path="/selling/images" element={<Images />} />

        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<HomeDasboard />} />
            <Route path="/dashboard/categories" element={<Categories />} />
            <Route path="/dashboard/products" element={<Products />} />
            <Route path="/dashboard/orders" element={<OrdersDashboard />} />
            <Route path="/dashboard/profile" element={<Profile />} />

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
