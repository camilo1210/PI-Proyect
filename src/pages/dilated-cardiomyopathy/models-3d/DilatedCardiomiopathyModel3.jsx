import { useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const HeartDilatedModel3 = () => {
  const HeartC = useGLTF("models-3d/dilated-cardiomyopathy-models/human-heart2.glb");
  const meshRef = useRef();
  return (
    <group ref={meshRef} castShadow  scale={10} autorotate position={[0, 2, 0]}>
      <primitive object={HeartC.scene} />
    </group>
  );

};

export default HeartDilatedModel3;

useGLTF.preload("models-3d/dilated-cardiomyopathy-models/human-heart2.glb");
