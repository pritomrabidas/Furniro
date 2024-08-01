import BlogPagination from "./BlogPagination";

const BlogDetails = () => {
  return (
    <section className="pt-10">
      <div className="container mx-auto">
        <BlogPagination itemsPerPage={1}/>
      </div>
    </section>
  );
};

export default BlogDetails;
