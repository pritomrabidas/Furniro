import Breadcrumb from "../Breadcrumb";
import Details from "../ProductDetails/Details";
import RelatedProducts from "../ProductDetails/RelatedProducts";

const ProductDetails = () => {
  return (
    <section className="pt-20">
      <div className="py-8 bg-[#F9F1E7] !justify-start">
        <Breadcrumb />
      </div>
      <Details/>
      <RelatedProducts/>
    </section>
  );
};

export default ProductDetails;
