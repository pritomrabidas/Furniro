import { FiAlignJustify } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [close, setClose] = useState(false);
  const [home, setHome] = useState(false);
  const [shop, setShop] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);

  const HandleClose = () => {
    setClose(true);
  };
  const HandleHome = () => {
    setHome(true);
    setShop("");
    setAbout("");
    setContact("");
  };
  const HandleShop = () => {
    setShop(true);
    setHome("");
    setAbout("");
    setContact("");
  };
  const HandleAbout = () => {
    setAbout(true);
    setHome("");
    setShop("")
    setContact("");
  };
  const HandleContact = () => {
    setContact(true);
    setHome("");
    setShop("")
    setAbout("");
  };

  return (
    <div className="bg-slate-50 shadow-sm w-full fixed z-20">
      <div className="container py-5 px-2 flex justify-between items-center cursor-default relative ">
        <div className="">
          <img src="logo.png" alt="" className="w-28 xl:w-40 lg:w-36 md:w-32 sm:w-28 h-7 xl:h-10 lg:h-9 md:h-8 sm:h-7 rounded-lg" />
        </div>
        <div className=" mx-auto  xl:block lg:block md:hidden sm:hidden hidden">
          <ul className="flex gap-10 xl:gap-10 lg:gap-9 text-xl xl:text-xl lg:text-[18px] font-medium font-['poetsen'] cursor-pointer">
            <Link to="/">
              <li
                onClick={HandleHome}
                className={`${home ? "text-blue-500" : "text-slate-800"}`}
              >
                Home
              </li>
            </Link>
            <li
              onClick={HandleShop}
              className={`${shop ? "text-blue-500" : "text-slate-800"}`}
            >
              Shop
            </li>
            <li
              onClick={HandleAbout}
              className={`${about ? "text-blue-500" : "text-slate-800"}`}
            >
              About
            </li>
            <li
              onClick={HandleContact}
              className={`${contact ? "text-blue-500" : "text-slate-800"}`}
            >
              Contact
            </li>
          </ul>
        </div>
        <div className=" md:justify-center sm:justify-center justify-center xl:justify-end lg:justify-end">
            <ul className="flex xl:flex text-lg xl:text-2xl lg:text-[22px] md:text-xl sm:text-lg gap-8 xl:gap-9 lg:gap-8 md:gap-8 sm:gap-8 pr-10 xl:pr-10">
                <li><Link><CiUser /></Link></li>
                <li><Link><CiSearch/></Link></li>
                <li><Link><IoIosHeartEmpty/></Link></li>
                <li><Link><AiOutlineShoppingCart/></Link></li>
            </ul>
        </div>
        {close ? (
          <div className=" fixed top-0 right-0 h-screen w-full flex">
            <div className=" w-3/4 bg-slate-50 right-0 fixed px-10 h-full sideMenu">
              <div className=" justify-between flex mt-10">
                <span>
                  <img
                    src="logo.png"
                    alt="pritom"
                    className="md:w-28 sm:w-28 w-24 h-6 md:h-7 sm:h-7 rounded-md"
                  />
                </span>
                <span>
                  <AiOutlineClose
                    onClick={() => setClose(false)}
                    className="md:text-xl sm:text-xl cursor-pointer text-gray-800"
                  />
                </span>
              </div>
              <div className="text-center">
                <ul className=" md:leading-[100px] sm:leading-[100px] leading-[80px] md:text-2xl sm:text-xl text-[18px] font-normal font-['lobster'] cursor-pointer text-slate-950">
                  <li >
                    Home
                  </li>
                  <li >
                    Shop
                  </li>
                  <li>
                    About
                  </li>
                  <li>
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <FiAlignJustify
            onClick={HandleClose}
            className="md:text-2xl sm:text-2xl text-2xl cursor-pointer text-gray-800 xl:hidden lg:hidden 2xl:hidden md:block sm:block block"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
