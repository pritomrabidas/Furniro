import { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";

const items = [1, 2];

const BlogPagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <div className="xl:w-[65%] lg:w-[65%] w-full py-10">
      <div className="">
        {currentItems &&
          currentItems.map((item) => (
            <div className="" key={item}>
              <Product
                key={item}
                Image="/blog-1.png"
                Heading="Going all-in with millennial design"
              />
              <Product
                key={item}
                Image="/blog-2.png"
                Heading="Exploring new ways of decorating"
              />
              <Product
                key={item}
                Image="/blog-3.png"
                Heading="Handmade pieces that took time to make"
              />
            </div>
          ))}
      </div>
      <div className="">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="flex justify-center gap-10 font-Popins font-light text-lg pagiante_blog_product"
        />
      </div>
    </div>
  );
};

export default BlogPagination;
