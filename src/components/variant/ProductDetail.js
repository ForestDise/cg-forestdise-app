import axios from "axios";
import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

function ProductDetail() {
  const [variant, setVariant] = useState({});
  useEffect(() => {
    fetchData();
  });
  async function fetchData() {
    await axios
      .get("https://fakestoreapi.com/products/1")
      .then((res) => setVariant(res.data))
      .catch((err) => {
        throw err;
      });
  }
  return (
    <div className="w-full bg-gray-100 p-1">
      <div className="container mx-auto h-auto grid grid-cols-5 gap-2">
        {/* Thumnail start */}
        <div className="w-full h-full bg-white px-4 col-span-2 flex flex-col py-10 border-gray-300 border-2 rounded-3xl">
          <div>
            <img
              className="w-full h-96 object-contain "
              src={variant.image}
              alt="ProductImg"
            ></img>
          </div>
          <div className="px-8 mx-8 my-4 hover:border-spacing-x-5 text-center justify-center font-titleFont tracking-wide text-green-900 size text-sm ">
            <span>Roll over the image to zoo in</span>
          </div>
          <div>
            <div className="flex flex-wrap text-center justify-between object-contain hover:py-4 mx-21">
              <img
                className="w-8 h-8 object-contain basis-1/6 rounded-sm hover:outline outline-offset-1 outline-cyan-500 shadow-2xl duration-300"
                src={variant.image}
                alt="ProductImg"
              ></img>
              <img
                className="w-8 h-8 object-contain basis-1/6 rounded-sm hover:outline outline-offset-1 outline-cyan-500 shadow-2xl duration-300"
                src={variant.image}
                alt="ProductImg"
              ></img>
              <img
                className="w-8 h-8 object-contain basis-1/6 rounded-sm hover:outline outline-offset-1 outline-cyan-500 shadow-2xl duration-300"
                src={variant.image}
                alt="ProductImg"
              ></img>
              <img
                className="w-8 h-8 object-contain basis-1/6 rounded-sm hover:outline outline-offset-1 outline-cyan-500 shadow-2xl duration-300"
                src={variant.image}
                alt="ProductImg"
              ></img>
              <img
                className="w-8 h-8 object-contain basis-1/6 rounded-sm hover:outline outline-offset-1 outline-cyan-500 shadow-2xl duration-300"
                src={variant.image}
                alt="ProductImg"
              ></img>
              <video
                controls
                className="w-8 h-8 object-contain basis-1/6 rounded-sm hover:outline outline-offset-1 outline-cyan-500 shadow-2xl duration-300 px-4"
              >
                <source src={variant.image} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        {/* Thumnail end */}
        {/* Detail Product Start */}
        <div className="w-full h-full bg-white px-4 col-span-2 border-gray-300 border-2 rounded-3xl">
          <div className="w-full h-full bg-white px-4 col-span-2 flex flex-col py-10">
            <div className="font-titleFont tracking-wide text-lg text-amazon_blue size sm:text-xs  md:text-lg lg:text-xl xl:text-3xl">
              <h2>
                Fjallraven - Foldsack No. 1 Backpack, Fits 15 LaptopsFjallraven
                - Foldsack No. 1 Backpack, Fits 15 Laptops
              </h2>
            </div>
            <a>
              <div className="font-titleFont tracking-wide text-green-900 size text-sm sm:text-xs hover:text-orange-500 underline">
                <span>Visit to the Helu Store</span>
              </div>
            </a>
            <div className="flex items-center text-center justify-between text-sm text-yellow-500 mb-2">
              <div className="flex text-center justify-center ">
                <div>4.1</div>
                <div className="text-yellow-500 text-sm items-center ">
                  <StarIcon sx={{ fontSize: 15 }} />
                  <StarIcon sx={{ fontSize: 15 }} />
                  <StarIcon sx={{ fontSize: 15 }} />
                  <StarIcon sx={{ fontSize: 15 }} />
                  <StarIcon sx={{ fontSize: 15 }} />
                </div>
              </div>
              {/* 5 star */}
              <div className="">69 rating</div>
              <button
                class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200 "
                type="button"
                aria-label="Like"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  />
                </svg>
              </button>
              <a className="text-green-900">See all reviews</a>
            </div>
            <hr></hr>
            <div className="font-titleFont tracking-wide text-lg text-amazon_blue size sm:text-xs  md:text-lg lg:text-xl xl:text-3xl">
              <h2>
                <span className="">$</span>
                {variant.price}
              </h2>
            </div>
            {/* status */}
            <div className=" text-green-900 mt-6 flex flex-col mb-2">
              <h1>Currently unavailable.</h1>
              <span className="text-xs text-black">
                We don't know when or if this item will be back in stock.
              </span>
            </div>
            <div className="flex text-start justify-start ">
              <div className="text-gray mr-2">Color : </div>
              <div> Red and Blue</div>
            </div>
            <div class="flex items-baseline mt-2 mb-6 pb-6 border-b border-slate-200">
              <div class="space-x-2 flex text-sm">
                <label>
                  <input
                    class="sr-only peer"
                    name="size"
                    type="radio"
                    value="xs"
                    // checked
                  />
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    XS
                  </div>
                </label>
                <label>
                  <input
                    class="sr-only peer"
                    name="size"
                    type="radio"
                    value="s"
                  />
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    S
                  </div>
                </label>
                <label>
                  <input
                    class="sr-only peer"
                    name="size"
                    type="radio"
                    value="m"
                  />
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    M
                  </div>
                </label>
                <label>
                  <input
                    class="sr-only peer"
                    name="size"
                    type="radio"
                    value="l"
                  />
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    L
                  </div>
                </label>
                <label>
                  <input
                    class="sr-only peer"
                    name="size"
                    type="radio"
                    value="xl"
                  />
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    XL
                  </div>
                </label>
              </div>
            </div>
            <div className="flex flex-start justify-start">
              <div className="text-black mr-2">Style : </div>
              <div>SE - Pink Stripes</div>
            </div>
            <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200 ">
              <div class="space-x-2 flex text-xs">
                <label>
                  <input
                    class="sr-only peer"
                    name="style"
                    type="radio"
                    value="SE - Pink Stripes"
                  />
                  <div class="w-18 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    SE - Pink Stripes
                  </div>
                </label>
                <label>
                  <input
                    class="sr-only peer"
                    name="style"
                    type="radio"
                    value="PROMAX - Pink Stripes"
                  />
                  <div class="w-18 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    PROMAX - Pink Stripes
                  </div>
                </label>
                <label>
                  <input
                    class="sr-only peer"
                    name="style"
                    type="radio"
                    value="PLUS - Pink Stripes"
                  />
                  <div class="w-18 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    PLUS - Pink Stripes
                  </div>
                </label>
                <label>
                  <input
                    class="sr-only peer"
                    name="style"
                    type="radio"
                    value="l"
                  />
                  <div class="w-18 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    SE - BLACK Stripes
                  </div>
                </label>
                <label>
                  <input
                    class="sr-only peer"
                    name="style"
                    type="radio"
                    value="xl"
                  />
                  <div class="w-18 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    PROMAX - Pink Stripes
                  </div>
                </label>
              </div>
            </div>

            <div className="w-full mx-auto h-auto grid grid-cols-5 gap-2 left-0 ">
              <div className=" w-full h-full bg-white  col-span-2 font-titleFont tracking-wide text-l text-amazon_blue text-left font-bold">
                Brand
              </div>
              <div className="w-full h-full bg-white col-span-3 border-1">
                X Rocker
              </div>
              <div className=" w-full h-full bg-white  col-span-2 font-titleFont tracking-wide text-l text-amazon_blue text-left font-bold">
                Material
              </div>
              <div className="w-full h-full bg-white col-span-3 border-1">
                Wood
              </div>
              <div className=" w-full h-full bg-white  col-span-2 font-titleFont tracking-wide text-l text-amazon_blue text-left font-bold">
                Color
              </div>
              <div className="w-full h-full bg-white col-span-3 border-1">
                Pink
              </div>
              <div className=" w-full h-full bg-white  col-span-2 font-titleFont tracking-wide text-l text-amazon_blue text-left font-bold">
                Size
              </div>
              <div className="w-full h-full bg-white col-span-3 border-1">
                33.46" x 16.14" x 25.59"
              </div>
            </div>
            <hr></hr>
            <div>
              <h2 className="font-bold mt-2">About this item </h2>
              <ul className="list-disc">
                <li className="font-titleFont tracking-wide text-xs text-amazon_blue">
                  BUILT IN SPEAKERS & BASE I Features an integrated 2.0
                  bluetooth audio system with headrest mounted speakers to make
                  you feel like you are actually inside of the game
                </li>
                <li className="font-titleFont tracking-wide text-xs text-amazon_blue">
                  BUILT IN audio system with headrest mounted speakers to make
                  you feel like you are actually inside of the game
                </li>
                <li className="font-titleFont tracking-wide text-xs text-amazon_blue">
                  WIRELESS I Live free from wires with Wireless Bluetooth
                  Connectivity to all your compatible devices
                </li>
                <li className="font-titleFont tracking-wide text-xs text-amazon_blue">
                  PREMIUM COMFORT I The rocking design moves and reclines to
                  provide comfortable playing positions throughout the longest
                  gaming sessions
                </li>
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
                {variant.price}
              </h2>
            </div>
            <div>
              <h5>
                Delivery <span className="font-bold">Monday, October 30</span>
              </h5>
            </div>
            <div className="flex flex-row">
              <FmdGoodIcon sx={{ fontSize: 20 }} />
              <a>
                <span className=" text-teal-600 hover:text-orange-500 underline text-xs">
                  Deliver To Nghia - Đà Nẵng
                </span>
              </a>
            </div>
            <div>
              <h1 className="my-4 text-2xl text-green-900">In Stock</h1>
            </div>
            <button className="rounded-lg bg-yellow-500 py-3 my-2 hover:bg-yellow-300 duration-100">
              Add To Cart
            </button>
            <button className="rounded-lg bg-yellow-500 py-3 my-2 hover:bg-green-600 duration-100">
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
          src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/163985260/original/99b2303744d92a405c9d4ebb04da8040ecaae64e/design-high-quality-banner-for-amazon-ebay-and-you-tube.jpg"
          alt="ProductImg"
        ></img>
      </div>
      <hr></hr>
      <div className="container mx-auto h-auto text-3xl font-bold py-4">
        <h1>From the manufacturer</h1>
        <img
          className="w-full px-48 my-4 object-contain"
          src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/163985260/original/99b2303744d92a405c9d4ebb04da8040ecaae64e/design-high-quality-banner-for-amazon-ebay-and-you-tube.jpg"
          alt="ProductImg"
        ></img>
        <img
          className="w-full px-48 my-4  object-contain"
          src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/163985260/original/99b2303744d92a405c9d4ebb04da8040ecaae64e/design-high-quality-banner-for-amazon-ebay-and-you-tube.jpg"
          alt="ProductImg"
        ></img>
        <img
          className="w-full px-48 my-4  object-contain"
          src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/163985260/original/99b2303744d92a405c9d4ebb04da8040ecaae64e/design-high-quality-banner-for-amazon-ebay-and-you-tube.jpg"
          alt="ProductImg"
        ></img>
      </div>
    </div>
  );
}

export default ProductDetail;
