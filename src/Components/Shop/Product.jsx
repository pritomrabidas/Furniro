import { useState } from "react";
import ReactPaginate from "react-paginate";
import ProductItem from "../Home/ProductItem";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16];

const Product = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 pt-5">
          {currentItems &&
            currentItems.map((item) => (
                <>
              <ProductItem key={item} Image="product-1.png" Heading="Syltherine" Paragraph="Stylish cafe chair" Price="Rp 2.500.000" ThrowPrice="Rp 3.500.000" />
                </>
            ))}
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
