import { HiArchiveBox } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { removeFromcart } from "../../reducer/ProductSlice";

const CartBodyItem = ({data}) => {
  const dispatch = useDispatch()
  return (
    <div className="items-center flex pt-12 font-normal font-nunitoFont xl:text-base lg:text-base md:text-base sm:text-base text-xs text-[#9F9F9F] justify-between">
            <td className="items-center flex xl:gap-2 lg:gap-2 md:gap-2 sm:gap-2 gap-0">
              <td>
                <img
                  src={data?.images}
                  alt="cartItem"
                  className="xl:w-20 w-10 sm:w-20 md:w-24 lg:w-24 h-10 sm:h-20  md:h-28 lg:h-24 xl:h-20 rounded-md"
                />
              </td>
              <td className="w-14">{data?.title}</td>
            </td>
            <td className="xl:pl-10 lg:pl-24 md:pl-10 sm:pl-12 pl-2">$ {data?.price}</td>
            <td className="xl:pl-16 lg:pl-40 md:pl-16 sm:pl-20 pl-3 ">{data?.quantity}</td>
            <td className="xl:pl-28 lg:pl-44 md:pl-28 sm:pl-20 pl-4 ">$ {data?.AddPrice}</td>
            <td className="xl:pl-12 lg:pl-12 md:pl-12 sm:pl-8 pl-4">
              <HiArchiveBox onClick={()=>dispatch(removeFromcart(data?.id))} className="text-xl text-secandari" />
            </td>
          </div>
  )
}

export default CartBodyItem
