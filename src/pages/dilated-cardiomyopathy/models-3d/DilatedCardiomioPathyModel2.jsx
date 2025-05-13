import { useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const HeartDilatedModel2 = () => {
  const HeartC = useGLTF("models-3d/dilated-cardiomyopathy-models/human-heart1.glb");
  const meshRef = useRef();

  return (
    <group ref={meshRef} castShadow rotation={[Math.PI / -2, 0, 0]} scale={70}>
      <primitive object={HeartC.scene} />
    </group>
  );

};

export default HeartDilatedModel2;

useGLTF.preload("models-3d/dilated-cardiomyopathy-models/human-heart1.glb");
