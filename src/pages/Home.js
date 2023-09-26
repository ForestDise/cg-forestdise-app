import React from "react";
import Banner from "../components/home/Banner";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Products from "../components/home/Products";

function Home() {
  return (
    <div className="font-bodyFont bg-gray-100">
      <Header />
      <Banner />
      <div className="w-full -mt-10 xl:-mt-36 py-10">
        <Products />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
