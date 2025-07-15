import { Navigate } from "react-router-dom";
import useUserStore from "../js/userStore";

export default function PrivateRoute({ children }) {
  const { user, loading } = useUserStore();

  if (loading) return <p>Loading...</p>;
  return user ? children : <Navigate to="/" replace />;
}
