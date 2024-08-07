import Banner from "../Shop/Banner";
import Filter from "../Shop/Filter";
import Product from "../Shop/Product";

const Shop = () => {
  return (
    <>
      <Banner />
      <Filter/>
      <Product itemsPerPage={16}/>
    </>
  );
};

export default Shop;
