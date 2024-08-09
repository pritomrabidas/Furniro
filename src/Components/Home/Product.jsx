import { useEffect, useState } from "react";
import Button from "../Button";
import ProductItem from "./ProductItem";
import { ProductData } from "../../api/Index";

const Product = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    ProductData()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);
  productList.length = 8
  
  return (
    <section className="bg-slate-50 p-10 w-full">
      <div className="container mx-auto">
        <h2 className="font-semibold font-Popins text-2xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-primary text-center pb-8">
          Our Products
        </h2>
        <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 pt-5">
          {productList.map((item) => (
            <ProductItem data={item} key={item.id} />
          ))}
        </div>
        <div className="py-10 text-center">
          <Button path="/shop" title="See More" />
        </div>
      </div>
    </section>
  );
};

export default Product;
