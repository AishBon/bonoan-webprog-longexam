import Button from '../../components/Button';

const categories = [
  {
    name: 'Cupcakes',
    image:
      'https://tse1.mm.bing.net/th/id/OIP.ryJ-kAWXxAhDz3L71S59IAHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    name: 'Breads',
    image:
      'https://zestfulkitchen.com/wp-content/uploads/2020/04/milk-rolls_for-web-683x1024.jpg',
  },
  {
    name: 'Pastries',
    image:
      'https://preppykitchen.com/wp-content/uploads/2020/04/Macaron-Recipe-1200.jpg',
  },
  {
    name: 'Cakes',
    image:
      'https://scientificallysweet.com/wp-content/uploads/2024/04/IMG_2103-feature.jpg',
  },
];

const AboutPage = () => {
  return (
    <div className="relative flex w-full flex-col gap-16 overflow-hidden bg-[#fdf8f6] text-[#2d2d6b]" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute top-[-200px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#6c8cff]/10 blur-[120px]" />

      {/* HERO SECTION */}
      <section className="relative mx-4 mt-4 overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.2)] bg-white">

        <div className="grid lg:grid-cols-2 items-stretch">

          {/* IMAGE SIDE */}
          <div className="relative min-h-[420px] lg:min-h-full">

            <img
              src="https://img.freepik.com/premium-photo/bakery-showcases-irresistible-assortment-fresh-pastries-breads_864588-36488.jpg"
              alt="Bakery Display"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-[#6c8cff]/10 via-white/20 to-[#2d2d6b]/10" />

            {/* FLOATING CARD */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-sm rounded-2xl bg-white/90 backdrop-blur-md border border-[#6c8cff]/20 p-5 shadow-lg flex items-center gap-4">

              <img
                src="https://tse2.mm.bing.net/th/id/OIP.SNPOlyM3fxaazNXFwjLCiQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Home Bakery Logo"
                className="h-12 w-12 rounded-full object-cover border border-[#6c8cff]/20"
              />

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#6c8cff]">
                  Home Bakery
                </p>
                <p className="mt-1 text-sm text-[#2d2d6b] leading-6">
                  Fresh pastries, breads, and desserts made daily with love.
                </p>
              </div>

            </div>

          </div>

          {/* TEXT SIDE */}
          <div className="p-8 sm:p-10 flex flex-col justify-center">

            <p className="text-xs uppercase tracking-[0.3em] text-[#6c8cff]">
              About Store
            </p>

            <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-[#2d2d6b]" style={{ fontFamily: "'Cinzel', serif" }}>
              A bakery store built for simple, fast, and delicious ordering.
            </h1>

            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-7">
              Home Bakery is designed to bring a clean, modern shopping experience
              for freshly baked goods — from pastries to breads — with smooth browsing and quick ordering.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">Back Home</Button>
              <Button to="/products">Open Products</Button>
            </div>

          </div>

        </div>
      </section>

      {/* STORE OVERVIEW */}
      <section className="px-6 py-12">

        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6c8cff]">
            Store Overview
          </p>
          <h2 className="text-2xl font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
            Quick store blocks
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl bg-white p-6 shadow-md hover:shadow-xl transition border border-[#6c8cff]/10">
            <p className="text-3xl font-bold" style={{ fontFamily: "'Cinzel', serif" }}>12</p>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-400">Items</p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md hover:shadow-xl transition border border-[#6c8cff]/10">
            <p className="text-3xl font-bold" style={{ fontFamily: "'Cinzel', serif" }}>4</p>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-400">Categories</p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md hover:shadow-xl transition border border-[#6c8cff]/10">
            <p className="text-3xl font-bold" style={{ fontFamily: "'Cinzel', serif" }}>12</p>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-400">Pickup Slots</p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md hover:shadow-xl transition border border-[#6c8cff]/10">
            <p className="text-3xl font-bold" style={{ fontFamily: "'Cinzel', serif" }}>28</p>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-400">Orders</p>
          </div>

        </div>
      </section>

      {/* STORE FLOW */}
      <section className="px-6 py-12 bg-[#f3f6ff] rounded-[2rem] mx-4 shadow-inner border border-[#6c8cff]/10">

        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6c8cff]">
            Store Flow
          </p>
          <h2 className="text-2xl font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
            How ordering works
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          <div className="space-y-4">

            <div className="rounded-3xl bg-white p-6 shadow-md border border-[#6c8cff]/10">
              <h3 className="text-lg font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>Curated Catalog</h3>
              <p className="mt-2 text-sm text-gray-600">
                Products are grouped for faster browsing and easier selection.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-md border border-[#6c8cff]/10">
              <h3 className="text-lg font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>Simple Checkout</h3>
              <p className="mt-2 text-sm text-gray-600">
                Clean product pages with clear pricing and actions.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-md border border-[#6c8cff]/10">
              <h3 className="text-lg font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>Fast Pickup</h3>
              <p className="mt-2 text-sm text-gray-600">
                Orders are prepared and ready for quick student pickup.
              </p>
            </div>

          </div>

          {/* CATEGORY GRID */}
          <div className="rounded-3xl bg-white p-6 shadow-md border border-[#6c8cff]/10">

            <p className="text-xs uppercase tracking-[0.3em] text-[#6c8cff]">
              Categories
            </p>

            <div className="mt-5 grid grid-cols-2 gap-4">

              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className="relative aspect-square overflow-hidden rounded-2xl border border-[#6c8cff]/10"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/30" />

                  <p className="absolute inset-0 flex items-center justify-center text-sm font-semibold uppercase tracking-[0.2em] text-white">
                    {cat.name}
                  </p>
                </div>
              ))}

            </div>

            <Button to="/products" className="mt-5">
              View Products
            </Button>

          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;