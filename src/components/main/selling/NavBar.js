import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
    return (
        <div className='grid grid-cols-8 h-10 bt-4'>
            <div className='col-span-1'></div>
            <div className='col-span-6'>
                <div className='grid grid-cols-8'>
                    <Link to="/selling/shop" className="text-black hover:text-blue-400 font-bold text-bodyFont">
                        <div className='col-span-1'>Store</div>
                    </Link>
                    <Link to="/selling/category" className="text-black hover:text-blue-400 font-bold text-bodyFont">
                        <div className='col-span-1'>Category</div>
                    </Link>
                    <Link to="/selling/product" className="text-black hover:text-blue-400 font-bold text-bodyFont">
                        <div className='col-span-1'>Product Vitals</div>
                    </Link>
                    <Link to="/selling/variant" className="text-black hover:text-blue-400 font-bold text-bodyFont">
                        <div className='col-span-1'>Variants</div>
                    </Link>
                    <Link to="/selling/attributes" className="text-black hover:text-blue-400 font-bold text-bodyFont">
                        <div className='col-span-1'>Offers</div>
                    </Link>
                    <Link to="/selling/images" className="text-black hover:text-blue-400 font-bold text-bodyFont">
                        <div className='col-span-1'>Images</div>
                    </Link>
                    <Link to="/dashboard" className="text-black hover:text-blue-400 font-bold text-bodyFont">
                        <div className='col-span-1'>Video</div>
                    </Link>
                    <Link to="/dashboard" className="text-black hover:text-blue-400 font-bold text-bodyFont">
                        <div className='col-span-1'>More Details</div>
                    </Link>
                    

                </div>
            </div>
            <div className='col-span-1'></div>


        </div>
    )
}

export default NavBar
