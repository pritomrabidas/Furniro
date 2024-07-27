import { IoCloseSharp } from "react-icons/io5";

const SidebarItem = ({Name,Price}) => {
  return (
    <div className="flex justify-between items-center pb-3">
      <img src="cartItem-1.png" alt="cartItem" className="w-24 h-24" />
      <div >
        <p className="font-normal text-base text-[#000000] font-nunitoFont pb-2">{Name}</p>
        <p className="font-normal font-Popins text-base text-[#000000]">1 X <span className="text-[#B88E2F]"> {Price}</span></p>
      </div>
      <IoCloseSharp className="bg-[#9F9F9F] text-xl rounded-full p-1"/>
    </div>
  )
}

export default SidebarItem
