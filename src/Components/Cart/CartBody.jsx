import CartBodyItem from "./CartBodyItem";
import CartButton from "./CartButton";

const CartBody = () => {
  return (
    <section>
      <div className="container mx-auto flex my-16 gap-16 px-5">
        <div className="w-3/5">
          <div className=" px-32 py-4 justify-between flex bg-[#F9F1E7] font-normal font-Opensans text-base text-[#000000] rounded">
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </div>
          <CartBodyItem/>
          <CartBodyItem/>
        </div>
        <div className="2/5 items-end flex">
          <div className="bg-[#F9F1E7] px-16 pt-6 pb-14 rounded-lg">
            <h2 className="font-medium font-Opensans text-center text-3xl text-[#000000c6] pb-14">
              Cart Totals
            </h2>
            <div className="flex gap-12 pb-7">
              <h2 className="font-medium font-Popins text-base text-[#000000]">Subtotal</h2>
              <p className="font-normal font-nunitoFont text-base text-[#9F9F9F]">Rs. 250,000.00</p>
            </div>
            <div className="flex gap-12 ">
              <h2 className="font-medium font-Popins text-base text-[#000000]">Total</h2>
              <p className="font-medium font-nunitoFont text-xl text-[#B88E2F]">Rs. 250,000.00</p>
            </div>
            <div className="pt-10 justify-center flex">
            <CartButton title={"Check Out"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartBody;
