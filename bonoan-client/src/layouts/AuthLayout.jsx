import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-[#fdf8f6] text-[#2d2d6b]">

      <div className="grid min-h-screen w-full lg:grid-cols-[1.2fr_0.8fr]">

        {/* IMAGE HERO */}
        <div className="relative hidden lg:block overflow-hidden">

          {/* BACKGROUND IMAGE */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                `url("https://img.freepik.com/premium-photo/bakery-showcasing-array-fresh-breads-with-prominent-signage_166222-8306.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#2d2d6b]/70 via-[#2d2d6b]/40 to-[#6c8cff]/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,140,255,0.25),transparent_10%)]" />

          {/* FLOATING BAKERY CARD */}
          <div className="absolute bottom-10 left-10 max-w-sm rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md shadow-xl text-white">

            <img
              src="https://tse2.mm.bing.net/th/id/OIP.SNPOlyM3fxaazNXFwjLCiQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Home Bakery"
              className="h-12 w-12 rounded-full border border-white/30 bg-white object-cover"
            />

            <h2 className="mt-3 text-lg font-bold">
              Blueberry Bakehouse
            </h2>

            <p className="mt-2 text-sm text-white/80 leading-6">
              Fresh pastries, breads, and desserts baked daily with care and love.
            </p>

          </div>

        </div>

        <main className="flex items-center bg-[#fdf8f6] px-6 py-10 sm:px-10 lg:px-16">

          <div className="mx-auto w-full max-w-md">

            <div className="mb-6 h-1 w-16 rounded-full bg-[#6c8cff]" />

            <Outlet />

          </div>

        </main>

      </div>
    </section>
  );
};

export default AuthLayout;