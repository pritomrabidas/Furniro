import BlogPagination from "./BlogPagination";
import BlogRightDetail from "./BlogRightDetail";

const BlogDetails = () => {
  return (
    <section className="pt-10">
      <div className="container mx-auto flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col gap-16 px-5">
          <BlogPagination itemsPerPage={1} />
          <BlogRightDetail/>
      </div>
    </section>
  );
};

export default BlogDetails;
