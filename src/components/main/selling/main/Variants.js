import React, { Fragment, useEffect, useState } from 'react'
import { BsDashCircleDotted } from "react-icons/bs";
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { createOptionList } from '../../../../features/variant/optionSlide';
import { createOptionValueList } from '../../../../features/variant/optionValueSlide'
import { addVariant } from '../../../../features/variant/variantSlice'


function Variants() {
  const product = useSelector((state) => state.product.product);
  const optionListCreated = useSelector((state) => state.option.options);
  const optionValueListCreated = useSelector((state) => state.optionValue.optionValues);
  console.log(optionValueListCreated);
  const variantListCreated = useSelector((state) => state.variant.variants);
  console.log(variantListCreated);


  const dispatch = useDispatch();
  const [option, setOption] = useState("");
  const [value, setValue] = useState("");
  const [optionList, setOptionList] = useState([]);
  const [optionValueList, setOptionValueList] = useState([[], [], [], [], []]);
  const [errorMessage, setErrorMessage] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm();


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
  console.log(optionValueList);



  const handleSetValue = (e) => {
    setValue(e.target.value);
    console.log(value);
  }
  const addValue = (i) => {
    console.log(i);
    if (value.trim() !== "") {
      console.log(optionValueList);
      console.log(optionValueList[i]);
      if (optionValueList[i].includes(value)) {
        Swal.fire({
          title: 'This value is already existed',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }
      else {
        setOptionValueList((prevOptionValueList) => {
          const newOptionValueList = [...prevOptionValueList];
          if (i >= 0 && i < newOptionValueList.length) {
            newOptionValueList[i] = [...newOptionValueList[i], value];
          }
          return newOptionValueList;

        });
        console.log(optionValueList);
        setValue("");
        setErrorMessage("");
      }
    }
  }
  const deleteValue = (index) => {
    setOptionValueList((optionValueList) => {
      const newOptionValueList = [...optionValueList];
      if (index >= 0 && index < newOptionValueList.length) {
        newOptionValueList[index].splice(index, 1);
      }
      return newOptionValueList;
    });
  }
  // create variant list
  const cartesianProduct = (arr) => {
    return arr.reduce((a, b) =>
      a.map(x => b.map(y => x.concat(y)))
        .reduce((a, b) => a.concat(b), []), [[]]);
  }
  const createListVariant = () => {
    const resultWithIds = optionValueListCreated.map(combination => combination.map(item => item.id));
    console.log(resultWithIds);
    const combinationss = cartesianProduct(resultWithIds);
    console.log(combinationss);
    combinationss.map(couple => {
      dispatch(addVariant({ variant: couple, productId: product.id }));
    })
    Swal.fire({
      title: 'Success create' + combinationss.length + 'variant',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })

  }
  const showError = () => {
    Swal.fire({
      title: 'Please set option and value before confirm variant',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
  //update variant list
  const registerOptions = {
    name: { required: "Title is required" },
    skuCode: { required: "SkuCode is required" },
    stockQuantity: {
      required: "StockQuantity is required",
      // validate: (value) => parseFloat(value) > 0 || 'Price must be greater than 0'
    },
    weight: { required: "Weight is required" },
    price: {
      required: "Price is required",
      // validate: (value) => parseFloat(value) > 0 || 'Price must be greater than 0',
    },
    salePrice: {
      required: "SalePrice is required",
      // validate: (value) => parseFloat(value) > 0 || 'Price must be greater than 0',
    },
  };
  const onSubmit = (data, id) => {

  }

  const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));
  const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);
  const test = () => {
    console.log(22);
    cartesian([1, 2], [10, 20], [100, 200, 300]);
  }

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
        <div key={i} className='border-2 rounded-xl border-stone-500 p-10 flex items-baseline justify-around'>
          <label>{item.name}</label>
          <input
            type="text"
            placeholder='Enter the value'
            className='ml-2 pl-2 rounded-xl bg-gray-500 text-yellow-50 hover:bg-slate-800 border-2'
            onChange={handleSetValue}
          />
          <button onClick={() => { addValue(i) }}>Select</button>
          {optionValueList[i] != undefined ? optionValueList[i].map((optionValue, index) => (
            <div className='flex items-baseline m-2 justify-around w-20 text-sm' key={index}>
              <BsDashCircleDotted onClick={() => deleteValue(index)} />
              <span>{optionValue}</span>
            </div>
          )) : <></>}
          <button className='h-10 bg-gray-800 rounded-xl text-titleFont text-white px-2' onClick={() => {
            dispatch(createOptionValueList({ optionValues: optionValueList[i], optionId: item.id }));
            setValue("");
          }}>Confirm</button>
        </div>

      )) : <></>}
      {variantListCreated.length == 0 && optionValueListCreated.length > 0 ? <button className='w-20 h-10 bg-neutral-600 hover:bg-slate-200 text-xs border-2 rounded-sm items-end' onClick={createListVariant}> CONFIRM VARIANT</button> :
        <button onClick={showError} className='w-20 h-10 bg-neutral-600 hover:bg-slate-200 text-xs border-2 rounded-sm items-end'> CONFIRM VARIANT</button>}




      {/* tạo biến thể */}
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
            {variantListCreated && variantListCreated.map((variant, index) => (
              <form key={index} onSubmit={handleSubmit(onSubmit(variant.id))}>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {variant.optionValueDTOList.map(item => item.value).join('/')}
                  </td>
                  <td className="px-6 py-4">
                    <input
                      name="title"
                      type="text" {...register("name", registerOptions.name)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text" {...register("skuCode", registerOptions.skuCode)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John1" required />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="number" {...register("stockQuantity", registerOptions.stockQuantity)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John1" required />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="number" {...register("weight", registerOptions.weight)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John1" required />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="number" {...register("price", registerOptions.price)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John1" required />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="number" {...register("salePrice", registerOptions.salePrice)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John1" required />
                  </td>
                  <td className="px-6 py-4">
                    <a type="submit" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Create</a>
                  </td>
                </tr>
              </form>

            ))}

          </tbody>
        </table>
      </div>

      {/* lấy ra list option sau đó hiện bảng */}

    </div>
  )
}

export default Variants
