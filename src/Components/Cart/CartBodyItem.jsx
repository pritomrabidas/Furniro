import { HiArchiveBox } from "react-icons/hi2";

const CartBodyItem = () => {
  return (
    <div className="items-center flex pt-12 font-normal font-nunitoFont text-base text-[#9F9F9F]">
            <td className="items-center flex gap-2">
              <td>
                <img
                  src="cartItem-1.png"
                  alt="cartItem"
                  className="w-28 h-28"
                />
              </td>
              <td>Asgaard sofa</td>
            </td>
            <td className="pl-10">Rs. 250,000.00</td>
            <td className="pl-16">1</td>
            <td className="pl-28">Rs. 250,000.00</td>
            <td className="pl-12">
              <HiArchiveBox className="text-xl text-secandari" />
            </td>
          </div>
  )
}

export default CartBodyItem
