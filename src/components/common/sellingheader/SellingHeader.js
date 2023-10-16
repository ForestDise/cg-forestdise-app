import React from 'react'
import { logo } from "../../../assets"
import { useNavigate } from 'react-router-dom';

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
        </div>
    )
}

export default SellingHeader
