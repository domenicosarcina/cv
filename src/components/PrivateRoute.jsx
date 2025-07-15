import { Navigate } from "react-router-dom";
import useUserStore from "../js/userStore";
import Loader from "./ui/Loader";

export default function PrivateRoute({ children }) {
  const { user, loading } = useUserStore();

  if (loading) return <Loader />;
  return user ? children : <Navigate to="/" replace />;
}
