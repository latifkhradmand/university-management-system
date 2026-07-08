import { FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LoginButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="flex h-10 w-20 items-center justify-center rounded-full bg-blue-600 text-gray-600 transition hover:bg-blue-700"
      onClick={() => navigate("/login")}
    >
      <FaSignInAlt className="text-white" />
      <span className="sr-only">Login</span>
    </button>
  );
}

export default LoginButton;
