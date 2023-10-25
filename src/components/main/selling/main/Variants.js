import React, { useState } from 'react'
import { BsDashCircleDotted } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';



function Variants() {
  const product = useSelector((state) => state.product.value);
  const {productId} = useParams();
  const [option, setOption] = useState("");
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
        // toast.success("Thông báo toast thành công!");
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


  return (
    <div className='col-span-8 p-0 text-titleFont ml-10'>
      <h1 className='text-6xl text-center'> SET VARIANT FOR PRODUCT</h1>
      {/* select option */}
      <div>
        <label> Option:</label>
        <input onChange={handleSetOption}
          type="text"
          placeholder='Enter the option'
          value={option}
          className='ml-2 pl-2 rounded-xl bg-gray-500 text-yellow-50 hover:bg-slate-800 border-2'
        ></input>
      </div>
      <button onClick={addOption}>Select</button>
      {errorMessage && <p className='text-gray-300'>{errorMessage}</p>}
      <ToastContainer />
      <hr></hr>
      {optionList.map((option, index) => (
        <div className='flex items-baseline m-2 justify-around w-20 text-sm' key={index}>
          <BsDashCircleDotted onClick={() => deleteOption(index)} />
          <span>{option}</span>
        </div>
      ))}
      <p className='text-xs'> Pair Of Selected Variant: {optionList.join('-')}</p>
      <p>Choose this variants</p> 
      {/* onClick =()=> {dispatch(createOption(optionList, productId))} */}
      {/* select the pair of option just added*/}
      {/* const options = useSelector(getOptionByProductId) */}
      {/* <div>options.map((option, index)=> (
        || color(id)  || value || 
        ||            || value || 
        ||            || value || 
        || size(id)   || value || 
        ||            || value || 
        ||            || value || 
        render (listVaraint)
      )</div> */}


      {/* tạo biến thể */}
      <button>Chọn cặp biến thể này cho sản phẩm của bạn</button>

      {/* lấy ra list option sau đó hiện bảng */}

    </div>
  )
}

export default Variants
