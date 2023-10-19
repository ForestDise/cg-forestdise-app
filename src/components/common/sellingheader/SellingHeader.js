import React from 'react'
import { logo } from "../../../assets"
import { Link, useNavigate } from 'react-router-dom';

function SellingHeader() {
    const navigate = useNavigate();

    return (
        <div className="w-full sticky top-0 z-50">
            <div className="w-full bg-white border-b-2 text-amazon_blue px-4 py-1 flex justify-between items-center gap-4">
                {/* Logo start */}
                <div onClick={() => navigate("/selling")} className="">
                    <img className="w-[7rem] mt-0" src={logo} alt="logo1"></img>
                </div>
                {/* Logo end */}
                {/* Signup start */}
                <div onClick={() => navigate("/signup")} className="mt-0 mr-8">
                    <button className="pt-2 pb-2 pl-4 pr-4 bg-amber-400 font-bodyFont font-bold hover hover:border-1 rounded-full">Sign up</button>
                </div>
                {/* Signup end */}
            </div>
            <div className="w-full mt-30 xl:-mt-12 py-10">
                {/* header bar */}
                <div className="m-auto h-auto grid grid-cols-12 bg-slate-400 font-bold text-center justify-around">
                    <Link to="/selling/market"><div className="w-full h-full col-span-2 py-10 ">
                        SHOP
                    </div></Link>
                    <Link to="/selling/listing"><div className="w-full h-full col-span-2 py-10 ">
                        LISTING
                    </div></Link>
                    <Link to="/selling/inventory"><div className="w-full h-full col-span-2 py-10 ">
                        INVENTORY
                    </div></Link>
                    <Link to="/selling/order"><div className="w-full h-full col-span-2 py-10 ">
                        ORDERS
                    </div></Link>
                    <Link to="/selling/info"><div className="w-full h-full col-span-2 py-10 ">
                        INFO
                    </div></Link>
                    <Link to="/selling/sellerInfo"><div className='col-span-3 flex flex-row items-center pl-20 pt-10'>
                        <img className='h-8 w-8 rounded-full mr-1' src='https://m.media-amazon.com/images/G/01/sell/images/homepage-hero-image-03-sm.png' />
                        <span className=''>gaugaucute</span>
                    </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default SellingHeader
