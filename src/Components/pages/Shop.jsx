import Banner from "../Shop/Banner";
import Filter from "../Shop/Filter";
import Product from "../Shop/Product";

const Shop = () => {
  return (
    <>
      <Banner />
      <Filter/>
      <Product itemsPerPage={8}/>
    </>
  );
};

export default Shop;
