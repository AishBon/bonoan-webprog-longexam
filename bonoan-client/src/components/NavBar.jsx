import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const navLinkClassName = ({ isActive }) =>
  [
    "rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition",

    isActive
      ? 'border-[#a5b4fc] bg-white/10 text-white'
      : 'border-transparent text-white/80 hover:border-[#a5b4fc] hover:bg-white/10 hover:text-white',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#2d2d6b]/95 backdrop-blur-md" style={{ fontFamily: "'Cinzel', serif" }}>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">

        {/* LOGO / BRAND */}
        <NavLink to="/" className="flex items-center gap-3">

          <img
            src="https://tse2.mm.bing.net/th/id/OIP.SNPOlyM3fxaazNXFwjLCiQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Home Bakery"
            className="h-10 w-10 rounded-full border-2 border-white/20 bg-white object-cover scale-110 shadow-md"
          />

          <div className="space-y-0.5">
            <p className="text-xl font-bold text-white" style={{ fontFamily: "'Cinzel', serif" }}>
              Home Bakery
            </p>
          </div>
        </NavLink>

        {/* NAV LINKS */}
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* AUTH BUTTONS */}
        <div className="flex items-center gap-3">

          {/* LOGIN */}
          <NavLink
            to="/signin"
            className="rounded-full border border-white/30 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/90 transition hover:bg-white/10 hover:text-white"
          >
            Login
          </NavLink>

          {/* SIGN UP */}
          <NavLink
            to="/signup"
            className="
              rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em]
              text-white shadow-md transition
              bg-gradient-to-r from-[#6c8cff] via-[#7c83ff] to-[#a5b4fc]
              hover:from-[#5a78ff] hover:to-[#8aa3ff]
            "
          >
            Sign Up
          </NavLink>

        </div>

      </div>
    </header>
  );
};

export default NavBar;