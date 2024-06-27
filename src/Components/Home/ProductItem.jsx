
const ProductItem = ({Image,Heading,Paragraph,Price,ThrowPrice}) => {
  return (
    <div className="bg-white">
        <img src={Image} alt="product" className=" w-full h-80" />
        <div className="p-5">
            <h3 className="font-semibold text-3xl font-['poppins'] text-navegrey">{Heading}</h3>
            <p className="font-normal text-lg font-['poppins'] text-[#898989]">{Paragraph}</p>
            <div className="flex gap-4">
                <span className="font-semibold text-lg font-['poppins'] text-primary">{Price}</span>
                <span className="font-normal text-base font-['poppins'] line-through text-[#B0B0B0]">{ThrowPrice}</span>
            </div>
        </div>
    </div>
  )
}

export default ProductItem