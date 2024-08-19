import Button from "../Button";
import ProductItem from "../Home/ProductItem";

const RelatedProducts = ({ products }) => {
  const shorProduct = products.slice(0, 4);

  return (
    <section>
      <div className="container mx-auto pt-14 pb-20 px-5">
        <h2 className="text-center font-Opensans font-semibold text-3xl text-black pb-6">
          Related Products
        </h2>
        <div className=" grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 pt-5">
          {shorProduct.map((item) => (
            <ProductItem data={item} key={item.id} />
          ))}
        </div>
        <div className="text-center pt-11">
          <Button title={"Show More"} />
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
