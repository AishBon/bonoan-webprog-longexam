import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="group rounded-3xl bg-white p-5 shadow-md hover:shadow-xl transition border border-[#6c8cff]/10">

      {/* IMAGE FRAME */}
      <div className="aspect-square overflow-hidden rounded-2xl bg-[#f3f6ff] border border-[#6c8cff]/10">

        {/* PRODUCT IMAGE GOES HERE */}
        <img
          src={product.image || "https://your-product-image.jpg"}
          alt={product.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

      </div>

      {/* CATEGORY + INDEX */}
      <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[#6c8cff]">
        {product.category} {String(index + 1).padStart(2, '0')}
      </p>

      {/* TITLE */}
      <h3 className="mt-2 text-lg font-semibold text-[#2d2d6b]">
        {product.title}
      </h3>

      {/* PRICE */}
      <p className="mt-2 text-base font-bold text-[#2d2d6b]">
        {product.price}
      </p>

      {/* DESCRIPTION */}
      <p className="mt-3 text-sm leading-6 text-gray-600">
        {product.content?.[0]?.substring(0, 110) || "Fresh bakery item"}...
      </p>

      {/* BUTTON */}
      <Button to={`/products/${product.name}`} className="mt-4">
        View Product
      </Button>

    </article>
  );
};

export default ProductCard;