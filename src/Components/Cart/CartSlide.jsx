import { FaRegWindowClose } from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import CartButton from "./CartButton";

const CartSlide = ({HandleSideBar}) => {
  return (
    <section className=" fixed top-0 right-0 bg-[rgba(0,0,0,0.53)] w-full h-full z-50 duration-1000 delay-1000">
      <div className="bg-brand h-[600px] w-[30%] absolute right-0 top-4 p-8 rounded-l-3xl">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-xl font-Raleway text-[#000000]">Shopping Cart</h3>
        <h3><FaRegWindowClose onClick={()=>HandleSideBar(false)} className="text-xl rounded"/></h3>
      </div>
      <p className="w-4/5 h-[1px] bg-[#D9D9D9] mt-7 mb-10"></p>
      <div className=" h-[210px] overflow-y-scroll pr-2"> 
        <SidebarItem Name={"Asgaard sofa"} Price={"Rs. 250,000.00"}/>
        <SidebarItem  Name={"Casaliving Wood"} Price={"Rs. 270,000.000"}/>
      </div>
      <div className="flex justify-between pt-28">
        <p className="font-normal font-Opensans text-base text-[#000000]">Subtotal</p>
        <p className="font-normal font-Opensans text-base text-[#B88E2F]">Rs. 520,000.00</p>
      </div>
      <div className="w-full h-[1px] bg-[#D9D9D9] mt-7 mb-7"></div>
      <div className="flex justify-between">
        <CartButton title={"Cart"} path="/cart"/>
        <CartButton title={"Checkout"}/>
      </div>
      </div>
    </section>
  )
}

export default CartSlide
