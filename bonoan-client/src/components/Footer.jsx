import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-[#e6e9ff] bg-[#2d2d6b] text-white">

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* BRAND */}
          <div>
            <p className="text-lg font-bold tracking-wide">
              Blueberry Bakehouse
            </p>
            <p className="mt-2 text-sm text-white/70 leading-6">
              Freshly baked pastries, breads, and desserts crafted daily with love.
            </p>
          </div>

          {/* PAGES DIRECTORY */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6c8cff]">
              Pages
            </p>

            <ul className="mt-4 space-y-2 text-sm text-white/80">

              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-white transition">
                  Products
                </Link>
              </li>

              <li>
                <Link to="/signin" className="hover:text-white transition">
                  Sign In
                </Link>
              </li>

              <li>
                <Link to="/signup" className="hover:text-white transition">
                  Sign Up
                </Link>
              </li>

            </ul>
          </div>

          {/* QUICK INFO */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6c8cff]">
              Store Info
            </p>

            <p className="mt-4 text-sm text-white/70 leading-6">
              Products • Cart • Pickup Scheduling
            </p>

            <div className="mt-5 h-1 w-20 rounded-full bg-[#6c8cff]" />
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Blueberry Bakehouse. All rights reserved.
          </p>

          <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">
            Handmade • Fresh • Home Bakery
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;