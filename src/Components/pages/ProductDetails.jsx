import Breadcrumb from "../Breadcrumb";
import Details from "../ProductDetails/Details";

const ProductDetails = () => {
  return (
    <section className="pt-20">
      <div className="py-8 bg-[#F9F1E7] !justify-start">
        <Breadcrumb />
      </div>
      <Details/>
    </section>
  );
};

export default ProductDetails;
