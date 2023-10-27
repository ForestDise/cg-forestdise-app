import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getVariant,
  selectError,
  selectLoading,
  selectSuccess,
  selectVariantDetail,
} from "../../../features/variant/variantSlice";
import { addNewCartLine, addToCart } from "../../../features/cart/cartSlice";
import { setCategory } from "../../../features/sellerStore/sellerStoreSlice";
import StarRating from "../../common/icon/StarRating";
import { getReviewsByVariantId } from "../../../features/coment_review/reviewSlide"

function ProductDetail() {
  const { id } = useParams();
  const [variantId, setVariantId] = useState(null);
  const [productId, setProductId] = useState(id);
  const [mainImage, setMainImage] = useState("");
  const [showRecommend, setShowRecommend] = useState(false);
  const storeInfo = useSelector((state) => state.sellerStore.storeInfo);
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  const getVariantDetail = async () => {
    if (id != null) {
      dispatch(getVariant(id));
    }
  };

  useEffect(() => {
    getVariantDetail();
  }, [variantId]);

  const getReviewListByVariantId = async () => {
    if (variantId != null) {
      dispatch(getReviewsByVariantId(variantId));
    }
  };

  useEffect(() => {
    getReviewListByVariantId(variantId);
  }, [variantId]);

  const variantDetail = useSelector(selectVariantDetail);
  const statusLoading = useSelector(selectLoading);
  const statusSuccess = useSelector(selectSuccess);
  const statusError = useSelector(selectError);
  const reviewVariantList = useSelector((state)=> state.review.reviews);
  console.log(reviewVariantList);


  useEffect(() => {
    if (variantDetail && variantDetail.variantDto.img) {
      setMainImage(variantDetail.variantDto.img);
      setVariantId(variantDetail.variantDto.id);
    }
  }, [variantDetail]);

  const handleThumbnailClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

  // Tạo một đối tượng để lưu trạng thái của các cặp giá trị đã chọn
  const [selectedOptions, setSelectedOptions] = useState({});
  // Hàm được gọi khi một cặp giá trị tùy chọn thay đổi
  const handleOptionChange = (optionName, optionValueId) => {
    setSelectedOptions({
      ...selectedOptions,
      [optionName]: optionValueId,
    });
  };
  useEffect(() => {
    console.log("selectedOptions đã thay đổi:", selectedOptions);
  }, [selectedOptions]);
  // Hàm set lại VariantId nếu cặp biến thể khớp
  const findMatchingVariantId = (selectedOptions, variantListDto) => {
    for (const variant of variantListDto) {
      if (
        Object.keys(selectedOptions).every((optionName) => {
          const selectedOptionValue = selectedOptions[optionName];
          return variant.optionValueDtoList.some(
            (option) => option.value === selectedOptionValue
          );
        })
      ) {
        return variant.id;
      }
    }
    return null; // Trả về null nếu không tìm thấy biến thể khớp
  };

  console.log(statusLoading);
  console.log(statusSuccess);
  console.log(statusError);
  console.log(id);
  console.log(variantDetail);

  return (
    variantDetail && (
      <div className="font-bodyFont w-full bg-gray-100 p-1">
        <div className="container mx-auto h-auto grid grid-cols-5 gap-2">
          {/* Thumnail start */}
          <div className="w-full h-full bg-white px-4 col-span-2 flex flex-col py-10 border-gray-300 border-2 rounded-3xl">
            <div className="w-full h-96 object-contain fluid__image-container ">
              <img
                className="w-full h-96 object-contain "
                src={mainImage}
                alt="ProductImg"
              ></img>
            </div>
            <div className="font-titleFont px-8 mx-8 my-4 hover:border-spacing-x-5 text-center justify-center tracking-wide text-green-900 size text-sm ">
              <span>Roll over the image to zoom in</span>
            </div>
            <div>
              <div className="flex flex-wrap text-center justify-between object-contain hover:py-4 mx-21">
                {variantDetail &&
                  variantDetail.variantDto.imageDTOList?.map((item, index) => (
                    <img
                      key={index}

                      className="w-8 h-8 object-contain basis-1/6 rounded-sm hover:outline outline-offset-1 outline-cyan-500 shadow-2xl duration-300"
                      src={item.imgPath}
                      alt="ProductImg"
                      onClick={() => handleThumbnailClick(item.imgPath)}
                    ></img>
                  ))}
                {variantDetail &&
                  variantDetail.videoDtoList?.map((item, i) => (
                    <video
                      key={i}
                      controls
                      className="w-8 h-8 object-contain basis-1/6 rounded-sm hover:outline outline-offset-1 outline-cyan-500 shadow-2xl duration-300 px-4"
                    >
                      <source src={item.videoPath} type="video/mp4" />
                    </video>
                  ))}
              </div>
            </div>
          </div>
          {/* Thumnail end */}
          {/* Detail Product Start */}
          <div className="w-full h-full bg-white px-4 col-span-2 border-gray-300 border-2 rounded-3xl">
            <div className="w-full h-full bg-white px-4 col-span-2 flex flex-col py-10">
              <div className="font-bodyFont tracking-wide text-lg text-amazon_blue size sm:text-xs  md:text-lg lg:text-xl xl:text-3xl">
                <h2>{variantDetail.variantDto.name}</h2>
              </div>
              <Link to={`/store/${storeInfo.id}`}>
                <div className="font-titleFont tracking-wide text-green-900 size text-sm sm:text-xs hover:text-green-700 underline">
                  <span
                    onClick={() => {
                      dispatch(setCategory(storeInfo.storeCategoryList));
                    }}
                  >
                    Visit the {storeInfo.name}
                  </span>
                </div>
              </Link>
              <div className="font-titleFont flex items-center text-center justify-between text-sm text-yellow-500 mb-2">
                <div className="flex text-center justify-center ">
                  <div>{variantDetail.productDTO.ratings}</div>
                  <StarRating
                    rating={3.5}
                    fontSize={15}
                  />
                </div>
                {/* 5 star */}
                <div className="">
                  {variantDetail.productDTO.ratings} rating
                </div>
                <Link to={`/review/{productId}`} className="text-green-900">
                  {" "}
                  See all reviews
                </Link>
              </div>
              <hr></hr>
              {variantDetail.variantDto.stockQuantity > 0 ? (
                <div className="font-titleFont tracking-wide text-lg text-amazon_blue size sm:text-xs  md:text-lg lg:text-xl xl:text-3xl flex mb-6 mt-4 ">
                  <h2 className="line-through mr-4 text-red-700">
                    ${variantDetail.variantDto.price}
                  </h2>
                  <h2>
                    <span className="">
                      ${variantDetail.variantDto.salePrice}
                    </span>
                  </h2>
                  <span className="text-yellow-500 text-xs ml-4 pb-0">
                    {variantDetail.variantDto.stockQuantity} Available
                  </span>
                </div>
              ) : (
                <div className=" text-green-900 mt-6 flex flex-col mb-6">
                  <h1>Currently unavailable.</h1>
                  <span className="text-xs text-black">
                    We don't know when or if this item will be back in stock.
                  </span>
                </div>
              )}
              {variantDetail &&
                variantDetail.optionTableDto.map((option) => (
                  <>
                    <div className="flex flex-start justify-start">
                      <div className="text-black mr-2">{option.name} : </div>
                      <div>SE - Pink Stripes</div>
                    </div>
                    <div className="flex justify-between items-baseline mt-4 mb-6 pb-6 border-b border-slate-200 ">
                      <div className="space-x-4 flex text-xl">
                        {option.optionValueDTOList.map((ele, index) => (
                          <label key={index}>
                            <input
                              className="sr-only peer"
                              name="style"
                              type="radio"
                              value=""
                            />
                            <div className="w-18 h-18 pl-4 pr-4 rounded-sm flex text-center justify-between text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                              {ele.value}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </>
                ))}

              <div className="w-full mx-auto h-auto grid grid-cols-5 gap-2 left-0">
                {variantDetail &&
                  variantDetail.productAttributeDTOList.map((attr) => (

                    <>
                      <div className=" w-full h-full bg-white col-span-2 font-titleFont tracking-wide text-l text-amazon_blue text-left font-bold">
                        {attr.name}
                      </div>
                      <div className="w-full h-full bg-white col-span-3 text-left font-titleFont border-1">
                        {attr.value}
                      </div>
                    </>
                  ))}
              </div>
              <hr></hr>
              <div>
                <h2 className="font-bold mt-2">About this item </h2>
                <ul className="list-disc ml-4">
                  {variantDetail &&
                    variantDetail.productDTO.bulletDTOList.map((bullet) => (

                      <li className="font-titleFont tracking-wide text-sm text-amazon_blue">
                        {bullet.name}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Detail Product End */}
          {/* Cart Start */}
          <div className="w-full h-full bg-white col-span-1 border-yellow-300 border-2 rounded-3xl text-sm">
            <div className="flex flex-col p-4">
              <div className="font-titleFont tracking-wide text-lg text-amazon_blue size sm:text-xs  md:text-lg lg:text-xl xl:text-3xl">
                <h2>
                  <span className="">$</span>
                  {variantDetail.variantDto.salePrice}
                </h2>
              </div>
              <div>
                <h5>
                  Delivery <span className="font-bold">Monday, October 30</span>
                </h5>
              </div>
              <div className="flex flex-row">
                <FmdGoodIcon sx={{ fontSize: 20 }} />
                <Link to={`/deliver`}>
                  <span className=" text-green-900 hover:text-stone-400 underline text-xs">
                    Deliver To Nghia - Đà Nẵng
                  </span>
                </Link>
              </div>
              <div>
                <h1 className="my-4 text-2xl text-green-900">In Stock</h1>
              </div>
              <button
                onClick={() => {
                  userInfo
                    ? dispatch(
                        addNewCartLine({
                          id: "",
                          quantity: 1,
                          cartId: userInfo.id,
                          variantId: variantDetail.variantDto.id,
                        })
                      )
                    : dispatch(
                        addToCart({
                          id: "",
                          quantity: 1,
                          cartDto: {
                            id: "",
                            userId: "",
                          },
                          variantDto: {
                            id: variantDetail.variantDto.id,
                            name: variantDetail.variantDto.name,
                            skuCode: variantDetail.variantDto.skuCode,
                            stockQuantity:
                              variantDetail.variantDto.stockQuantity,
                            weight: variantDetail.variantDto.weight,
                            price: variantDetail.variantDto.price,
                            img: variantDetail.variantDto.img,
                            salePrice: variantDetail.variantDto.salePrice,
                            optionValueDtoList:
                              variantDetail.variantDto.optionValueDtoList,
                            imageDtoList: variantDetail.variantDto.mageDtoList,
                            videoDtoList: variantDetail.variantDto.videoDtoList,
                            reviewDtoList:
                              variantDetail.variantDto.reviewDtoList,
                          },
                        })
                      );
                }}
                className="rounded-lg bg-yellow-400 py-3 my-2 hover:bg-yellow-300 duration-100 cursor-pointer"
              >
                Add To Cart
              </button>
              <button
                className="rounded-lg py-3 my-2 bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border
              border-zinc-400 active:border-yellow-800 active:shadow-amazonInput duration-100 cursor-pointer"
              >
                Buy Now
              </button>
              <div className="w-full mx-auto h-auto grid grid-cols-6 gap-2 left-0 ">
                <div className=" w-full h-full bg-white  col-span-2 font-titleFont tracking-wide text-sm text-amazon_blue text-left">
                  Ship from
                </div>
                <div className="w-full h-full bg-white col-span-4 border-1">
                  Amazon
                </div>
                <div className=" w-full h-full bg-white  col-span-2 font-titleFont tracking-wide text-sm text-amazon_blue text-left">
                  Sold by
                </div>
                <div className="w-full h-full bg-white col-span-4 border-1">
                  Amazon
                </div>
                <div className=" w-full h-full bg-white  col-span-2 font-titleFont tracking-wide text-sm text-amazon_blue text-left">
                  Returns
                </div>
                <div className="w-full h-full bg-white col-span-4 border-1 text-green-900">
                  Eligible for Return, Refund or Replacement within 30 days of
                  receipt
                </div>
                <div className=" w-full h-full bg-white  col-span-2 font-titleFont tracking-wide text-sm text-amazon_blue text-left">
                  Supports
                </div>
                <div className="w-full h-full bg-white col-span-4 border-1 text-green-900">
                  Product support included
                </div>
              </div>
            </div>
          </div>
          {/* Cart End */}
        </div>
        <div className="container mx-auto h-auto text-3xl font-bold py-4">
          <h1>FROM THE BRAND</h1>
          <img
            className="w-full object-contain"
            src={variantDetail.storeDto.interactiveImage}
            alt="ProductImg"
          ></img>
        </div>
        <hr></hr>
        <div className="container mx-auto h-auto text-3xl font-bold py-4">
          <h1>From the manufacturer</h1>
          <img
            className="w-full px-48 my-4 object-contain"
            src={variantDetail.storeDto.dealsImage}
            alt="ProductImg"
          ></img>
          <img
            className="w-full px-48 my-4  object-contain"
            src={variantDetail.storeDto.dealsSquareImage}
            alt="ProductImg"
          ></img>
          <h1>{variantDetail.storeDto.name}</h1>
          <img
            className="w-full px-48 my-4  object-contain"
            src={variantDetail.storeDto.homeImage}
            alt="ProductImg"
          ></img>
          <img
            className="w-full px-48 my-4  object-contain"
            src={variantDetail.storeDto.interactiveImage}
            alt="ProductImg"
          ></img>
        </div>
        <hr></hr>
        {/* Search comment start */}
        <div className="container mx-auto h-auto py-4 text-bodyFont flex flex-col">
          <h1 className="text-3xl font-bold pb-2">
            Looking for specific info?
          </h1>
          <div className=" container h-10 w-2/3 rounded-md hidden lgl:flex flex-grow">
            <span className="w-12 h-full flex items-center justify-center bg-gray-300 hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tl-md rounded-bl-md">
              <SearchIcon />
            </span>
            <input
              type="text"
              className="h-full text-xs text-amazon_blue flex-grow outline-none border px-2 rounded-tr-md rounded-br-md"
              placeholder="Search in reviews, Q&A..."
            ></input>
          </div>
        </div>
        <hr></hr>
        {/* Search comment end */}
        <div className="container mx-auto h-auto grid grid-cols-7 gap-2 text-bodyFont">
          {/* Star Index start */}
          <div className="w-full h-full col-span-2 flex flex-col py-4 border-gray-300 text-bodyFont">
            <h1 className="text-titleFont text-2xl font-bold ">
              Customer reviews
            </h1>
            <div className="flex flex-row items-center text-center text-sm mb-2 ">
              <div className="text-yellow-500 items-center mr-4">
                <StarIcon sx={{ fontSize: 25 }} />
                <StarIcon sx={{ fontSize: 25 }} />
                <StarIcon sx={{ fontSize: 25 }} />
                <StarIcon sx={{ fontSize: 25 }} />
                <StarIcon sx={{ fontSize: 25 }} />
              </div>
              <div>4.7 out of 5</div>
            </div>
            <span className="text-gray-400 text-xs mb-4">
              16,056 global ratings
            </span>
            <table className="text-xs border-spacing-2 border-collapse">
              <tbody className="text-amazon_ember">
                <tr className="">
                  <td className="w-2/12	">
                    <a className="decoration-0   text-left justify-between">
                      {" "}
                      5 star
                    </a>
                  </td>
                  <td className="w-8/12	">
                    <a
                      href="#"
                      className=""
                      title="5 star represent ...% of rating"
                    >
                      <div className="overflow-hidden hover:shadow-testShadow bg-gray-200 h-5 rounded-sm">
                        <div className="w-3/6 h-full rounded-sm bg-yellow-400 transition-width ease	duration-200"></div>
                      </div>
                    </a>
                  </td>
                  <td className="w-2/12 pl-1 text-left	">50%</td>
                </tr>
                <tr className="">
                  <td>
                    <a className="decoration-0 text-left"> 4 star</a>
                  </td>
                  <td className="w-8/12	">
                    <a
                      href="#"
                      className=""
                      title="5 star represent ...% of rating"
                    >
                      <div className="overflow-hidden hover:shadow-testShadow bg-gray-200 h-5 rounded-sm">
                        <div className="w-1/6 h-full rounded-sm bg-yellow-400 transition-width ease	duration-200"></div>
                      </div>
                    </a>
                  </td>
                  <td className="w-2/12 pl-1 text-left	">16% </td>
                </tr>
                <tr className="mb-4">
                  <td>
                    <a className="decoration-0 text-left"> 3 star</a>
                  </td>
                  <td className="w-8/12	">
                    <a
                      href="#"
                      className=""
                      title="5 star represent ...% of rating"
                    >
                      <div className="overflow-hidden hover:shadow-testShadow bg-gray-200 h-5 rounded-sm">
                        <div className="w-1/6 h-full rounded-sm bg-yellow-400 transition-width ease	duration-200"></div>
                      </div>
                    </a>
                  </td>
                  <td className="w-2/12 pl-1 text-left">16%</td>
                </tr>
                <tr className="mb-4">
                  <td>
                    <a className="decoration-0 text-left"> 2 star</a>
                  </td>
                  <td className="w-8/12	">
                    <a
                      href="#"
                      className=""
                      title="5 star represent ...% of rating"
                    >
                      <div className="overflow-hidden hover:shadow-testShadow bg-gray-200 h-5 rounded-sm">
                        <div className="w-1/6 h-full rounded-sm bg-yellow-400 transition-width ease	duration-200"></div>
                      </div>
                    </a>
                  </td>
                  <td className="w-2/12 pl-1 text-left	">16% </td>
                </tr>
                <tr className="mt-4">
                  <td>
                    <a className="decoration-0   text-left"> 1 star</a>
                  </td>
                  <td className="w-8/12	">
                    <a
                      href="#"
                      className=""
                      title="5 star represent ...% of rating"
                    >
                      <div className="overflow-hidden hover:shadow-testShadow bg-gray-200 h-5 rounded-sm">
                        <div className="w-0 h-full rounded-sm bg-yellow-400 transition-width ease	duration-200"></div>
                      </div>
                    </a>
                  </td>
                  <td className="w-2/12 pl-1 text-left	">0% </td>
                </tr>
              </tbody>
            </table>
            <div className="flex flex-row h-full item-center justify-start mt-4 mb-4">
              {showRecommend && <ArrowDropUpIcon />}
              {!showRecommend && <ArrowDropDownIcon />}
              <span
                onClick={() => {
                  setShowRecommend(!showRecommend);
                }}
                className="hover:text-yellow-600 hover:underline text-bodyFont text-xs text-amazon_ember"
              >
                How customer reviews and ratings work?
              </span>
            </div>
            {showRecommend && (
              <div className="flex flex-col w-10/12 text-start pl-3 font-titleFont text-sm pb-4">
                <span>
                  Customer Reviews, including Product Star Ratings help
                  customers to learn more about the product and decide whether
                  it is the right product for them.
                </span>
                <br></br>
                <span>
                  To calculate the overall star rating and percentage breakdown
                  by star, we don’t use a simple average. Instead, our system
                  considers things like how recent a review is and if the
                  reviewer bought the item on Amazon. It also analyzed reviews
                  to verify trustworthiness.
                </span>
              </div>
            )}
            {/* Star Index end */}
            <hr></hr>
            <h1 className="text-titleFont text-2xl font-bold">
              Review this product
            </h1>
            <span className="text-bodyFont text-xs mb-4">
              Share your thoughts with other customers
            </span>
            <button className=" p-1 bg-gray-300 rounded-md text-bodyFont text-xs mb-4">
              Write a customer review
            </button>
            <hr></hr>
          </div>

          <div className="w-full h-full col-span-5 flex flex-col py-4 border-gray-300 text-titleFont  ">
            <div className="flex flex-row text-center justify-between ">
              <h1 className="text-2xl font-bold ">Reviews with images</h1>
              <div>
                <a className="hover:underline text-amazon_ember">
                  See all photo
                </a>
                <ArrowRightIcon />
              </div>
            </div>

            {/* Carosel Review Image Start */}
            <div></div>
            <hr></hr>
            {/* Carosel Review Image End */}
            {/* List Review Of Customer Start */}
            <h1 className="text-2xl font-bold mb-6">
              Top reviews from the United States
            </h1>
            {variantDetail &&
              variantDetail.variantDTOList[0].reviewDTOList?.map((item, index) => (
                <div className="m-4">
                  <div className="flex mb-2">
                    <img
                      src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/116429521_1655876004585921_941667011043408186_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=84a396&_nc_ohc=jX_SP-XeWGUAX8gd9Dl&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfB8K54ttI7F3njd8xLWtnInOErSx2FkaIhUXEuNjobBRw&oe=654A001A"
                      className="rounded-full w-5 h-5"
                    />
                    <div className="ml-4 text-titleFont">{item.userDto.clientName}</div>
                  </div>
                  <div className="flex">
                    <div className="text-amazon_yellow text-sm items-center ">
                      <StarRating
                        rating={item.star}
                        fontSize={15}
                      />
                    </div>
                    <a className="text-bodyFont text-sm ml-4 font-medium hover:underline hover:text-amber-600">
                      {" "}
                      {item.title}
                    </a>
                  </div>
                  <div className="text-bodyFont text-xs text-gray-500">
                    Reviewed in the United States on {item.update_at}
                  </div>
                  <div className="text-bodyFont text-xs text-gray-500 mb-2">
                  Variant:
                    {variantDetail.variantDTOList[0].optionValueDTOList.map((option,index)=> (
                      <span key={index}>{option.value} |</span>
                    ))}
                    
                    {item.verified_admin == true ? <span className="text-amber-700 ml-2 font-bold">
                      Verified Purchase
                    </span> : <></> }
                  </div>
                  <div className="text-bodyFont text-xs text-black">
                  {item.content}
                  </div>
                </div>
              ))}

            
            <hr></hr>
            <div className="m-4">
              <div className="flex mb-2">
                <img
                  src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/116429521_1655876004585921_941667011043408186_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=84a396&_nc_ohc=jX_SP-XeWGUAX8gd9Dl&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfB8K54ttI7F3njd8xLWtnInOErSx2FkaIhUXEuNjobBRw&oe=654A001A"
                  className="rounded-full w-5 h-5"
                />
                <div className="ml-4 text-titleFont">Meomeocute</div>
              </div>
              <div className="flex">
                <div className="text-amazon_yellow text-sm items-center ">
                  <StarIcon sx={{ fontSize: 15 }} />
                  <StarIcon sx={{ fontSize: 15 }} />
                  <StarIcon sx={{ fontSize: 15 }} />
                  <StarIcon sx={{ fontSize: 15 }} />
                  <StarIcon sx={{ fontSize: 15 }} />
                </div>
                <a className="text-bodyFont text-sm ml-4 font-medium hover:underline hover:text-amber-600">
                  {" "}
                  I wish that I had found these before I spent 1000's on doctors
                  and Physical therapy
                </a>
              </div>
              <div className="text-bodyFont text-xs text-gray-500">
                Reviewed in the United States on September 25, 2023
              </div>
              <div className="text-bodyFont text-xs text-gray-500 mb-2">
                Style: Men's Size 8-13 | Size: 1 Pair (Pack of 1)
                <span className="text-amber-700 ml-2 font-bold">
                  Verified Purchase
                </span>
              </div>
              <div className="text-bodyFont text-xs text-black">
                Seriously these are the best things I've found. They have helped
                my plantar fasciitis better than the Shot the foot doctor gave,
                and the many physical therapy appointments which cost me every
                time I went. I wish I had found them before all that. Even after
                all that I still had pain, it was better, but not 100%, these
                inserts have helped me profoundly. Please note that they do not
                work in all shoes, but so far I've only had one pair of my shoes
                that they didn't work in. I'll be chucking those. They've worked
                in dress shoes, and my Puma workout shoes along with my Keen
                hiking shoes. So if they don't work for you, try them in a
                different shoe. I bet they will work in any flat shoe with
                little or no arch support. Give them a shot if you suffer as I
                did.
              </div>
            </div>
            <hr></hr>
            <div className="m-4">
              <div className="flex mb-2">
                <img
                  src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/116429521_1655876004585921_941667011043408186_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=84a396&_nc_ohc=jX_SP-XeWGUAX8gd9Dl&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfB8K54ttI7F3njd8xLWtnInOErSx2FkaIhUXEuNjobBRw&oe=654A001A"
                  className="rounded-full w-5 h-5"
                />
                <div className="ml-4 text-titleFont">Meomeocute</div>
              </div>
              <div className="flex">
                <div className="text-amazon_yellow text-sm items-center ">
                  <StarIcon sx={{ fontSize: 15 }} />
                  <StarIcon sx={{ fontSize: 15 }} />
                  <StarIcon sx={{ fontSize: 15 }} />
                  <StarIcon sx={{ fontSize: 15 }} />
                  <StarIcon sx={{ fontSize: 15 }} />
                </div>
                <a className="text-bodyFont text-sm ml-4 font-medium hover:underline hover:text-amber-600">
                  {" "}
                  I wish that I had found these before I spent 1000's on doctors
                  and Physical therapy
                </a>
              </div>
              <div className="text-bodyFont text-xs text-gray-500">
                Reviewed in the United States on September 25, 2023
              </div>
              <div className="text-bodyFont text-xs text-gray-500 mb-2">
                Style: Men's Size 8-13 | Size: 1 Pair (Pack of 1)
                <span className="text-amber-700 ml-2 font-bold">
                  Verified Purchase
                </span>
              </div>
              <div className="text-bodyFont text-xs text-black">
                Seriously these are the best things I've found. They have helped
                my plantar fasciitis better than the Shot the foot doctor gave,
                and the many physical therapy appointments which cost me every
                time I went. I wish I had found them before all that. Even after
                all that I still had pain, it was better, but not 100%, these
                inserts have helped me profoundly. Please note that they do not
                work in all shoes, but so far I've only had one pair of my shoes
                that they didn't work in. I'll be chucking those. They've worked
                in dress shoes, and my Puma workout shoes along with my Keen
                hiking shoes. So if they don't work for you, try them in a
                different shoe. I bet they will work in any flat shoe with
                little or no arch support. Give them a shot if you suffer as I
                did.
              </div>
            </div>
            <hr></hr>
            {/* List Review Of Customer End */}
          </div>
        </div>
      </div>
    )
  );

}

export default ProductDetail;
