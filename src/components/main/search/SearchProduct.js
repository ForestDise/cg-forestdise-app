import React, {useEffect, useState} from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {useLocation} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    selectProducts,
    selectSuccess,
    selectError,
    selectLoading,
    getProducts
} from "../../../features/search/searchProductSlice";
import async from "async";
import axios from "axios";
function SearchProduct() {
    const dispatch = useDispatch();
    const location = useLocation();
    const searchText = new URLSearchParams(location.search).get('searchText');
    // const statusLoading = useSelector(selectLoading);
    // const statusSuccess = useSelector(selectSuccess);
    const statusError = useSelector(selectError);
    const products = useSelector(selectProducts);


    const [searchType, setSearchType] = useState('Featured');
    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value);
    };
    const getProductList = async () => {
        dispatch(getProducts({ text: searchText, searchType: searchType }))
    }
    useEffect(() => {
        getProductList();
        console.log("Calling getProducts");
    }, [searchText, dispatch]); // gọi khi dispatch đổi (searchType đổi)
    console.log("search" ,products)



    return (

        <div className="">
            <div className="max-w-screen-2xl mx-auto p-0 text-sm py-6 flex flex-row justify-between  pl-2 pr-12 ">
                <div>1-24 of {products.productDtos ? products.productDtos.length : 0} results for "{searchText}"</div>
                <div className="p-0.5 text-xs border border-amazon_blue rounded-3xl w-auto">
                    Sort by:
                    <select className="bg-gray-100" onChange={handleSearchTypeChange} value={searchType}>
                        <option value="Featured">Featured</option>
                        <option value="PriceLowToHigh">Price: Low to High</option>
                        <option value="PriceHighToLow">Price: High to Low</option>
                        <option value="AvgCustomerReview">Avg. Customer Review</option>
                        <option value="BestSeller">Best Seller</option>
                    </select>
                </div>
            </div>
            <hr></hr>
            <div className="max-w-screen-2xl mx-auto p-0 text-sm ">
                <div className="container mx-auto h-auto grid grid-cols-12 gap-2">
                    <div className="w-full h-full text-bodyFont text-xs col-span-3 flex flex-col py-2 border-gray-300 border-1 rounded-sm">
                        <div>
                            <div className="flex flex-col">
                                <span>Department</span>
                                <div className="flex flex-col">
                                    <span><KeyboardArrowLeftIcon/>Any Department</span>
                                    <ul className="pl-8">
                                        <li>Home Garden</li>
                                        <li>Home Garden & Store</li>
                                    </ul>
                                    <span><KeyboardArrowLeftIcon/>Home Department</span>
                                    <span><KeyboardArrowLeftIcon/>Cook Department</span>
                                    <span><KeyboardArrowLeftIcon/>Dining Department</span>
                                    <ul className="pl-8 font-bold">
                                        <li>Current Category</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full bg-white text-titleFont col-span-9 flex flex-col py-2 border-gray-300 border-1 rounded-sm">
                        <h1 className="font-bold">Results</h1>
                        <span className="text-xs">Price and other details may vary based on product size and colour.</span>
                        {/*<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-6 xl:gap-10 mt-4">*/}
                        {/*    <div className="flex flex-col h-auto border border-amazon_yellow">*/}
                        {/*        <img className="w-full h-40 object-contain" src="https://m.media-amazon.com/images/I/81b7Hk-SNSL._AC_UL320_.jpg" alt="phai khung"/>*/}
                        {/*        <span>Taylor & Brown Blow Torch Butane Gas Kit Auto Ignition Flamethrower Kitchen Cooking Catering Creme Brulee Culinary</span>*/}
                        {/*        <span>$130.999</span>*/}
                        {/*    </div>*/}
                        {/*    */}
                        {/*</div>*/}
                        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-6 xl:gap-10 mt-4">

                            {products.productDtos ? (
                                products.productDtos.map((product) => (
                                    <div key={product.id} className="flex flex-col h-auto border border-amazon_yellow">
                                        <img className="w-full h-40 object-contain" src={product.image} alt={product.name} />
                                        <h1 className="flex-auto text-lg font-semibold text-slate-900">
                                            {product.title}
                                        </h1>
                                        <div className="text-lg font-semibold text-slate-500">
                                            {/*${products.variantDtos[0]}*/}
                                        </div>
                                        <p>{product.description}</p>
                                    </div>
                                ))
                            ) : (
                               <div></div>
                            )}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default SearchProduct;