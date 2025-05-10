/* eslint-disable react/no-unknown-property */
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Lights = () => {
  const spotLightRef = useRef();

  return (
    <>
      {/* Luz ambiental básica */}
      <ambientLight intensity={0.8} />

      {/* Luz direccional extra para rellenar sombras */}
      <directionalLight
          castShadow
          position={[5, 5, 5]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={1}
          shadow-camera-far={20}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

      {/* Spot animado en latido  */}
      <spotLight
        ref={spotLightRef}
        position={[0, 3, 0]}
        color="#ff4f5e"
        distance={10}
        intensity={2.5}
        angle={Math.PI / 8}
        penumbra={0.4}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0005}
        shadow-radius={4}
      />
    </>
  );
};

export default Lights;
