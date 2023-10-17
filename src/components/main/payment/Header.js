import React from "react";
import {logoBlack} from "../../../assets";
import LockIcon from '@mui/icons-material/Lock';
import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="w-full bg-gray-100 text-black flex items-center gap-4 bg-gray-200">
                <div className="container mx-auto h-auto grid grid-cols-9 gap-2 ml-24 mr-24">
                    <div onClick={() => navigate("/cart")} className="headerHover col-span-3">
                        <img className="w-[7rem] mt-0" alt="logoBlack" src={logoBlack}/>
                    </div>
                    <div className="text-center text-xl col-span-3 font-titleFont py-3">
                        Checkout
                    </div>
                    <div className="headerHover col-span-3 justify-center py-3">
                        <LockIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;