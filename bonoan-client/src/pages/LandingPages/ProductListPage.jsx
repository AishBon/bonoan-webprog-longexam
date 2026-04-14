import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';

const ProductListPage = () => {
  return (
    <div className="relative flex w-full flex-col gap-16 overflow-hidden bg-[#fdf8f6] text-[#2d2d6b]">

      {/* SOFT LIGHT GLOW (same theme as homepage) */}
      <div className="pointer-events-none absolute top-[-200px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#6c8cff]/10 blur-[120px]" />

      {/* HERO SECTION */}
      <section className="relative mx-4 mt-4 overflow-hidden rounded-[2.5rem] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.2)]">

        <div className="p-8 sm:p-10">

          <p className="text-xs uppercase tracking-[0.3em] text-[#6c8cff]">
            Products
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-[#2d2d6b] max-w-2xl">
            Fresh bakery items made for your daily cravings
          </h1>

          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-xl leading-7">
            Explore pastries, breads, and desserts crafted daily with quality ingredients.
            Simple browsing, fast ordering, and delicious results.
          </p>

          <div className="mt-6">
            <Button to="/">
              Back Home
            </Button>
          </div>

        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="px-6 py-12">

        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6c8cff]">
            Featured Products
          </p>

          <h2 className="text-2xl font-semibold text-[#2d2d6b]">
            Bakery selection
          </h2>
        </div>

        {/* PRODUCT GRID WRAPPER */}
        <div className="rounded-[2rem] bg-[#f3f6ff] p-6 sm:p-8 shadow-inner border border-[#6c8cff]/10">

          <ProductList products={products} />

        </div>

      </section>

    </div>
  );
};

export default ProductListPage;