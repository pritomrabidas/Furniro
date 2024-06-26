import Button from "../Button"

const Banner = () => {
  return (
    <div className="bg-[url('/banner.jpg')] py-40">
      <div className="container flex">
        <div className="w-3/5"></div>
        <div className="w-2/5">
            <div className="px-10 py-12 bg-[#FFF3E3] rounded-md">
                <p className="text-base font-semibold font-['poppins'] text-primary">New Arrival</p>
                <h2 className="text-5xl font-bold w-[350px] pt-1 pb-4 font-['poppins'] text-secandari">Discover Our New Collection</h2>
                <p className="text-base font-medium font-['poppins'] text-primary pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate distinctio quidem illo quos consectetur. Omnis?</p>
                <Button path="" title="Buy Now"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner