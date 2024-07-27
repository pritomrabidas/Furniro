import { Link } from "react-router-dom"


const CartButton = ({title}) => {
  return (
    <Link  className="px-8 py-2 rounded-3xl border border-[#000000] text-[#000000]">
      {title}
    </Link>
  )
}

export default CartButton
