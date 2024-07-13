const Browse = () => {
  return (
    <section className="bg-slate-50 py-20 w-full">
      <div className="container mx-auto font-['Popins']">
        <div className="">
          <h3 className="font-bold text-2xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl  text-primary text-center pb-1">
            Browse The Range
          </h3>
          <p className="font-normal text-base xl:text-lg lg:text-lg md:text-lg sm:text-base text-[#666666] font-['poppins'] text-center pb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="gap-9 flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col px-5">
          <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
            <img src="browse-1.png" alt="browse" className="w-full h-full" />
            <p className="font-normal text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-['poppins'] text-center pt-8">
            Dining
            </p>
          </div>
          <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
            <img src="browse-2.png" alt="browse" className="w-full h-full" />
            <p className="font-normal text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-['poppins'] text-center pt-8">
            Living
            </p>
          </div>
          <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
            <img src="browse-3.png" alt="browse" className="w-full h-full" />
            <p className="font-normal text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-['poppins'] text-center pt-8">
            Bedroom
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Browse;
