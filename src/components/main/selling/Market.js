import React from 'react'
import { useForm } from 'react-hook-form'
import HomeIcon from '@mui/icons-material/Home';

function Market() {
    const { register, handleSubmit } = useForm();
    const handleRegistration = (data) => { console.log(data) };
  return (
      <div className="mx-auto h-auto grid grid-cols-2 bg-slate-400 ">
          <div className="w-full h-full px-4 col-span-1 py-10 flex flex-col pl-12 ">
              <span className='pl-20 text-6xl font-sans font-bold py-5'>
                  To Begin Registering Your Shop
              </span>
              <span className='font-titleFont text-xl pl-20'>"Unlock the Potential of Your Business: Seamlessly Register Your Shop and Join Our Growing Marketplace"</span>
              <div className='ml-20 mt-4 pt-4 pb-4  bg-white font-bodyFont font-bold hover hover:border-1 rounded-sm'>
                  <h1 className='text-center text-4xl mt-8'><HomeIcon className='text-yellow-300' sx={{ fontSize: 70 }} /> REGISTER SHOP</h1>
                  <span className='pl-20 mt-4 font-titleFont text-xs text-right'>
                      $39.99 a month + selling fees</span>
                  <form className='p-8' onSubmit={handleSubmit(handleRegistration)} >
                      <div className='w-full text-xl font-titleFont flex flex-col h-full py-10 '>
                          <label>Enter Shop Name</label>
                          <input className='border border-2' name="name" type="text" {...register('name', { required: true })} />
                      </div>
                      <button className='bg-gray-300 h-full text-4xl rounded-sm '>Create Now !</button>
                  </form>
              </div>

          </div>
          <div className='col-span-1 pt-10'>
              <img src='https://m.media-amazon.com/images/G/01/sell/images/homepage-hero-image-03-sm.png' />
          </div>
      </div>
  )
}

export default Market
