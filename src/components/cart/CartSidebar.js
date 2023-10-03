import StarIcon from "@mui/icons-material/Star";
import { useDispatch} from "react-redux";
import {moveToCart} from "../../features/cart/cartSlice";


const CartSidebar = (props) => {
  const dispatch = useDispatch();
    const {empties} = props;
    return (
      <>
        <div class="bg-white rounded-lg">
          <h2 class="p-4 font-semibold">
            Customers Who Bought Items in Your Recent History Also Bought
          </h2>
          {empties.map((item) => (
            <div class="max-w-md mx-auto bg-white  overflow-hidden md:max-w-2xl rounded-lg">
              <div class="md:flex p-2">
                <div class="md:shrink-0 ">
                  <img
                    class="h-auto w-full object-cover md:h-auto md:w-20 p-2"
                    src={item.image}
                    alt="Modern building architecture"
                  />
                </div>

                <div class="p-1">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {item.title.substring(0, 27)}
                    {item.title.length > 30 ? "..." : ""}
                  </div>
                  <p class="mt-2 text-slate-500">
                    ${item.price.toFixed(2)}
                    <br />
                    <div class="text-xs">{item.category}</div>
                    <div className="text-yellow-500 text-xs">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
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
                      className="w-auto font-titleFont  text-xs bg-gradient-to-tr
                    from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400
                    border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl
                    active:from-yellow-400 active:to-yellow-500 duration-200 rounded-lg"
                    >
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
}
 
export default CartSidebar;