import React, { useState } from 'react'
import { BsDashCircleDotted } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { createOptionList } from '../../../../features/variant/optionSlide';
import { createOptionValueList } from '../../../../features/variant/optionValueSlide'




function Variants() {
  const product = useSelector((state) => state.product.product);
  const optionListCreated = useSelector((state) => state.option.options);

  const dispatch = useDispatch();
  const [option, setOption] = useState("");
  const [value, setValue] = useState("");
  const [variantValueList, setVariantValueList] = useState([]);
  const [optionList, setOptionList] = useState([]);
  const [optionValueList, setOptionValueList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSetOption = (e) => {
    setOption(e.target.value);
    console.log(option);

  }
  const addOption = () => {
    if (option.trim() !== "") {
      if (optionList.includes(option)) {
        setErrorMessage("Giá trị đã tồn tại trong danh sách");
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
  const addValue = () => {
    if (value.trim() !== "") {
      if (optionValueList.includes(value)) {
        setErrorMessage("Giá trị đã tồn tại trong danh sách");
      }
      else {
        setOptionValueList([...optionValueList, value]);
        setValue("");
        setErrorMessage("");
      }
    }
  }
  const deleteValue = (index) => {
    const updateOptionValueList = [...optionValueList];
    updateOptionValueList.splice(index, 1);
    setOptionValueList(updateOptionValueList);
  }
  console.log(optionValueList);


  return (
    <div className='col-span-8 p-0 text-titleFont ml-10'>
      <h1 className='text-6xl text-center'> SET VARIANT FOR PRODUCT : {product.id}</h1>
      {/* select option */}
      {optionListCreated == [] ? <div>
        <div className='flex'>
          <label> Enter new category:</label>
          <input onChange={handleSetOption}
            type="text"
            placeholder='Enter the option'
            value={option}
            className='ml-2 pl-2 rounded-xl bg-gray-500 text-yellow-50 hover:bg-slate-800 border-2 mr-8'
          ></input>
          <button className="rounded-full bg-teal-600 h-10 w-10 " onClick={addOption}>+</button>
        </div>
        {errorMessage && <p className='text-gray-500'>{errorMessage}</p>}
        <ToastContainer />
        <hr></hr>
        {optionList.map((option, index) => (
          <div className='flex items-baseline m-2 justify-around w-20 text-sm' key={index}>
            <BsDashCircleDotted onClick={() => deleteOption(index)} />
            <span>{option}</span>
          </div>
        ))}
        <p className='text-xs'> Pair Of Selected Variant: {optionList.join('-')}</p>
        <button className='h-10 bg-teal-600 rounded-xl text-titleFont' onClick={() => { dispatch(createOptionList({ optionList: optionList, productId: product.id })) }}>Choose this variants</button>
      </div> : <></>}
    
      {/* [{"id":1,"name":"color"},{"id"=2,"name=size"}] */}
      {optionListCreated.length > 0 ? optionListCreated.map(item => (
        <div>
          <label>{item.name}</label>
          <input onChange={handleSetValue}
            type="text"
            placeholder='Enter the value'
            value={option}
            className='ml-2 pl-2 rounded-xl bg-gray-500 text-yellow-50 hover:bg-slate-800 border-2'
          ></input>
          <button onClick={addValue}>Select</button>
          {errorMessage && <p className='text-gray-500'>{errorMessage}</p>}
          {optionValueList.map((optionValue, index) => (
            <div className='flex items-baseline m-2 justify-around w-20 text-sm' key={index}>
              <BsDashCircleDotted onClick={() => deleteValue(index)} />
              <span>{optionValue}</span>
            </div>
          ))}
          <button className='h-10 bg-teal-600 rounded-xl text-titleFont' onClick={() => { 
            dispatch(createOptionValueList({ optionValues: optionValueList, optionId: item.id }));
          setOptionValueList([]); 
            }}>Add the value for {item.name}</button>
        </div>
        
      )):<></>}


      {/* tạo biến thể */}
      <button>Chọn cặp biến thể này cho sản phẩm của bạn</button>

      {/* lấy ra list option sau đó hiện bảng */}

    </div>
  )
}

export default Variants
