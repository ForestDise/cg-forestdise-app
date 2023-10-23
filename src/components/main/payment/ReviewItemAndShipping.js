import React, { useState } from "react";

function ReviewItemAndShipping() {

  return (
    <div>
      <div class="px-20 ">
          <div>
            <div class="grid grid-cols-3">
              <div class="col-span-3">
                <h2 className="text-xl font-bold font-sans">
                  <span class="pr-4">3</span>Review items and shipping
                </h2>
              </div>
            </div>
            <div class="px-8">
              <div class="border border-gray-400 rounded-md p-4 mt-4">
                <div class="font-bold text-green-700">
                  Delivery: Nov. 21, 2023
                </div>
                <div class="text-sm">Items shipped from Amazon.com</div>
                <div class="grid grid-cols-7 gap-2 pt-4">
                  <div>
                    <img src="https://m.media-amazon.com/images/I/814mI0-rkxL._AC_AA150_.jpg" />
                  </div>
                  <div class="col-span-3">
                    <div class="font-semibold">Elon Musk</div>
                    <div class="text-sm font-sans">by Isaacson, Walter</div>
                    <div class="text-red-700 font-bold ">$20.99</div>
                    <div class="bg-gray-100 border border-gray-400 rounded-md w-20 text-center hover:shadow-md">
                      <label class="text-sm ">Qty: </label>
                      <select class="bg-gray-100 " id="value" name="stt">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                    <div class="text-sm font-sans">
                      Sold by:Amazon Export Sales LLC
                    </div>
                  </div>
                  <div class="col-span-3">
                    <div class="font-bold">Choose a delivery option:</div>
                    <div class="mb-2">
                      <input type="radio" />
                      <span class="ml-3 text-green-700 font-semibold">
                        Giao nhanh
                      </span>
                      <div class="ml-6">$4.87 - Shipping</div>
                    </div>
                    <div class="mb-2">
                      <input type="radio" />
                      <span class="ml-3 text-green-700 font-semibold">
                        Tiết kiệm
                      </span>
                      <div class="ml-6">$16.51 - Shipping</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default ReviewItemAndShipping;
