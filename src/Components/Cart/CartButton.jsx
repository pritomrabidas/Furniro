import { Link } from "react-router-dom"


const CartButton = ({title,path,HandleSideBar}) => {
  return (
    <Link onClick={()=>HandleSideBar(false)} to={path}  className="px-8 py-2 rounded-2xl border border-[#000000] text-[#000000]">
      {title}
    </Link>
  )
}

export default CartButton
