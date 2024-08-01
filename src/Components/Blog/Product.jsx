import { FaHeadSideCough } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ Image,Heading }) => {
  return (
    <div className="pb-10">
      <img src={Image} alt="blog" className="w-full h-[500px]" />
      <div className="flex pt-4 gap-9">
        <ul className="flex text-[#9F9F9F] gap-2 items-center font-Popins font-normal text-lg">
          <li>
            <FaHeadSideCough />
          </li>
          <li className="">Admin</li>
        </ul>
        <ul className="flex text-[#9F9F9F] gap-2 items-center font-Popins font-normal text-lg">
          <li>
            <MdDateRange />
          </li>
          <li className="">14 Oct 2022</li>
        </ul>
        <ul className="flex text-[#9F9F9F] gap-2 items-center font-Popins font-normal text-lg">
          <li>
            <FaTag />
          </li>
          <li className="">Wood</li>
        </ul>
      </div>
      <h2 className="font-Montserrat font-medium text-3xl text-black py-4">
        {Heading}
      </h2>
      <p className="font-nunitoFont font-normal tex-base text-[#9F9F9F] pb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae
        ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
        aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus
        imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a
        iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.
        Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et
        ultrices neque ornare aenean euismod elementum.
      </p>
      <Link className="font-Popins font-normal tex-base text-[#000000] pb-1.5 border-b border-black">Read More</Link>
    </div>
  );
};

export default Product;
