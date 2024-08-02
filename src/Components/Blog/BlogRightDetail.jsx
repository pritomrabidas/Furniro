import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import CategoriesItem from "./CategoriesItem";
import BlogPost from "./BlogPost";

const BlogRightDetail = () => {
  return (
    <div className="xl:w-[30%] lg:w-[30%] md:w-1/2 sm:w-4/5 w-full py-10 justify-center mx-auto">
      <div className="w-full h-14 border-2 border-[#9F9F9F] rounded-lg items-center flex px-5">
        <input type="search" className="w-full outline-none " />
        <Link>
          <CiSearch className="text-2xl" />
        </Link>
      </div>
      <div className="px-5">
        <h3 className="font-Popins font-normal text-2xl text-[#000000] pt-11 pb-8">
          Categories
        </h3>
        <CategoriesItem Heading="Crafts" Number="2" />
        <CategoriesItem Heading="Design" Number="8" />
        <CategoriesItem Heading="Handmade" Number="7" />
        <CategoriesItem Heading="Interior" Number="1" />
        <CategoriesItem Heading="Wood" Number="6" />
      </div>
      <div className="px-5">
        <h3 className="font-Popins font-normal text-2xl text-[#000000] pt-11 pb-8">
          Recent Posts
          <BlogPost Image="/blog-post-1.png" Heading="Going all-in with millennial design" Date="03 Aug 2022"/>
          <BlogPost Image="/blog-post-2.png" Heading="Exploring new ways of decorating" Date="03 Aug 2022"/>
          <BlogPost Image="/blog-post-3.png" Heading="Handmade pieces that took time to make" Date="03 Aug 2022"/>
          <BlogPost Image="/blog-post-4.png" Heading="Modern home in Milan" Date="03 Aug 2022"/>
          <BlogPost Image="/blog-post-5.png" Heading="Colorful office redesign" Date="03 Aug 2022"/>
        </h3>
      </div>
    </div>
  );
};

export default BlogRightDetail;
