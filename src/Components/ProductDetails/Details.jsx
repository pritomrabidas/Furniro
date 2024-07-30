import ProductSlide from "product-slide";

const API = {
  images: [
    "https://i.imgur.com/QkIa5tT.jpeg",
    "https://i.imgur.com/jb5Yu0h.jpeg",
    "https://i.imgur.com/UlxxXyG.jpeg",
  ],
};
const Details = () => {
  const settings = {
    direction: "vertical", // or ""
    zoom: false, // or 
  };

  return (
    <section className="pt-8">
      <div className="container">
      <div className="w-1/2 h-[500px]">
        <ProductSlide settings={settings} api={API.images} />
      </div>
      </div>
    </section>
  );
};

export default Details;
