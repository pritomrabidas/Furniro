import { FaRegWindowClose } from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import CartButton from "./CartButton";
import { useSelector } from "react-redux";

const CartSlide = ({HandleSideBar}) => {
  const productList = useSelector((state)=>state.cartList.product)
  const totalPrice = productList.reduce((total,product)=>{
   return total + product.AddPrice
  },0)
  
  
  return (
    <section className=" fixed top-0 right-0 bg-[rgba(0,0,0,0.53)] w-full h-full z-50 duration-1000 delay-1000 ">
      <div className="bg-brand h-[600px] xl:w-[30%] lg:w-[35%] md:w-[45%] sm:w-[60%] w-[95%] absolute right-0 top-4 p-8 rounded-l-3xl">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-xl font-Raleway text-[#000000]">Shopping Cart</h3>
        <h3><FaRegWindowClose onClick={()=>HandleSideBar(false)} className="text-xl rounded"/></h3>
      </div>
      <p className="w-4/5 h-[1px] bg-[#D9D9D9] mt-7 mb-10"></p>
      {
        productList.length > 0
        ?
      <>
      <div className=" h-[210px] overflow-y-scroll pr-2"> 
        {
          productList.map((item)=>(
            <SidebarItem key={item.id} data={item}/>

          ))
        }
      </div>
      <div className="flex justify-between pt-28">
        <p className="font-normal font-Opensans text-base text-[#000000]">Subtotal</p>
        <p className="font-normal font-Opensans text-base text-[#B88E2F]">Rs. {totalPrice}</p>
      </div>
      </>:
      <p className="text-center font-nunitoFont text-xl">
        There are no items in this cart
      </p>
      }
      <div className="w-full h-[1px] bg-[#D9D9D9] mt-7 mb-7"></div>
      <div className="flex justify-between">
        <CartButton title={"Cart"} path="/cart"/>
        <CartButton title={"Checkout"} path="/checkout"/>
      </div>
      </div>
    </section>
  )
}

export default CartSlide
