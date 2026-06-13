import { LuLanguages,  } from "react-icons/lu";
import { MdModeNight, MdLightMode } from "react-icons/md";
import { FaSignInAlt } from "react-icons/fa";


const Header = () => {
  let isDark = true;

  return (
    <header className="w-screen h-16 bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50">
      <div className="w-screen h-16 flex items-center justify-between p-4 ">
        <div className="w-auto h-full flex items-center space-x-2">
          <img
            src={isDark ? "/public/light-logo.png" : "/public/dark-logo.png"}
            alt=""
            className="w-auto h-full"
          />
          <span className="text-xl font-bold">University Management System</span>
        </div>

        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 cursor-pointer"
          >
            <LuLanguages />
          </button>

          <button
            type="button"
            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 cursor-pointer"
          >
            {isDark ? <MdModeNight /> : <MdLightMode />}
          </button>

          <button
            type="button"
            className="w-20 h-10 rounded-full bg-primary flex items-center justify-center text-gray-600 cursor-pointer"
          >
            <FaSignInAlt className="text-white" />
            <span className="sr-only">Login</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
