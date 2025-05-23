import { OrbitControls, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";

const Controls = () => {
  const [sub, get] = useKeyboardControls();

  useFrame(() => {
    const { forward, back, left, right } = get();
    if (forward || back || left || right) {
      console.log("moving");
    }

    // eslint-disable-next-line no-unused-vars
    const pressed = get().back;
  });
};

export default Controls;
