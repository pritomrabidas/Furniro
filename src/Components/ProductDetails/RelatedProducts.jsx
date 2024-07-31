import Button from "../Button";
import ProductItem from "../Home/ProductItem";

const RelatedProducts = () => {
  return (
    <section>
      <div className="container pt-14 pb-20">
        <h2 className="text-center font-Opensans font-semibold text-3xl text-black pb-6">
          Related Products
        </h2>
        <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 pt-5">
          <ProductItem
            Image="/product-1.png"
            Heading="Syltherine"
            Paragraph="Stylish cafe chair"
            Price="Rp 2.500.000"
            ThrowPrice="Rp 3.500.000"
          />
          <ProductItem
            Image="/product-7.png"
            Heading="Leviosa"
            Paragraph="Stylish cafe chair"
            Price="Rp 2.500.000"
            ThrowPrice=""
          />
          <ProductItem
            Image="/product-3.png"
            Heading="Lolito"
            Paragraph="Luxury big sofa"
            Price="Rp 7.000.000"
            ThrowPrice="Rp 1400.000"
          />
          <ProductItem
            Image="/product-4.png"
            Heading="Respira"
            Paragraph="Outdoor bar table and stool"
            Price="Rp 5.000.000"
            ThrowPrice=""
          />
        </div>
        <div className="text-center pt-11">
          <Button title={"Show More"} />
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
