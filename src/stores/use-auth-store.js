import { create } from "zustand";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut,  } from "firebase/auth";
import { auth } from "../../firebase.config";
// Zustand store for authentication state management

const useAuthStore = create((set) => {
  const observerAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      user ? set({ userLooged: user }) : set({ userLooged: null });
    });
  };
  observerAuthState();
  return {
    userLooged: null,
    loginWithPopup: async (provider) => {
      try {
        return await signInWithPopup(auth, new GoogleAuthProvider());
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
    logout: async () => {
        signOut(auth).then(()=> set({ userLooged: null }))
    }
  };
});

export default useAuthStore;
