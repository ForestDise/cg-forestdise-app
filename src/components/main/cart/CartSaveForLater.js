import { addToCart, deleteEmpties } from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartSaveForLater = () => {
     const dispatch = useDispatch();
     const { empties } = useSelector((state) => state.cart);

  return (
    <>
      <div class="bg-lime-400">
        <div className="w-full h-full bg-white px-4 col-span-4 pb-1">
          <div className="font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3">
            <h2 className="text-3x1 font-medium">
              {empties.length > 0 ? (
                <div>Saved for later ({empties.length} items)</div>
              ) : (
                <div>No items saved for later</div>
              )}
            </h2>
          </div>
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  xl:gap-4 py-4">
            {empties.map((item) => (
              <div
                class="grid grid-cols-4 gap-1 bg-white border-[1px] border-gray-200 hover:border-transparent shadow-none hover:shadow-testShadow duration-200"
                key={item.id}
              >
                <div class=" col-span-4 px-3">
                  <div className="text-sm italic text-gray-500 text-right">
                    {item.category}
                  </div>
                </div>
                <div class=" col-span-4">
                  <div className="w-full h-auto flex items-center justify-center relative group">
                    <img
                      className="w-52 h-44 object-contain"
                      src={item.image}
                      alt="ProductImg"
                    />
                  </div>
                </div>
                <div class=" col-span-4 px-4 h-12">
                  <div className="flex items-center justify-between  ">
                    <h2
                      className="font-titleFont tracking-wide text-md text-amazon_blue
                          font-medium alain-top"
                    >
                      {item.title.substring(0, 45)}
                      {item.title.length > 45 ? "..." : ""}
                    </h2>
                  </div>
                </div>
                <div class=" col-span-4 px-4">
                  <p className="text-md font-semibold">${item.price}</p>
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: item.id,
                          title: item.title,
                          description: item.description,
                          price: item.price,
                          category: item.category,
                          image: item.image,
                          quantity: 1,
                        })
                      ) && dispatch(deleteEmpties(item.id))
                    }
                    className="w-full font-titleFont  text-base 
                    border hover:bg-gray-100 shadow-md
                  border-gray-300 
                    duration-200 py-1.5 rounded-md mt-1"
                  >
                    Move to Cart
                  </button>
                  <button
                    onClick={() => dispatch(deleteEmpties(item.id))}
                    className="text-sm text-cyan-600 hover:underline mt-3"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSaveForLater;
