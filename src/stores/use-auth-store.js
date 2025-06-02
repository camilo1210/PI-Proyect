import { create } from "zustand";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase.config";
// Zustand store for authentication state management

const provider = new GoogleAuthProvider();

const useAuthStore = create((set) => {
  const observeAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      user ? set({ userLogged: user }) : set({ userLogged: null });
    });
  };
  observeAuthState();

  return {
    userLogged: null,

    loginGoogleWithPopUp: async () => {
      try {
        return await signInWithPopup(auth, provider);
      } catch (error) {
        console.error("Error logging in:", error);
      }
    },

    logout: async () => {
      return await signOut(auth)
        .then(() => set({ userLogged: null }))
        .catch((error) => console.error("Error logging out:", error));
    },
  };
});

export default useAuthStore;


