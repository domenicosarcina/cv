import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user, loading: false }),
  setLoading: (value) => set({ loading: value }),
}));

export default useUserStore;
