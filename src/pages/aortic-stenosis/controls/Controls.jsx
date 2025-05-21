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

  
/*   useFrame(() => {
    const { left, right, up, down } = get();
    if (up || down || left || right) {
      console.log("Keybord pressed");
    }
    const pressed = get().back;
  }); */
};

export default Controls;
