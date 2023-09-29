import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";
import {
  deleteItem,
  resetCart,
  decrementQuantity,
  incrementQuantity,
  saveForLater,
  moveToCart,
  deleteEmpties,
} from "../features/cart/cartSlice";
import { emptyCart } from "../assets/index";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const empties = useSelector((state) => state.cart.empties);
  const [totalPrice, setTotalPrice] = useState("");
  useEffect(() => {
    let total = 0;
    products.map((item) => {
      total += item.price * item.quantity;
      return setTotalPrice(total.toFixed(2));
    });
  }, [products,empties]);

  return (
    <>
      {products.length > 0 || empties.length > 0 ? (
        <div className="w-full bg-gray-100 p-4">
          <div className="container mx-auto h-auto grid grid-cols-5 gap-8">
            <div className="w-full h-full bg-white px-4 col-span-4 pb-6">
              <div className="font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3">
                {products.length > 0 ? (
                  <>
                    <h2 className="text-3x1 font-medium">Shopping Cart</h2>
                    <h4 className="text-xl font-normal">Subtotal</h4>
                  </>
                ) : (
                  <div className="text-3x1 font-medium">
                    Your Amazon Cart is empty.
                  </div>
                )}
              </div>
              <div>
                {products.map((item) => (
                  <div
                    key={item.id}
                    className="w-full border-b-[1px] border-b-gray-300 p-4 flex items-center gap-6"
                  >
                    <div className="w-full flex items-center justify-between gap-6">
                      <div className="w-1/5">
                        <img
                          className="w-full h-44 object-contain"
                          src={item.image}
                          alt="ProductImg"
                        />
                      </div>
                      <div className="w-4/5">
                        <h2 className="font-semibold text-lg">{item.title}</h2>
                        <p className="text-sm">
                          {item.description.substring(0, 200)}
                        </p>
                        <p className="text-base">
                          Unit Price{" "}
                          <span className="font-semibold">${item.price}</span>
                        </p>
                        <div className="bg-[#F0F2F2] flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md">
                          <p>Qty:</p>
                          <p
                            onClick={() => dispatch(decrementQuantity(item.id))}
                            className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
                          >
                            -
                          </p>
                          <p>{item.quantity}</p>
                          <p
                            onClick={() => dispatch(incrementQuantity(item.id))}
                            className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
                          >
                            +
                          </p>
                        </div>
                        <button
                          onClick={() => dispatch(deleteItem(item.id))}
                          className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
                        >
                          Delete Item
                        </button>
                        <button
                          onClick={() =>
                            dispatch(
                              saveForLater({
                                id: item.id,
                                title: item.title,
                                description: item.description,
                                price: item.price,
                                category: item.category,
                                image: item.image,
                                quantity: 1,
                              })
                            )
                          }
                          className="px-4 text-sm text-cyan-600"
                        >
                          Save for later
                        </button>
                      </div>
                      <div>
                        <p className="text-lg font-titleFont font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {products.length > 0 ? (
                <div className="w-full py-2">
                  <button
                    onClick={() => dispatch(resetCart())}
                    className="px-10 py-2 bg-red-500 hover:bg-red-600 active:bg-red-500 text-white rounded-lg font-titleFont font-semibold text-lg tracking-wide"
                  >
                    Clear Cart
                  </button>
                </div>
              ) : (
                <div className="text-sm p-7">
                  There are ({empties.length} items) has been moved to Saved for
                  Later.
                </div>
              )}
            </div>

            <div className="w-full h-52 bg-white col-span-1 flex flex-col justify-center items-center p-4">
              <div>
                <p className="flex gap-2 items-start text-sm">
                  <span>
                    <CheckCircleIcon className="bg-white text-green-500 rounded-full" />
                  </span>{" "}
                  you order quantifies for Free Shopping Choose this option at
                  checkout, See details...
                </p>
              </div>
              <div>
                <p className="font-semibold px-10 py-1 flex items-center gap-2 justify-between">
                  Total:{" "}
                  <span className="text-lg font-bold">${totalPrice}</span>
                </p>
              </div>
              <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
                Proceed to Pay
              </button>
            </div>

            <div className="w-full h-full bg-white px-4 col-span-4 pb-8">
              <div className="font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3">
                <h2 className="text-3x1 font-medium">
                  {empties.length > 0 ? (
                    <div>Saved for later ({empties.length} items)</div>
                  ) : (
                    <div>No items saved for later</div>
                  )}
                </h2>
              </div>
              <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10 p-4">
                {empties.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white h-auto border-[1px] border-gray-200 py-8 z-30
        hover:border-transparent shadow-none hover:shadow-testShadow duration-200 flex
        flex-col gap-4 relative "
                  >
                    <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
                      {item.category}
                    </span>
                    <div
                      className="w-full h-auto flex items-center justify-center relative
          group"
                    >
                      <img
                        className="w-52 h-44 object-contain"
                        src={item.image}
                        alt="ProductImg"
                      ></img>
                    </div>
                    <div className="px-4 z-10 bg-white">
                      <div className="flex items-center justify-between">
                        <h2
                          className="font-titleFont tracking-wide text-md text-amazon_blue
              font-medium"
                        >
                          {item.title.substring(0, 45)}
                          {item.title.length > 45 ? "..." : ""}
                        </h2>
                      </div>
                      <div>
                        <div>
                          <p className="text-sm text-gray-600 font-semibold">
                            ${item.price}
                          </p>
                        </div>
                      </div>
                      <div className="">
                        <button
                          onClick={() =>
                            dispatch(
                              moveToCart({
                                id: item.id,
                                title: item.title,
                                description: item.description,
                                price: item.price,
                                category: item.category,
                                image: item.image,
                                quantity: 1,
                              })
                            )
                          }
                          className="w-full font-titleFont font-medium text-base bg-gradient-to-tr
            from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400
            border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl
            active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3"
                        >
                          Move to Cart
                        </button>
                        <button
                          onClick={() => dispatch(deleteEmpties(item.id))}
                          className="pt-4 text-sm text-cyan-600"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center items-center gap-4 py-10"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCartImg"
            />
          </div>
          <div className="w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/">
              <button className="mt-6 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-8 py-2 font-titleFont font-semibold text-lg">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Cart;
