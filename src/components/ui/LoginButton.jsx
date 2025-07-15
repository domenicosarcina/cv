import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../js/firebase";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

export default function LoginButton() {
  const login = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      toast.success(`Benvenuto, ${result.user.displayName.split(" ")[0]}! 👋`);
    } catch (error) {
      toast.error("Login fallito. Riprova");
    }
  };

  return (
    <button
      onClick={login}
      className="flex items-center gap-2 px-2 py-1 bg-white dark:bg-gray-900 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-xl shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
    >
      <FcGoogle className="text-xl" />
      <span>Login con Google</span>
    </button>
  );
}
