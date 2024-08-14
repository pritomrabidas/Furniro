import { useParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import Details from "../ProductDetails/Details";
import RelatedProducts from "../ProductDetails/RelatedProducts";
import { useEffect, useState } from "react";
import { ProductData } from "../../api/Index";

const ProductDetails = () => {
  const param = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    ProductData()
      .then((res) => {
        for (let item of res.data) {
          if (item.id == param.id) {
            setProduct(item);
          }
          console.log(res.data.category.name);
        }
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="pt-20">
      <div className="py-8 bg-[#F9F1E7] !justify-start">
        <Breadcrumb />
      </div>
      <Details data={product} />
      <RelatedProducts />
    </section>
  );
};

export default ProductDetails;
