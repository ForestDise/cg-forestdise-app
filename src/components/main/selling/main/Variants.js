import React, { useState } from 'react'
import { BsDashCircleDotted } from "react-icons/bs";
import Swal from 'sweetalert2';
import { FaBeer } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { createOptionList } from '../../../../features/variant/optionSlide';
import { createOptionValueList } from '../../../../features/variant/optionValueSlide'


function Variants() {
  const product = useSelector((state) => state.product.product);
  const optionListCreated = useSelector((state) => state.option.options);
  const optionValueListCreated = useSelector((state) => state.optionValue.optionValues);


  const dispatch = useDispatch();
  const [option, setOption] = useState("");
  const [value, setValue] = useState("");
  const [variantValueList, setVariantValueList] = useState([]);
  const [optionList, setOptionList] = useState([]);
  const [optionValueList, setOptionValueList] = useState([[],[],[]]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSetOption = (e) => {
    setOption(e.target.value);
    console.log(option);

  }
  const addOption = () => {
    if (option.trim() !== "") {
      if (optionList.includes(option)) {
        setErrorMessage("This option is already existed");
        Swal.fire({
          title: 'This option is already existed',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }
       else {
        setOptionList([...optionList, option]);
        setOption("");
        setErrorMessage("");
      }
    }
  }
  const deleteOption = (index) => {
    const updateOptionList = [...optionList];
    updateOptionList.splice(index, 1);
    setOptionList(updateOptionList);
  }
  console.log(optionList);


  const handleSetValue = (e) => {
    setValue(e.target.value);
    console.log(value);
  }
  const addValue = (i) => { // tham số là index
    if (value !== "") { // value bây giờ là theo  [[x,c,v], [1,2,3]]. e.target.value để so khớp
      if (optionValueList[i].includes(value)) {
        setErrorMessage("This option is already existed");
      }
      else {
        setOptionValueList((prevOptionValueList) => {
          const newOptionValueList = [...prevOptionValueList];
          if (i >= 0 && i < newOptionValueList.length) {
            newOptionValueList[i] = [...newOptionValueList[i], value];
          }
          return newOptionValueList;
        });
        setValue("");
        setErrorMessage("");
      }
    }
  }
  // const deleteValue = (index) => {
  //   const updateOptionValueList = [...optionValueList[index]];
  //   updateOptionValueList.splice(index, 1);
  //   setOptionValueList(updateOptionValueList);
  // }
  const deleteValue = (index) => {
    setOptionValueList((optionValueList) => {
      const newOptionValueList = [...optionValueList];
      if (index >= 0 && index < newOptionValueList.length) {
        newOptionValueList[index].splice(index, 1);
      }
      return newOptionValueList;
    });
  }
  console.log(optionValueList);


  return (
    <div className='col-span-8 p-0 text-titleFont ml-10'>
      <h1 className='text-3xl text-center'> SET VARIANT FOR PRODUCT : {product.id} - {product.name}</h1>
      {/* select option */}
       <div className='border-2 rounded-xl border-stone-500 mb-8 flex flex-col p-10'>
        <div className='flex text-base items-baseline'>
          <label> Enter option:</label>
          <input onChange={handleSetOption}
            type="text"
            placeholder='Enter the option'
            value={option}
            className='ml-2 pl-2 rounded-xl bg-gray-800 text-yellow-50 hover:bg-slate-800 border-2 mr-8'
          ></input>
          <button className="rounded-full bg-gray-500 border-gray-300 h-8 w-8 mr-6 " onClick={addOption}>+</button>
          {errorMessage && <p className='text-gray-500 text-xs '>{errorMessage}</p>}
        </div>
        
        <ToastContainer />
        <hr></hr>
        {optionList.map((option, index) => (
          <div className='flex items-baseline justify-around w-20' key={index}>
            <BsDashCircleDotted fontSize={18} onClick={() => deleteOption(index)} />
            <span className='text-sm text-titleFont'>{option}</span>
          </div>
        ))}
        <p className='text-xs mr-6 text-center'> Pair Of Selected Variant: {optionList.join('-')}</p>
        <button className='h-10 bg-gray-800 rounded-xl text-titleFont' onClick={() => { dispatch(createOptionList({ optionList: optionList, productId: product.id })) }}>Choose this variants</button>
      </div> 
    
      {/* [{"id":1,"name":"color"},{"id"=2,"name=size"}] */}
      {optionListCreated.length > 0 ? optionListCreated.map((item, i) => (
        <div key={i} className='border-2 rounded-xl border-stone-500 p-10'>
          <label>{item.name}</label>
          <input
            type="text"
            placeholder='Enter the value'
            className='ml-2 pl-2 rounded-xl bg-gray-500 text-yellow-50 hover:bg-slate-800 border-2'
            onChange={(e) => handleSetValue(e)}
          ></input>
          <button onClick={addValue(i)}>Select</button>
          {errorMessage && <p className='text-gray-500'>{errorMessage}</p>}
          {optionValueList.map((optionValue, index) => (
            <div className='flex items-baseline m-2 justify-around w-20 text-sm' key={index}>
              <BsDashCircleDotted onClick={() => deleteValue(index)} />
              <span>{optionValue}</span> 
              {/* //[1,2,3].map(value) */}
            </div>
          ))}
          <button className='h-10 bg-gray-800 rounded-xl text-titleFont' onClick={() => { 
            dispatch(createOptionValueList({ optionValues: optionValueList[i], optionId: item.id }));
            setOptionValueList([]); 
            }}>Add the value for {item.name}</button>
        </div>
        
      )):<></>}


      {/* tạo biến thể */}
      <button>Chọn cặp biến thể này cho sản phẩm của bạn</button>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                VARIANT
              </th>
              <th scope="col" className="px-6 py-3">
                TITLE
              </th>
              <th scope="col" className="px-6 py-3">
                SKU
              </th>
              <th scope="col" className="px-6 py-3">
                STOCK
              </th>
              <th scope="col" className="px-6 py-3">
                WEIGHT
              </th>
              <th scope="col" className="px-6 py-3">
                PRICE
              </th>
              <th scope="col" className="px-6 py-3">
                SALE PRICE
              </th>
              <th scope="col" className="px-6 py-3">
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                S | M
              </th>
              <td className="px-6 py-4">
                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
              </td>
              <td className="px-6 py-4">
                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John1" required />
              </td>
              <td className="px-6 py-4">
                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John1" required />
              </td>
              <td className="px-6 py-4">
                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John1" required />
              </td>
              <td className="px-6 py-4">
                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John1" required />
              </td>
              <td className="px-6 py-4">
                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John1" required />
              </td>
              <td className="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Create</a>
              </td>
            </tr>    
          </tbody>
        </table>
      </div>

      {/* lấy ra list option sau đó hiện bảng */}

    </div>
  )
}

export default Variants
