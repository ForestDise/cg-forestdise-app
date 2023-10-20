import React, { useState } from 'react'
import StoreInstruction from '../../../assets/StoreInstruction.png'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

function ListingProduct() {
    const [searchQuery, setSearchQuery] = useState("");
    const [listResult, setListResult] = useState([]);
    const dispatch = useDispatch();
    const [categorySelected, setCategorySelected] = useState('');
    const handleChangeInput = (e) => {
        setSearchQuery(e.target.value)
    }
    const handleSearch = () => {
        if (searchQuery.length == 0) {
            Swal.fire({
                title: 'Bạn chưa nhập từ khoá để tìm kiếm',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        }
        // call api search 
    }

    return (
        <div className="font-bodyFont bg-gray-200">
            <div>
                <h1 className='text-titleFont text-6xl text-center pb-8'>Learn About Product Page, Variants and Another Important Listing Concepts</h1>
                <img src={StoreInstruction}></img>
            </div>
            <div className='flex flex-col pl-20 pr-20 font-titleFont py-4'>
                <h2 className='text-5xl font-sans'>Add a product</h2>
                <span className='text-yellow-700 font-titleFont mb-6'>Selling applicance status</span>
                <div className='w-full h-full grid grid-cols-3 font-titleFont'>
                    <div className='col-span-2 flex flex-col border border-5 border-gray-300 rounded-sm text-xl p-6 py-4'>
                        <h2 className='font-bold'>List a New Product</h2>
                        <span className='text-sm'>Search ForestDise Catalog First</span>
                        <div className='flex flex-row'>
                            <input className='w-full h-12 bg-slate-600 text-white border border-4 rounded-xl hover:border-white text-bodyFont'
                                type="text"
                                placeholder="Search category..."
                                value={searchQuery}
                                onChange={handleChangeInput}></input>
                            <button className='text-sm bg-orange-400 text-center rounded-xl ml-4 w-24' onClick={handleSearch}>Search</button>
                        </div>
                        {/* //results */}
                        <div>
                            <div>breadcum  breadcumbreadum </div>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-col m-auto p-auto text-titleFont py-4'>
                        <span className="font-bold text-2xl underline">Inventory</span>
                        <button className='bg-teal-600 h-5 rounded-sm w-40 mb-3 text-white'>Active Listing (9)</button>
                        <button className='bg-teal-600 h-5  rounded-sm w-40 text-white'>Inactive Listing (10)</button>

                    </div>

                </div>
                <form>
                    
                </form>

            </div>
        </div>
    )
}

export default ListingProduct;
