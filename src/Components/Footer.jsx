const Footer = () => {
  return (
    <footer className="py-10 px-10 border-t w-full">
      <div className="container mx-auto">
        <div className="flex-col flex sm:flex-col md:flex-row lg:flex-row xl:flex-row pb-9 gap-10 ">
          <div className="w-full sm:w-full md:w-2/6 lg:w-2/6 xl:w-2/6 pb-1 sm:pb-1 md:pb-3 lg:pb-4 xl:pb-5">
            <img src="/logo.png" alt="logo" className="pb-4 xl:pb-12 lg:pb-12 md:pb-11 sm:pb-4 w-32 xl:w-44 lg:w-44 md:w-40 sm:w-32 h-14 xl:h-24 lg:h-24 md:h-20 sm:h-14" />
            <p className="font-normal font-Montserrat xl:text-lg lg:text-lg md:text-base sm:text-base text-base text-[#9F9F9F] w-5/6">
              400 University Drive Suite 200 Coral Gables,
            </p>
            <span className="font-normal font-Opensans text-base text-[#9F9F9F]">
              FL 33134 USA
            </span>
          </div>
          <div className="w-full sm:w-full md:w-1/6 lg:w-1/6 xl:w-1/6 pb-1 sm:pb-1 md:pb-3 lg:pb-4 xl:pb-5">
            <h4 className="font-medium font-Opensans xl:text-lg lg:text-lg md:text-base sm:text-base text-base text-[#9F9F9F] pb-6 xl:pb-12 lg:pb-12 md:pb-10 sm:pb-8">
              Links
            </h4>
            <ul className="font-normal font-Popins xl:text-lg lg:text-lg md:text-base sm:text-base text-base text-[#9F9F9F] leading-10">
              <li>Home</li>
              <li>About</li>
              <li>Shop</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="w-full sm:w-full md:w-1/6 lg:w-1/6 xl:w-1/6 pb-1 sm:pb-1 md:pb-3 lg:pb-4 xl:pb-5">
            <h4 className="font-normal font-Opensans xl:text-lg lg:text-base md:text-base sm:text-base text-base text-[#9F9F9F] pb-6 xl:pb-12 lg:pb-12 md:pb-10 sm:pb-8">Help</h4>
            <ul className="font-normal font-Popins xl:text-lg lg:text-base md:text-base sm:text-base text-base text-[#9F9F9F] leading-10">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>
          <div className="w-full sm:w-full md:w-2/6 lg:w-2/6 xl:w-2/6  pb-1 sm:pb-1 md:pb-3 lg:pb-4 xl:pb-5">
            <h4 className="font-normal font-Opensans text-base text-[#9F9F9F] pb-6 xl:pb-12 lg:pb-12 md:pb-10 sm:pb-8">
              Newsletter
            </h4>
            <div className="flex-col font-Popins flex gap-3 xl:flex lg:flex-col md:flex-col sm:flex-col">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className=" font-normal outline-none text-base text-[#9F9F9F] border-none"
              />
              <button className=" underline font-medium text-sm text-[#9F9F9F] text-start">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="border-t pb-9"></div>
        <p className="font-normal font-Montserrat text-base text-center text-[#000000] ">
          2023 furino. All rights reverved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
