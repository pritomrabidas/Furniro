import Breadcrumb from "../Breadcrumb";

const Banner = () => {
  return (
    <section className="bg-[url('/ShopBanner.png')] justify-center mx-auto w-full flex py-32 xl:py-40 lg:py-36 md:py-32 sm:py-32">
      <div className="container mx-auto font-Popins">
        <h3 className="font-medium text-5xl text-center ">Shop</h3>
        <Breadcrumb/>
      </div>
    </section>
  );
};

export default Banner;
