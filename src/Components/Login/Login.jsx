import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/light-logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      username.trim().toLowerCase() === "student" &&
      password.trim() === "demo"
    ) {
      navigate("/student-panel");
      return;
    }

    navigate("/student-panel");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-indigo-100 px-4 py-8 sm:px-6 lg:px-8 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col overflow-hidden rounded-4xl border border-slate-200/70 bg-white shadow-[0_25px_80px_-20px_rgba(15,23,42,0.35)] dark:border-slate-700 dark:bg-slate-900 lg:flex-row">
        <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-linear-to-br from-blue-700 via-sky-600 to-cyan-500 px-6 py-10 sm:px-10 lg:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_45%)]" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -right-8 top-6 h-48 w-48 rounded-full bg-slate-900/10 blur-3xl" />
          <div className="relative z-10 max-w-md text-center text-white lg:text-left">
            <p className="mb-3 inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1 text-sm font-medium backdrop-blur">
              University Access Portal
            </p>
            <h1 className="text-3xl font-semibold sm:text-4xl">
              Welcome back to your academic workspace
            </h1>
            <p className="mt-4 text-sm leading-7 text-blue-50 sm:text-base">
              Sign in to manage courses, attendance, results, and university
              services from one secure place.
            </p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center bg-white/95 px-6 py-10 sm:px-10 lg:px-12 dark:bg-slate-900/95">
          <form className="w-full max-w-md space-y-5" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center lg:justify-start">
              <img src={logo} alt="University logo" className="h-12 w-auto" />
            </div>

            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
                Login to Your Account
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Enter your credentials to continue
              </p>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                <span className="mb-1.5 block">Username</span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-900/40"
                />
              </label>

              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                <span className="mb-1.5 block">Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-900/40"
                />
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900/40"
            >
              Login
            </button>

            <p className="text-center text-sm text-slate-500 dark:text-slate-400">
              Forgot your password?{" "}
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                Reset it here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
