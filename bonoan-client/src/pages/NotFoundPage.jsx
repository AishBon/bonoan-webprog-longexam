import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="relative flex w-full flex-col gap-12 overflow-hidden bg-[#fdf8f6] text-[#2d2d6b]">

      {/* SOFT BLUEBERRY LIGHT*/}
      <div className="pointer-events-none absolute top-[-200px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#6c8cff]/10 blur-[120px]" />

      {/* HERO ERROR SECTION */}
      <section className="relative mx-4 mt-6 overflow-hidden rounded-[2rem] bg-white shadow-xl border border-[#e6e9ff] px-6 py-14 sm:px-10 sm:py-16">

        {/* subtle gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#6c8cff]/5 via-transparent to-[#2d2d6b]/5" />

        <div className="relative max-w-3xl">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6c8cff]">
            Error
          </p>

          <h1 className="mt-3 text-6xl font-bold leading-tight sm:text-7xl text-[#2d2d6b]">
            404
          </h1>

          <p className="mt-4 text-lg leading-7 text-[#4b4f7a]">
            Page not found. The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="/">Back Home</Button>
            <Button to="/products" variant="primary">View Products</Button>
          </div>

        </div>
      </section>

      {/* QUICK LINKS SECTION */}
      <section className="mx-4 mb-10 rounded-[2rem] bg-[#f3f6ff] px-6 py-10 shadow-inner border border-[#e6e9ff] sm:px-10 sm:py-12">

        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6c8cff]">
            Quick Links
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-[#2d2d6b]">
            Explore the site
          </h2>

          <div className="mt-8 space-y-4">

            {/* HOME CARD */}
            <div className="rounded-3xl bg-white p-5 shadow-md border border-[#e6e9ff]">
              <h3 className="font-semibold text-[#2d2d6b]">Home</h3>
              <p className="mt-1 text-sm text-[#4b4f7a]">
                Return to the homepage
              </p>
              <Button to="/" className="mt-4">Go Home</Button>
            </div>

            {/* PRODUCTS CARD */}
            <div className="rounded-3xl bg-white p-5 shadow-md border border-[#e6e9ff]">
              <h3 className="font-semibold text-[#2d2d6b]">Products</h3>
              <p className="mt-1 text-sm text-[#4b4f7a]">
                Browse all bakery items and categories
              </p>
              <Button to="/products" className="mt-4" variant="primary">
                View Products
              </Button>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
};

export default NotFoundPage;