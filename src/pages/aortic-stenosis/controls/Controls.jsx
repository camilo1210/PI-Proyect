import { OrbitControls, useKeyboardControls } from "@react-three/drei";
import { useEffect } from "react";

const Controls = () => {
  const { sub, get } = useKeyboardControls();

  useEffect(() => {
    return sub(
        (state) => state.down,
        (pressed) => console.log(pressed)
    );
  }, [sub]);

  

};

export default Controls;
