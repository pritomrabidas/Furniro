import Button from "../Button"
import ProductItem from "./ProductItem"

const Product = () => {
  return (
    <section className="bg-slate-50 p-10 w-full">
        <div className="container mx-auto">
            <h2 className="font-semibold font-Popins text-2xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-primary text-center pb-8">Our Products</h2>
            <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 pt-5">
                <ProductItem Image="product-1.png" Heading="Syltherine" Paragraph="Stylish cafe chair" Price="Rp 2.500.000" ThrowPrice="Rp 3.500.000"/>
                <ProductItem Image="product-7.png" Heading="Leviosa" Paragraph="Stylish cafe chair" Price="Rp 2.500.000" ThrowPrice=""/>
                <ProductItem Image="product-3.png" Heading="Lolito" Paragraph="Luxury big sofa" Price="Rp 7.000.000" ThrowPrice="Rp 1400.000"/>
                <ProductItem Image="product-4.png" Heading="Respira" Paragraph="Outdoor bar table and stool" Price="Rp 5.000.000" ThrowPrice=""/>
                <ProductItem Image="product-5.png" Heading="Grifo" Paragraph="Night lamp" Price="Rp 15.00.000" ThrowPrice=""/>
                <ProductItem Image="product-6.png" Heading="Muggo" Paragraph="Small mug" Price="Rp 150.000" ThrowPrice=""/>
                <ProductItem Image="product-7.png" Heading="Pingky" Paragraph="Cute bed set" Price="Rp 7.000.000" ThrowPrice=""/>
                <ProductItem Image="product-8.png" Heading="Potty" Paragraph="Minimalist flower pot" Price="Rp 5.000.000" ThrowPrice=""/>
            </div>
            <div className="py-10 text-center">
            <Button  title="See More"/>
            </div>
        </div>
    </section>
  )
}

export default Product