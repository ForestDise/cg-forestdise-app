import React from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ProductDetail from "../components/variant/ProductDetail";

function Variant() {
  return (
    <div>
      <div className="font-bodyFont bg-gray-100">
        <Header />
        <div className="w-ful py-10">
          <ProductDetail />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Variant
