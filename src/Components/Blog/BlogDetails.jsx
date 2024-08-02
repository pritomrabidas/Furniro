import BlogPagination from "./BlogPagination";
import BlogRightDetail from "./BlogRightDetail";

const BlogDetails = () => {
  return (
    <section className="pt-10">
      <div className="container mx-auto flex gap-16">
          <BlogPagination itemsPerPage={1} />
          <BlogRightDetail/>
      </div>
    </section>
  );
};

export default BlogDetails;
