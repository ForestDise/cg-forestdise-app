import React, { useState } from 'react'
import { BsDashCircleDotted } from "react-icons/bs";


function Variants() {
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
      } else {
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
    <div className='col-span-8 p-0'>
      <h1 className='text-6xl text-center'> SET VARIANT FOR PRODUCT
      </h1>
      {/* select option */}
      <label >Create Option:</label>
      <input onChange={handleSetOption}
        type="text"
        placeholder='Enter the option'
        value={option}
      ></input>
      <p>Current input value: {option}</p>

      <button onClick={addOption}>Select</button>
      {errorMessage && <p className='text-gray-300'>{errorMessage}</p>}
      <ul>
        {optionList.map((option, index) => (
          <li key={index}><BsDashCircleDotted onClick={() => deleteOption(index)} /> {option}</li>
        ))}
      </ul>
      <hr></hr>
      {optionList.map((option, index) => (
        <span key={index}><BsDashCircleDotted onClick={() => deleteOption(index)} />{option}</span>
      ))}

    </div>
  )
}

export default Variants
