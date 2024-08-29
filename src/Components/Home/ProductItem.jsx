// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { addtoCart } from "../../reducer/ProductSlice";
const ProductItem = ({ data }) => {
  
  // const dispatch = useDispatch()
  // const HandleAddToCart = ()=>{
  //   data ={
  //     ...data,
  //       quantity:1,
  //       AddPrice:data?.price
  //   }
  //   dispatch(addtoCart(data))
  // }
  
  return (
    <Link to={`/shop/ ${data?.id}`} className="relative group ">
      <div className="bg-white  ">
        <img src={data?.images[0]} alt="product" className=" w-full h-72" />
        <div className=" absolute justify-center items-center  flex bg-[rgba(34,31,31,0.39)] z-10 w-full h-full top-0 left-0 scale-0 duration-500 delay-100 group-hover:scale-100">
          <div className="">
            <p
            // onClick={HandleAddToCart}
            
              className="px-10 xl:px-12 lg:px-12 md:px-11 sm:px-10  py-3 border bg-brand text-secandari font-Montserrat rounded-sm cursor-pointer"
            >
              Add to cart
            </p>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div >
          <h3 className="font-semibold text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl text-navegrey font-Montserrat">
            {data?.title}
          </h3>
          <p className="font-normal text-lg text-[#898989] font-nunitoFont">
            {data?.description.substring(0, 50)}...
          </p>
          <div className="flex justify-between">
            <span className="font-semibold text-lg text-primary font-Montserrat">
              $ {data?.price}
            </span>
            <span className="font-normal text-base line-through text-[#B0B0B0] font-nunitoFont">
              $100
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
