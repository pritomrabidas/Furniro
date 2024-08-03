import Button from "../Button";

const ExploreMore = () => {
  return (
    <section className="bg-[#FCF8F3]">
      <div className="container mx-auto px-5 py-11">
        <div className="flex gap-11">
          <div className="w-1/3">
            <h2 className="font-Montserrat font-bold text-4xl text-[#3A3A3A]">50+ Beautiful rooms inspiration</h2>
            <p className="font-nunitoFont font-medium text-base text-[#616161] pt-2 pb-6 w-4/5">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
            <div className="">
              <Button title="Explore More" />
            </div>
          </div>
          <div className="w-8/12"></div>
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
