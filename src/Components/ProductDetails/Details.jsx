import ProductSlide from "product-slide";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { Link } from "react-router-dom";

// const API = {
//   images: [
//     "https://i.imgur.com/QkIa5tT.jpeg",
//     "https://i.imgur.com/jb5Yu0h.jpeg",
//     "https://i.imgur.com/UlxxXyG.jpeg",
//   ],
// };
const Details = ({data}) => {
  const [selectSize, setSelectSize] = useState(null);
  const [selectColor, setSelectColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const settings = {
    direction: "vertical", // or ""
    zoom: false, // or
  };

  return (
    <section className="py-8">
      <div className="container  px-5">
        <div className="gap-16 flex xl:flex-row lg:flex-row md:flex-col flex-col  ">
          <div className="xl:w-1/2 lg:w-1/2 md:w-3/4 sm:w-4/5 w-full h-[500px] justify-center mx-auto">
            <ProductSlide settings={settings} api={data?.images} />
          </div>
          <div className="xl:w-1/2 lg:w-1/2 md:w-3/4 sm:w-4/5 w-full justify-center mx-auto">
            <h2 className="font-Opensans font-medium text-5xl">{data?.title}</h2>
            <h3 className="font-nunitoFont font-medium text-3xl text-[#9F9F9F] py-3">
              & {data?.price}
            </h3>
            <div className="flex gap-1">
              <ul className="flex gap-1.5 text-base text-[#FFC700]">
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStarHalf />
                </li>
              </ul>
              <p className="font-Popins font-normal text-sm text-[#9F9F9F] border-l-2 border-[#9F9F9F] pl-5">
                5 Customer Review
              </p>
            </div>
            <p className="font-nunitoFont font-normal text-sm text-[#9F9F9F] w-3/4 pt-4 pb-5">
              {data?.description}
            </p>
            <h4 className="font-normal font-Opensans text-sm text-[#9F9F9F] pb-2">
              Size
            </h4>
            <div className="flex gap-4 font-normal font-Popins text-[#000000] text-base">
              <label
                htmlFor="L"
                className={`${
                  selectSize === "L" ? "bg-[#B88E2F]" : "bg-[#F9F1E7]"
                }  px-3 py-1.5 rounded`}
              >
                L
                <input
                  className="hidden"
                  type="radio"
                  id="L"
                  name="sixe"
                  value="L"
                  onChange={(e) => setSelectSize(e.target.value)}
                />
              </label>
              <label
                htmlFor="XL"
                className={`${
                  selectSize === "XL" ? "bg-[#B88E2F]" : "bg-[#F9F1E7]"
                }  px-3 py-1.5 rounded`}
              >
                XL
                <input
                  className="hidden"
                  type="radio"
                  id="XL"
                  name="sixe"
                  value="XL"
                  onChange={(e) => setSelectSize(e.target.value)}
                />
              </label>
              <label
                htmlFor="XS"
                className={`${
                  selectSize === "XS" ? "bg-[#B88E2F]" : "bg-[#F9F1E7]"
                }  px-3 py-1.5 rounded`}
              >
                XS
                <input
                  className="hidden"
                  type="radio"
                  id="XS"
                  name="sixe"
                  value="XS"
                  onChange={(e) => setSelectSize(e.target.value)}
                />
              </label>
            </div>
            <h4 className="font-normal font-Opensans text-sm text-[#9F9F9F] pb-2 pt-4">
              Color
            </h4>
            <div className="flex gap-4 font-normal font-Popins text-[#000000] text-base pt-5">
              <label
                htmlFor="blue"
                className={`w-7 h-7 rounded-full ${
                  selectColor === "blue" && "scale-110"
                }`}
                style={{ background: "blue" }}
              >
                <input
                  className="hidden"
                  type="radio"
                  id="blue"
                  name="color"
                  value="blue"
                  onChange={(e) => setSelectColor(e.target.value)}
                />
              </label>
              <label
                htmlFor="black"
                className={`w-7 h-7 rounded-full ${
                  selectColor === "black" && "scale-110"
                }`}
                style={{ background: "black" }}
              >
                <input
                  className="hidden"
                  type="radio"
                  id="black"
                  name="color"
                  value="black"
                  onChange={(e) => setSelectColor(e.target.value)}
                />
              </label>
              <label
                htmlFor="orange"
                className={`w-7 h-7 rounded-full ${
                  selectColor === "orange" && "scale-110"
                }`}
                style={{ background: "orange" }}
              >
                <input
                  className="hidden"
                  type="radio"
                  id="orange"
                  name="color"
                  value="orange"
                  onChange={(e) => setSelectColor(e.target.value)}
                />
              </label>
            </div>
            <div className="flex gap-4 items-center pt-8">
              <div className="flex px-4 py-5 border rounded-xl gap-9  font-medium font-Popins text-base text-black">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  -
                </button>
                <p>{quantity}</p>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <div className="flex px-12 py-4 border border-black rounded-xl font-Raleway font-normal text-lg text-black">
                <Link to="">Add To Cart</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
