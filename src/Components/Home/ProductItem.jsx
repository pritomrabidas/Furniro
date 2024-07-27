import { Link } from "react-router-dom";
import { CiShare2 } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
const ProductItem = ({ Image, Heading, Paragraph, Price, ThrowPrice }) => {
  return (
    <div className="bg-white  relative group ">
      <img src={Image} alt="product" className=" w-full h-80" />
      <div className=" absolute bg-[rgba(32,22,22,0.71)] z-10 w-full h-full top-0 left-0 scale-0 duration-500 delay-100 group-hover:scale-100">
        <div className="justify-center flex pt-48">
          <Link className="px-10 xl:px-12 lg:px-12 md:px-11 sm:px-10  py-3 border bg-brand text-secandari font-Montserrat rounded-sm">
            Add to cart
          </Link>
        </div>
        <div className="px-4 text-sm xl:text-base lg:text-base md:text-base sm:text-sm flex gap-5 pt-6 justify-center font-nunitoFont">
          <span className="font-semibold text-[#FFFFFF] flex gap-2">
            <CiShare2  />
            <p>Share</p>
          </span>
          <span className="font-semibold text-[#FFFFFF] flex gap-2">
            <CiShare2 />
            <p>Share</p>
          </span>
          <span className="font-semibold text-[#FFFFFF] flex gap-2">
            <IoIosHeartEmpty />
            <p>Love</p>
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-medium text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl text-navegrey font-Montserrat">
          {Heading}
        </h3>
        <p className="font-normal text-lg text-[#898989] font-nunitoFont">
          {Paragraph}
        </p>
        <div className="flex gap-4">
          <span className="font-semibold text-lg text-primary font-Montserrat">
            {Price}
          </span>
          <span className="font-normal text-base line-through text-[#B0B0B0] font-nunitoFont">
            {ThrowPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
