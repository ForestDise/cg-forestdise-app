import { motion } from "framer-motion";
import {
  deleteItem,
  resetCart,
  decrementQuantity,
  incrementQuantity,
  saveForLater
} from "../../features/cart/cartSlice";
import { emptyCart } from "../../assets/index";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const CartContent = () => {
    const dispatch = useDispatch();
    const { products} = useSelector((state) => state.cart);

  return (
    <>
      <div class="bg-red-500">
        <div className="w-full h-full bg-white px-4 col-span-4 pb-3">
          {products.length > 0 ? (
            <div className="font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3">
              <h2 className="sm:text-md lg:text-3x1 font-medium">
                Shopping Cart
              </h2>
              <h4 className="sm:text-md lg:text-xl font-normal">Subtotal</h4>
            </div>
          ) : (
            <></>
          )}

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
                    <h2 className="font-semibold md:text-lg sm:text-sm lg:text-lg">
                      {item.title}
                    </h2>
                    <p className="sm:text-xs md:text-md lg:text-sm">
                      {item.description.substring(0, 200)}
                    </p>
                    <p className="md:text-lg sm:text-xs lg:text-lg">
                      Unit Price{" "}
                      <span className="font-semibold">${item.price}</span>
                    </p>
                    <div className="bg-[#F0F2F2] md:text-lg sm:text-xs lg:text-lg flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md">
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
                      className="bg-white p-1.5 sm:px-2 lg:px-4 border border-gray-300  py-1 rounded-lg md:text-md sm:text-xs lg:text-sm mt-2 hover:bg-gray-100 shadow-md duration-300"
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
                        ) && dispatch(deleteItem(item.id))
                      }
                      className="sm:px-1 lg:px-4 md:text-sm sm:text-xs lg:text-md text-cyan-600 hover:underline"
                    >
                      Save for later
                    </button>
                  </div>
                  <div>
                    <p className="md:text-md sm:text-sm lg:text-lg font-titleFont font-semibold">
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
                className="sm:px-4 lg:px-8 sm:py-1 lg:py-2 border border-gray-300 bg-white hover:bg-gray-100 text-md rounded-lg font-titleFont md:text-md sm:text-sm lg:text-lg shadow-md active:bg-teal-100 tracking-wide"
              >
                Clear Cart
              </button>
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
              <div className="sm:w-36 md:w-52 lg:w-96 sm:p-2 lg:p-4 bg-white flex flex-col items-center rounded-md shadow-lg">
                <h1 className="font-titleFont sm:text-xs md:text-lg lg:text-xl font-bold">
                  Your Cart feels lonely.
                </h1>
                <p className="sm:text-xs md:text-sm lg:text-md text-center">
                  Your Shopping cart lives to serve. Give it purpose - fill it
                  with books, electronics, videos, etc. and make it happy.
                </p>
                <Link to="/">
                  <button className="mt-6 w-auto bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-8 py-2 font-titleFont font-semibold sm:text-xs dm:text-md lg:text-lg">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartContent;
