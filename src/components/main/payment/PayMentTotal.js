import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PayMentTotal = () => {
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    let total = 0;
    products.map((item) => {
      total += item.variantDto.price * item.quantity;
      return setTotalPrice(total.toFixed(2));
    });
  }, [products]);

  return (
    <>
      <div className="border border-gray-400 rounded-md">
        <div className="w-auto h-auto col-span-1 flex flex-col p-4">
          <button className="w-full font-titleFont sm:text-xs md:text-md lg:text-lg bg-gradient-to-tr bg-yellow-400 hover:bg-yellow-500 duration-200 py-1.5 rounded-xl mt-3">
            Place your order
          </button>
          <div class="text-center">
            <p className="flex gap-1 items-start sm:text-xs lg:text-sm pt-4">
              By placing your order, you agree to Amazon's privacy notice and
              conditions of use.
            </p>
            <p className="flex gap-1 items-start sm:text-xs lg:text-sm pt-2">
              You also agree to AmazonGlobal's terms and conditions.
            </p>
          </div>
          <div class="font-semibold border-t border-gray-500 my-3">
            Order Summary
          </div>
          <div class="grid grid-cols-4 gap-1 text-sm font-sans">
            <div class="col-span-2">Items (2):</div>
            <div class="col-span-2 text-end">$ 2.343.324</div>
            <div class="col-span-2">Shipping & handling:</div>
            <div class="col-span-2 text-end">$ 879.759</div>
            <div class="col-span-2"></div>
            <div class="col-span-2 text-end">
              <div class="border border-gray-300"></div>
            </div>
            <div class="col-span-2">Total before tax:</div>
            <div class="col-span-2 text-end">$ 3.223.083</div>
            <div class="col-span-2">Estimated tax to be</div>
            <div class="col-span-2 text-end"></div>
            <div class="col-span-2">collected:*</div>
            <div class="col-span-2 text-end">$ 0</div>
            <div class="col-span-2">Import Fees Deposit: </div>
            <div class="col-span-2 text-end">$ 151.903</div>
            <div class="col-span-2">Exchange rate guarantee fee: </div>
            <div class="col-span-2 text-end">$ 80.156</div>
            <div class="border border-gray-300 col-span-4"></div>
            <div class="col-span-2 text-red-600 font-bold text-lg">
              Order total:
            </div>
            <div class="col-span-2 text-end text-red-600 font-bold text-lg">
              {" "}
              $ 3.455.142
            </div>
            <div class="border border-gray-300 col-span-4"></div>
          </div>
          <div class="font-bold">Amazon Currency Converter</div>
          <div class="font-sans">Enabled - Pay in $</div>
          <div class="grid grid-cols-4 gap-4 mt-4">
            <div class="col-span-2">
              <input type="radio" />
              <span class="ml-2">$ 3,455,142</span>
            </div>
            <div class="col-span-2">
              <input type="radio" />
              <span class="ml-2">$ 3,455,142</span>
            </div>
          </div>
          <div>
            <button class="text-blue-600 text-sm font-sans hover:text-orange-500 hover:underline mt-4">
              Change card currency
            </button>
          </div>
          <div>
            <button class="text-blue-600 text-sm hover:text-orange-500 hover:underline">
              Exchange rate
            </button>
          </div>
          <div>1 USD = 24540 VND</div>

          {/* <div>
            <p className="sm:text-xs md:text-md lg:text-lg font-semibold sm:px-1 lg:px-10 py-1 flex items-center gap-2 justify-between">
              Total:{" "}
              <span className="sm:text-xs md:text-md lg:text-lg font-bold ">
                ${products.length > 0 ? totalPrice : 0}
              </span>
            </p>
          </div> */}
        </div>
        <div class="bg-gray-200 text-sm p-4 font-sans border-t border-gray-400 rounded-b-lg ">
          <div class="text-blue-600 text-sm hover:text-orange-500 hover:underline">
            What is the Amazon Currency Converter?
          </div>{" "}
          You can track your shipment and view any applicable import fees
          deposit before placing your order.{" "}
          <span class="text-blue-600 text-sm hover:text-orange-500 hover:underline">
            Learn more
          </span>{" "}
          <div class="text-blue-600 text-sm hover:text-orange-500 hover:underline">
            How are shipping costs calculated?
          </div>{" "}
          <div class="text-blue-600 text-sm hover:text-orange-500 hover:underline">
            Why didn't I qualify for free shipping?
          </div>
        </div>
      </div>
    </>
  );
};

export default PayMentTotal;
