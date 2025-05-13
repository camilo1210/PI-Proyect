import { create } from "zustand";

const usePersonStore = create((set) => ({
  currentAnimation: "walking", // Animación inicial
  setCurrentAnimation: (animation) =>
    set(() => ({ currentAnimation: animation })), // Actualiza la animación
}));

export default usePersonStore;