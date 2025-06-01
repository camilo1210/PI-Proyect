/* eslint-disable react/no-unknown-property */
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Lights = () => {
  const spotLightRef = useRef();


  return (
    <>
      {/* Luz ambiental básica */}
      <ambientLight intensity={1} />

      {/* Luz direccional extra para rellenar sombras */}
      <directionalLight position={[5, 5, 5]} intensity={0.3} />

      {/* Spot animado en latido  */ }
      <spotLight
        ref={spotLightRef}
        position={[0, 3, 0]}
        // color="blue"
        distance={10}
        intensity={0.3}
        angle={Math.PI / 8}
        // penumbra={0.4}
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