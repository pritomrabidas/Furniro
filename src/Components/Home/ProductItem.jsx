import { Link } from "react-router-dom";
import { CiShare2 } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
const ProductItem = ({ Image, Heading, Paragraph, Price, ThrowPrice }) => {
  return (
    <div className="bg-white  relative group">
      <img src={Image} alt="product" className=" w-full h-80" />
      <div className=" absolute bg-[rgba(32,22,22,0.71)] z-10 w-full h-full top-0 left-0 scale-0 duration-500 delay-100 group-hover:scale-100">
        <div className="justify-center flex pt-48">
          <Link className="px-12 py-3 border bg-brand text-secandari rounded-sm">
            Add to cart
          </Link>
        </div>
        <div className="px-4 flex gap-5 pt-6">
          <span className="font-semibold text-base font-['poppins'] text-[#FFFFFF] flex gap-2">
            <CiShare2  />
            <p>Share</p>
          </span>
          <span className="font-semibold tex-base font-['poppins'] text-[#FFFFFF] flex gap-2">
            <CiShare2 />
            <p>Share</p>
          </span>
          <span className="font-semibold tex-base font-['poppins'] text-[#FFFFFF] flex gap-2">
            <IoIosHeartEmpty />
            <p>Love</p>
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-3xl font-['poppins'] text-navegrey">
          {Heading}
        </h3>
        <p className="font-normal text-lg font-['poppins'] text-[#898989]">
          {Paragraph}
        </p>
        <div className="flex gap-4">
          <span className="font-semibold text-lg font-['poppins'] text-primary">
            {Price}
          </span>
          <span className="font-normal text-base font-['poppins'] line-through text-[#B0B0B0]">
            {ThrowPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
