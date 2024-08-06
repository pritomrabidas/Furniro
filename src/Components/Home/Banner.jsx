import Button from "../Button"

const Banner = () => {
  return (
    <section className="bg-[url('/banner.jpg')] justify-center mx-auto w-full flex py-32 xl:py-40 lg:py-36 md:py-32 sm:py-32">
      <div className="container mx-auto flex">
        <div className="w-0 xl:w-1/2 lg:w-1/2 md:w-0 sm:w-0"></div>
        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full sm:w-full px-10 ">
            <div className="px-10 xl:px-12 lg:px-10 md:px-9 py-12 xl:py-12 lg:py-11 md:py-10 bg-[#FFF3E3] font-Popins rounded-md justify-start">
                <p className="text-base font-semibold text-primary font-Montserrat">New Arrival</p>
                <h2 className="text-xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl font-bold font-Popins  xl:w-[390px] lg:w-[320px] md:w-[320px] sm:w-[260px] w-[250px] pt-1 pb-4 text-secandari">Discover Our New Collection</h2>
                <p className="text-base font-medium font-nunitoFont text-primary pb-10 w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate distinctio quidem illo quos consectetur. Omnis?</p>
                <Button path="" title="Buy Now"/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Banner