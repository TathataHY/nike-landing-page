import { PopularProductCard } from "../components";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className="max-sm:mt-12 max-container">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-bold font-palanquin text-4xl">
          Our <span className="text-coral-red"> Popular </span> Products
        </h2>
        <p className="mt-2 lg:max-w-lg font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="gap-14 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-16">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
