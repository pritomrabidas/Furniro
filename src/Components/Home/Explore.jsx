import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from "./NextArrow";
const Explore = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <span></span>,
  };
  return (
    <section className="bg-[#FCF8F3] explore">
      <div className="container py-11 flex items-center">
        <div className="w-2/5 font-Popins">
          <h2 className="font-bold text-4xl text-navegrey w-[400px]">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="font-medium text-base text-[#616161] w-[400px] pt-2 pb-8">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button className=" border py-3 px-9 text-base font-semibold text-brand bg-secandari">
            Explore More
          </button>
        </div>
        <div className="w-3/5">
          <Slider {...settings}>
            <div className="slide_items">
              <img src="furniture-1.png" className="w-full h-full" alt="" />
            </div>
            <div className="slide_items">
              <img src="furniture-2.png" className="w-full h-full" alt="" />
            </div>
            <div className="slide_items">
              <img src="furniture-3.png" className="w-full h-full" alt="" />
            </div>
          </Slider>
  
        </div>
      </div>
    </section>
  );
};

export default Explore;
