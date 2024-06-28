// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const Explore = () => {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  // };
  return (
    <div className="bg-[#FCF8F3]">
      <div className="container py-11 flex items-center">
        <div className="w-2/5 font-['poppins']">
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
        {/* <div className="w-3/5 flex">
          <Slider {...settings}>
            <div>
              <img src="slide.png" alt="" className="w-full" />
            </div>
          </Slider>
        </div> */}
      </div>
    </div>
  );
};

export default Explore;
