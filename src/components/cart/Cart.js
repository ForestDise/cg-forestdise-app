import CartFooter from "./CartFooter";
import CartHotItems from "./CartHotItems";
import CartLine from "./CartLine";
import CartSaveForLater from "./CartSaveForLater";

const Cart = () => {
  
  return (
    <div className="w-full bg-gray-100 p-4">
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-3">
          <div class="grid gap-4">
            <CartLine/>
            <CartSaveForLater/>
          </div>
        </div>
        <div>
          <div class="col-span-3 ">
              <CartHotItems/>
          </div>
        </div>
        <div class="col-span-4 bg-amber-400">
          <CartFooter/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
