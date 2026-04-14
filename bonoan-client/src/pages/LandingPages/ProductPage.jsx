import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js';

function ProductPage() {
  const { name } = useParams();
  const product = products.find(product => product.name === name);

  if (!product) {
    return (
      <div className="relative flex w-full flex-col gap-16 overflow-hidden bg-[#fdf8f6] text-[#2d2d6b]">

        <div className="pointer-events-none absolute top-[-200px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#6c8cff]/10 blur-[120px]" />

        <section className="mx-4 mt-6 rounded-[2.5rem] bg-white p-10 shadow-[0_30px_80px_rgba(0,0,0,0.15)] text-center">
          <h1 className="text-3xl font-bold text-[#2d2d6b]">
            Product not found
          </h1>

          <p className="mt-3 text-gray-500">
            The item you're looking for doesn’t exist or may have been removed.
          </p>

          <Button to="/products" className="mt-6">
            Back to Products
          </Button>
        </section>

      </div>
    );
  }

  return (
    <div className="relative flex w-full flex-col gap-16 overflow-hidden bg-[#fdf8f6] text-[#2d2d6b]">

      {/* SOFT BACKGROUND LIGHT */}
      <div className="pointer-events-none absolute top-[-200px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#6c8cff]/10 blur-[120px]" />

      {/* 🍰 PRODUCT HERO */}
      <section className="relative mx-4 mt-6 overflow-hidden rounded-[2.5rem] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.15)]">

        <div className="grid gap-10 lg:grid-cols-2 p-8 sm:p-10">

          {/* IMAGE */}
          <div className="rounded-3xl bg-[#f3f6ff] p-6 shadow-inner border border-[#6c8cff]/10 flex items-center justify-center">

            <div className="aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-[#6c8cff]/10 bg-white shadow-md">

              {/* PRODUCT IMAGE PLACE */}
              <img
                src={product.image || "https://your-product-image.jpg"}
                alt={product.title}
                className="h-full w-full object-cover"
              />

            </div>

          </div>

          {/* INFO */}
          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-[#6c8cff]">
              {product.category}
            </p>

            <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-[#2d2d6b]">
              {product.title}
            </h1>

            <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
              <span className="text-lg font-bold text-[#2d2d6b]">
                {product.price}
              </span>
              <span>{product.stock}</span>
            </div>

            <p className="mt-6 text-gray-600 leading-7">
              {product.content.map((p, i) => (
                <span key={i} className="block mb-3">
                  {p}
                </span>
              ))}
            </p>

            {/* ACTIONS */}
            <div className="mt-8 flex flex-wrap gap-3">

              <Button variant="primary">
                Add to Cart
              </Button>

              <Button to="/products">
                Back to Products
              </Button>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default ProductPage;