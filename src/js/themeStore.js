import { create } from "zustand";
import { persist } from "zustand/middleware";

const useThemeStore = create(
  persist(
    (set) => ({
      darkMode: false,
      toggleDarkMode: () =>
        set((state) => {
          const newMode = !state.darkMode;
          document.documentElement.classList.toggle("dark", newMode);
          return { darkMode: newMode };
        }),
      setDarkMode: (value) => {
        document.documentElement.classList.toggle("dark", value);
        set({ darkMode: value });
      },
    }),
    {
      name: "theme",
    }
  )
);

export default useThemeStore;
