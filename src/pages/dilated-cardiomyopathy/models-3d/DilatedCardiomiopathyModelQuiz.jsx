import { useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const HeartDilatedModel2 = ({ onPointerDown }) => {
  const HeartC = useGLTF("models-3d/dilated-cardiomyopathy-models/human-heart1.glb");
  const meshRef = useRef();

  useEffect(() => {
    HeartC.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [HeartC]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.scale.set(70, 70, 70);
    }
  });

  return (
    <group
      ref={meshRef}
      castShadow
      receiveShadow
      rotation={[Math.PI / -2, 0, 0]}
      scale={1.5}
      onPointerDown={onPointerDown} // Attach the event here
    >
      {/* Bounding box invisible para mejorar el área de hover */}
      <mesh scale={[1, 1, 1]} position={[0, 0, 0]} visible={false}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      <primitive object={HeartC.scene} />
    </group>
  );
};

export default HeartDilatedModel2;

useGLTF.preload("models-3d/dilated-cardiomyopathy-models/human-heart1.glb");
