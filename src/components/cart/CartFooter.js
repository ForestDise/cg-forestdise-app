const CartFooter = () => {
    return (
      <>
        <div class="bg-red-400 ">
          <div class="grid grid-cols-6 gap-4">
            <div class="col-start-2 col-span-4 bg-amber-400">01</div>
            <div class="col-start-1 col-end-3 bg-blue-400">02</div>
            <div class="col-end-7 col-span-2 bg-green-400">03</div>
            <div class="col-start-1 col-end-7 bg-gray-400">04</div>
          </div>
        </div>
        <div class="bg-lime-400 ">07</div>
      </>
    );
}
 
export default CartFooter;