import { LuLanguages } from "react-icons/lu";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LoginButton from "../LoginButton/LoginButton";
import MobileNav from "../MobileNav/MobileNav";

const Header = () => {
  const isDark = document.documentElement.classList.contains("dark");

  return (
    <header className="fixed left-0 top-0 z-50 h-16 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-2xl dark:border-slate-700/70 dark:bg-slate-950/80">
      <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6">
        <div className="flex h-full items-center space-x-2">
          <img
            src={isDark ? "public/light-logo.png" : "public/dark-logo.png"}
            alt="University logo"
            className="h-full w-auto object-contain"
          />
          <span className="text-lg font-semibold text-slate-800 dark:text-slate-100 sm:text-xl">
            University Management System
          </span>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-600 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 sm:flex"
          >
            <LuLanguages />
          </button>

          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <ThemeToggle />
            <LoginButton />
          </div>

          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
