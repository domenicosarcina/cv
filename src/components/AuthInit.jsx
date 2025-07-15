import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import useUserStore from "../js/userStore";
import { auth } from "../js/firebase";

export function AuthInit() {
  const setUser = useUserStore((state) => state.setUser);
  const setLoading = useUserStore((state) => state.setLoading);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user); // setta anche loading: false
    });
    return unsub;
  }, []);

  return null;
}
