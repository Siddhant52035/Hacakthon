import { create } from "zustand";

const useUserStore = create((set, get) => ({
  user: {
    fullName: "",
    userName: "",
    email: "",
    avatar: "",
  },
  login: (userData) => {
    set({ user: { ...userData } });
    localStorage?.setItem("user", JSON.stringify(userData));
  },
  getUser: () => get().user,
  logout: () => {
    set({ user: { firstName: "", lastName: "", email: "", avatar: "" } }); // Reset user state
    localStorage?.removeItem("user"); // Remove user from localStorage
  },
}));

export default useUserStore;
