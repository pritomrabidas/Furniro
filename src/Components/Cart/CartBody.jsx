import { useSelector } from "react-redux";
import CartBodyItem from "./CartBodyItem";
import CartButton from "./CartButton";

const CartBody = () => {
  const productList = useSelector((state) => state.cartList.product);
  const totalPrice = productList.reduce((total, product) => total + product.AddPrice, 0);
  return (
    <section>
      <div className="container mx-auto ">
        <div className="flex xl:flex-row lg:flex-col flex-col my-16 gap-16 px-5">
          <div className="xl:w-3/5 lg:w-full w-full">
            <div className="xl:px-32 lg:px-32 md:px-32 sm:px-16 px-2 py-4 justify-between flex bg-[#F9F1E7] font-normal font-Opensans text-base text-[#000000] rounded">
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </div>
            {productList.map((item) => (
              <CartBodyItem key={item.id} data={item} />
            ))}
          </div>
          <div className="xl:w-2/5 lg:w-2/5 md:w-full items-end flex xl:justify-start justify-center">
            <div className="bg-[#F9F1E7] px-16 pt-6 pb-14 rounded-lg">
              <h2 className="font-medium font-Opensans text-center text-3xl text-[#000000c6] pb-14">
                Cart Totals
              </h2>
              <div className="flex gap-12 pb-7">
                <h2 className="font-medium font-Popins text-base text-[#000000]">
                  Subtotal
                </h2>
                <p className="font-normal font-nunitoFont text-base text-[#9F9F9F]">
                  $ {totalPrice}
                </p>
              </div>
              <div className="flex gap-12 ">
                <h2 className="font-medium font-Popins text-base text-[#000000]">
                  Total
                </h2>
                <p className="font-medium font-nunitoFont text-xl text-[#B88E2F]">
                  $ {totalPrice}
                </p>
              </div>
              <div className="pt-10 justify-center flex">
                <CartButton title={"Check Out"} path="/checkout" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartBody;
