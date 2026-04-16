import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-[#e6e9ff] bg-white px-4 py-3 text-sm text-[#2d2d6b] outline-none transition placeholder:text-[#9aa3c7] focus:border-[#6c8cff] focus:ring-2 focus:ring-[#6c8cff]/20';

const actionButtonClassName =
  'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignUpPage = () => {
  return (
    <div
      className="w-full max-w-md mx-auto"
      style={{ fontFamily: "'Josefin Sans', sans-serif" }}
    >

      {/* HEADER */}
      <h1
        className="text-3xl font-bold tracking-tight text-[#2d2d6b] sm:text-4xl"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        Sign Up
      </h1>

      <p className="mt-3 text-sm leading-6 text-[#4b4f7a]">
        Create a Blueberry Bakehouse account for faster checkout and order updates.
      </p>

      {/* FORM */}
      <form className="mt-8 space-y-5">

        {/* NAME FIELDS */}
        <div className="grid gap-5 sm:grid-cols-2">

          <div>
            <label htmlFor="first-name" className="text-sm font-medium text-[#2d2d6b]">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="last-name" className="text-sm font-medium text-[#2d2d6b]">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>

        </div>

        {/* EMAIL */}
        <div>
          <label htmlFor="signup-email" className="text-sm font-medium text-[#2d2d6b]">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label htmlFor="signup-password" className="text-sm font-medium text-[#2d2d6b]">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Create password"
            autoComplete="new-password"
            className={inputClasses}
          />

          <p className="mt-2 text-xs text-[#6b6f8f]">
            Use at least 8 characters with letters and numbers.
          </p>
        </div>

        {/* CREATE BUTTON */}
        <Button
          type="submit"
          variant="primary"
          className={actionButtonClassName}
        >
          Create Account
        </Button>

        {/* SOCIAL BUTTONS */}
        <div className="grid gap-3 pt-2 sm:grid-cols-2">

          <Button
            type="button"
            variant="secondary"
            className={actionButtonClassName}
          >
            Sign up with Google
          </Button>

          <Button
            type="button"
            variant="secondary"
            className={actionButtonClassName}
          >
            Sign up with Apple
          </Button>

        </div>

      </form>

      {/* FOOTER LINK */}
      <div className="mt-8 border-t border-[#e6e9ff] pt-6 text-sm text-[#4b4f7a]">
        Already have an account?{' '}

        <Link
          to="/signin"
          className="font-semibold text-[#6c8cff] transition hover:text-[#2d2d6b]"
        >
          Log In
        </Link>
      </div>

    </div>
  );
};

export default SignUpPage;