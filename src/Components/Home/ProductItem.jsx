import { Link } from "react-router-dom";
const ProductItem = ({ data }) => {
  return (
    <div className="">
      <div className="bg-white  relative group ">
        <img src={data?.images[0]} alt="product" className=" w-full h-80" />
        <div className=" absolute bg-[rgba(32,22,22,0.71)] z-10 w-full h-full top-0 left-0 scale-0 duration-500 delay-100 group-hover:scale-100">
          <div className="justify-center flex m-auto pt-32">
            <Link
              to="/cart"
              className="px-10 xl:px-12 lg:px-12 md:px-11 sm:px-10  py-3 border bg-brand text-secandari font-Montserrat rounded-sm"
            >
              Add to cart
            </Link>
          </div>
        </div>
      </div>
      <div className="p-5">
        <Link to={`/shop/ ${data?.id}`}>
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
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
