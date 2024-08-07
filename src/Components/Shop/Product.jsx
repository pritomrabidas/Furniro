import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProductItem from "../Home/ProductItem";
import { ProductData } from "../../api/Index";

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const Product = ({ itemsPerPage }) => {
  const [productList, setProductList] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = productList.slice(itemOffset, endOffset);
  productList.length = 51
  const pageCount = Math.ceil(productList.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productList.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    ProductData()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // productList.length = 8;
  console.log(currentItems);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 pt-5">
          {currentItems &&
            currentItems.map((item) => <ProductItem key={item.key} data={item} />)}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
          className="flex justify-center py-8 gap-9 font-Popins font-light text-lg paginate_product"
        />
      </div>
    </section>
  );
};

export default Product;
