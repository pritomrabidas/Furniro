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
    <div className="bg-slate-50 shadow-md w-full fixed">
      <div className="container py-5 flex justify-between items-center cursor-default relative ">
        <div className="">
          <img src="logo.png" alt="" className="w-40 h-10 rounded-lg" />
        </div>
        <div className=" mx-auto">
          <ul className="flex gap-10 text-xl font-medium font-['poetsen'] cursor-pointer ">
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
              contact
            </li>
          </ul>
        </div>
        <div className="">
            <ul className="flex text-2xl gap-9 pr-10">
                <li><Link><CiUser /></Link></li>
                <li><Link><CiSearch/></Link></li>
                <li><Link><IoIosHeartEmpty/></Link></li>
                <li><Link><AiOutlineShoppingCart/></Link></li>
            </ul>
        </div>
        {close ? (
          <div className=" fixed top-0 right-0 h-screen w-full flex">
            <div className=" w-1/3 bg-gradient-to-l from-blue-600 via-blue-500 to-blue-400 right-0 fixed px-10 h-full sideMenu">
              <div className=" justify-between flex mt-10">
                <span>
                  <img
                    src="logo.png"
                    alt="pritom"
                    className="w-14 h-14 rounded-md"
                  />
                </span>
                <span>
                  <AiOutlineClose
                    onClick={() => setClose(false)}
                    className="text-2xl cursor-pointer text-gray-800"
                  />
                </span>
              </div>
              <div className="text-center">
                <ul className=" leading-[55px] text-2xl font-normal font-['lobster'] cursor-pointer text-slate-300">
                  <li className="relative before:absolute before:content:[''] before:w-full before:h-[2px] before:bg-slate-300 before:bottom-[1px] before:left-0 before:scale-0 hover:before:scale-100 before:duration-1000 before:origin-botom">
                    Home
                  </li>
                  <li className="relative before:absolute before:content:[''] before:w-full before:h-[2px] before:bg-slate-300 before:bottom-[1px] before:left-0 before:scale-0 hover:before:scale-100 before:duration-1000 before:origin-botom">
                    Shop
                  </li>
                  <li className="relative before:absolute before:content:[''] before:w-full before:h-[2px] before:bg-slate-300 before:bottom-[1px] before:left-0 before:scale-0 hover:before:scale-100 before:duration-1000 before:origin-botom">
                    About
                  </li>
                  <li className="relative before:absolute before:content:[''] before:w-full before:h-[2px] before:bg-slate-300 before:bottom-[1px] before:left-0 before:scale-0 hover:before:scale-100 before:duration-1000 before:origin-botom">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <FiAlignJustify
            onClick={HandleClose}
            className="text-2xl cursor-pointer text-gray-800 xl:hidden lg:hidden 2xl:hidden md:block sm:block block"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
