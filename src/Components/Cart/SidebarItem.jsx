import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeFromcart } from "../../reducer/ProductSlice";

const SidebarItem = ({data}) => {
  const dispatch = useDispatch()
  return (
    <div className="flex justify-between items-center pb-3 ">
      <img src={data?.images[0]} alt="cartItem" className="w-20 h-20 rounded-md" />
      <div className="w-[180px]">
        <p className="font-normal text-base text-[#000000] font-nunitoFont pb-2">{data?.title}</p>
        <p className="font-normal font-Popins text-base text-[#000000]">{data?.quantity} X <span className="text-[#B88E2F]"> {data?.AddPrice}</span></p>
      </div>
      <IoCloseSharp onClick={()=>dispatch(removeFromcart(data?.id))} className="bg-[#9F9F9F] text-xl rounded-full p-1"/>
    </div>
  )
}

export default SidebarItem
