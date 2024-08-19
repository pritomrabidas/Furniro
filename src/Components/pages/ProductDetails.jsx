import { useParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import Details from "../ProductDetails/Details";
import RelatedProducts from "../ProductDetails/RelatedProducts";
import { useEffect, useState } from "react";
import { ProductData } from "../../api/Index";

const ProductDetails = () => {
  const param = useParams();
  const [product, setProduct] = useState([]);
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    ProductData()
      .then((res) => {
        for (let item of res.data) {
          if (item.id == param.id) {
            setProduct(item);
            for (let related of res.data) {
              if (item.category.name == related.category.name ) {
                setRelatedProduct((Prev)=>[...Prev,related])
              }
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [param.id]);

  return (
    <section className="pt-20">
      <div className="py-8 bg-[#F9F1E7] !justify-start">
        <Breadcrumb title={product.title} />
      </div>
      <Details data={product} />
      <RelatedProducts products={relatedProduct} />
    </section>
  );
};

export default ProductDetails;
