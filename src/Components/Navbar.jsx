import { FiAlignJustify } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartSlide from "./Cart/CartSlide";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [close, setClose] = useState(false);
  const [home, setHome] = useState(false);
  const [shop, setShop] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [sideCart, setsideCart] = useState(false);

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
    setShop("");
    setContact("");
  };
  const HandleContact = () => {
    setContact(true);
    setHome("");
    setShop("");
    setAbout("");
  };
  const HandleSideBar = (result) => {
    setsideCart(result);
  };
  const productList = useSelector((state) => state.cartList.product);
  return (
    <>
      <nav className="bg-slate-50 shadow-sm w-full fixed z-20 font-Popins">
        <div className="container  py-5 px-2 flex justify-between items-center cursor-default relative font-Montserrat">
          <div className="">
            <img
              src="/logo.png"
              alt=""
              className="w-32 xl:w-44 lg:w-40 md:w-36 sm:w-32 h-8 xl:h-11 lg:h-10 md:h-9 sm:h-8 rounded-lg"
            />
          </div>
          <div className=" mx-auto  xl:block lg:block md:hidden sm:hidden hidden">
            <ul className="flex gap-10 xl:gap-10 lg:gap-9 text-xl xl:text-2xl lg:text-[22px] font-normal  cursor-pointer">
              <Link to="/">
                <li
                  onClick={HandleHome}
                  className={`${home ? "text-blue-500" : "text-slate-800"}`}
                >
                  Home
                </li>
              </Link>
              <Link to="/shop">
                <li
                  onClick={HandleShop}
                  className={`${shop ? "text-blue-500" : "text-slate-800"}`}
                >
                  Shop
                </li>
              </Link>
              <li
                onClick={HandleAbout}
                className={`${about ? "text-blue-500" : "text-slate-800"}`}
              >
                About
              </li>
              <Link to="/contact">
                <li
                  onClick={HandleContact}
                  className={`${contact ? "text-blue-500" : "text-slate-800"}`}
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className=" md:justify-center sm:justify-center justify-center xl:justify-end lg:justify-end">
            <ul className="flex xl:flex text-xl xl:text-3xl lg:text-[28px] md:text-2xl sm:text-xl gap-4 xl:gap-9 lg:gap-9 md:gap-9 sm:gap-8  pr-10 cursor-pointer">
              <li>
                <div className="border rounded-md flex py-1 px-2 items-center">
                  <input type="text" placeholder="Input a Search" className="w-28 sm:w-48 md:w-48 lg:w-48 xl:w-48 h-6 px-4 text-xs sm:text-sm lg:text-sm md:text-sm xl:text-sm outline-none rounded" />
                  <CiSearch className="text-xs sm:text-xl md:text-xl lg:text-xl xl:text-xl mx-0 sm:mx-1 md:mx-1 lg:mx-1 xl:text-1" />
                </div>
              </li>
              <li className="relative" onClick={() => setsideCart(true)}>
                <AiOutlineShoppingCart />
                <span className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#B88E2F] text-white text-sm text-center m-auto items-center">
                  {productList.length}
                </span>
              </li>
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
                  <ul className=" md:leading-[100px] sm:leading-[100px] leading-[80px] md:text-2xl sm:text-xl text-[18px] font-normal cursor-pointer text-slate-950 flex-col flex">
                    <Link to="/" onClick={() => setClose(false)}>
                      Home
                    </Link>
                    <Link to="/shop" onClick={() => setClose(false)}>
                      Shop
                    </Link>
                    <Link to="" onClick={() => setClose(false)}>
                      About
                    </Link>
                    <Link to="/contact" onClick={() => setClose(false)}>
                      Contact
                    </Link>
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
      </nav>
      {sideCart && <CartSlide HandleSideBar={HandleSideBar} />}
    </>
  );
};

export default Navbar;
