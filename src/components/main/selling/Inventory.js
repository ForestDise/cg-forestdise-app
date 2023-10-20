import React, { useState } from 'react'
import BannerInventory from '../../../assets/bannerInventory01.png'
import Vitals from './inventory-child/Vitals';
import Variants from './inventory-child/Variants';
import Offers from './inventory-child/Offers';
import Images from './inventory-child/Images';


function Inventory() {
    const [showComponentVitals, setShowComponentVitals] = useState(false);
    const [showComponentVariants, setShowComponentVariants] = useState(false);
    const [showComponentOffers, setShowComponentOffers] = useState(false);
    const [showComponentImages, setShowComponentImages] = useState(false);
    const handleShowComponent1 =() => {
        setShowComponentVitals(true);
        setShowComponentVariants(false);
        setShowComponentOffers(false);
        setShowComponentImages(false);

    }
    const handleShowComponent2 = () => {
        setShowComponentVitals(false);
        setShowComponentVariants(true);
        setShowComponentOffers(false);
        setShowComponentImages(false);

    }
    const handleShowComponent3 = () => {
        setShowComponentVitals(false);
        setShowComponentVariants(false);
        setShowComponentOffers(true);
        setShowComponentImages(false);

    }
    const handleShowComponent4 = () => {
        setShowComponentVitals(false);
        setShowComponentVariants(false);
        setShowComponentOffers(false);
        setShowComponentImages(true);

    }


    return (
        <div className='w-full grid grid-cols-10'>
            <div className='col-span-2 flex flex-col text-3xl font-bold mt-30'>
                <button className='bg-gray-700 ' onClick={handleShowComponent1}>Vitals Info</button>
                <button className='bg-white text-black' onClick={handleShowComponent2}>Variations</button>
                <button className='bg-gray-700' onClick={handleShowComponent3}>Offers</button>
                <button className='bg-white text-black' onClick={handleShowComponent4}>Images</button>


            </div>
            {!showComponentVitals && !showComponentVariants && !showComponentOffers && !showComponentImages && <div className='col-span-8 p-0'>
                <h1 className='text-6xl text-center'>Add More Detail To Get The 1st Ranking Store Of Year </h1>
                <img className='w-25 h-25' src={BannerInventory}></img>

            </div>}

            {showComponentVitals  && <Vitals/>}
            {showComponentVariants && <Variants/>}
            {showComponentOffers && <Offers/>}
            {showComponentImages && <Images/>}


        </div>
    )
}

export default Inventory
