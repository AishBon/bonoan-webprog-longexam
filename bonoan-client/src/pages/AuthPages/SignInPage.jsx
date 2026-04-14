import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-[#e6e9ff] bg-white px-4 py-3 text-sm text-[#2d2d6b] outline-none transition placeholder:text-[#9aa3c7] focus:border-[#6c8cff] focus:ring-2 focus:ring-[#6c8cff]/20';

const actionButtonClassName =
  'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
  return (
    <div className="w-full max-w-md mx-auto">

      {/* HEADER */}
      <h1 className="text-3xl font-bold tracking-tight text-[#2d2d6b] sm:text-4xl">
        Log In
      </h1>

      <p className="mt-3 text-sm leading-6 text-[#4b4f7a]">
        Access your Blueberry Bakehouse account to manage orders and pickups.
      </p>

      {/* FORM */}
      <form className="mt-8 space-y-5">

        {/* EMAIL */}
        <div>
          <label htmlFor="signin-email" className="text-sm font-medium text-[#2d2d6b]">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label htmlFor="signin-password" className="text-sm font-medium text-[#2d2d6b]">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            className={inputClasses}
          />

          <p className="mt-2 text-xs text-[#6b6f8f]">
            Must contain at least 8 characters.
          </p>
        </div>

        {/* OPTIONS */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-[#4b4f7a]">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-[#cfd6ff] accent-[#6c8cff]"
            />
            <span>Remember me</span>
          </label>

          <button
            type="button"
            className="font-medium text-[#6c8cff] transition hover:text-[#2d2d6b]"
          >
            Forgot Password?
          </button>
        </div>

        {/* LOGIN BUTTON */}
        <Button
          type="submit"
          variant="primary"
          className={actionButtonClassName}
        >
          Log In
        </Button>

        {/* SOCIAL LOGIN */}
        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button
            type="button"
            variant="secondary"
            className={actionButtonClassName}
          >
            Log in with Google
          </Button>

          <Button
            type="button"
            variant="secondary"
            className={actionButtonClassName}
          >
            Log in with Apple
          </Button>
        </div>

      </form>

      <div className="mt-8 border-t border-[#e6e9ff] pt-6 text-sm text-[#4b4f7a]">
        No account yet?{' '}

        {/* SIGN UP LINK */}
        <Link
          to="/signup"
          className="font-semibold text-[#6c8cff] transition hover:text-[#2d2d6b]"
        >
          Sign up
        </Link>
      </div>

    </div>
  );
};

export default SignInPage;