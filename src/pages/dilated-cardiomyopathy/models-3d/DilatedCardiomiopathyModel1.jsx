import { useGLTF } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const HeartDilatedModel1 = (props) => {
  const HeartC = useGLTF("models-3d/dilated-cardiomyopathy-models/human-heart0.glb");
  const meshRef = useRef();
  const [scaleFactor, setScaleFactor] = useState(1);

  // Evento de mouse: click para escalar al doble
  const handleClick = () => {
    setScaleFactor(2);
    setTimeout(() => setScaleFactor(1), 1000);
  };

  // Evento de teclado SOLO si mouse está sobre el modelo
  const [hovered, setHovered] = useState(false);
  React.useEffect(() => {
    if (!hovered) return;
    const handleKeyDown = (e) => {
      if (e.key === "h") {
        setScaleFactor(2);
        setTimeout(() => setScaleFactor(1), 1000);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hovered]);

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
      meshRef.current.scale.set(10 * scaleFactor, 10 * scaleFactor, 10 * scaleFactor);
    }
  });

  return (
    <group
      ref={meshRef}
      castShadow
      receiveShadow
      scale={1}
      position={[0, 1.6, 0]}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      {...props}
    >
      {/* Bounding box invisible para mejorar el área de hover */}
      <mesh scale={[30, 30, 30]} position={[0, 0, 0]} visible={false}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      <primitive object={HeartC.scene} />
    </group>
  );
};

export default HeartDilatedModel1;

useGLTF.preload("models-3d/dilated-cardiomyopathy-models/human-heart0.glb");
