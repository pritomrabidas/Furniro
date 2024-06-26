const Browse = () => {
  return (
    <div className="bg-slate-50 py-14">
      <div className="container">
        <div className="">
          <h3 className="font-bold text-3xl font-['poppins'] text-primary text-center">
            Browse The Range
          </h3>
          <p className="font-normal text-lg text-[#666666] font-['poppins'] text-center pb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="gap-9 flex">
          <div className="w-1/3">
            <img src="browse-1.png" alt="browse" className="w-[380px] h-[480px]" />
            <p className="font-normal text-2xl font-['poppins'] text-center pt-8">
            Dining
            </p>
          </div>
          <div className="w-1/3">
            <img src="browse-2.png" alt="browse" className="w-[380px] h-[480px]" />
            <p className="font-normal text-2xl font-['poppins'] text-center pt-8">
            Living
            </p>
          </div>
          <div className="w-1/3">
            <img src="browse-3.png" alt="browse" className="w-[380px] h-[480px]" />
            <p className="font-normal text-2xl font-['poppins'] text-center pt-8">
            Bedroom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
