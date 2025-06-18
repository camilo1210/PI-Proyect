import { useGLTF, Text3D, Center } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const HeartDilatedModel2 = () => {
  const HeartC = useGLTF("models-3d/dilated-cardiomyopathy-models/human-heart1.glb");
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
      meshRef.current.scale.set(70 * scaleFactor, 70 * scaleFactor, 70 * scaleFactor);
    }
  });

  return (
    <group
      ref={meshRef}
      castShadow
      receiveShadow
      rotation={[Math.PI / -2, 0, 0]}
      scale={1}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Bounding box invisible para mejorar el área de hover */}
      <mesh scale={[1, 1, 1]} position={[0, 0, 0]} visible={false}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      <primitive object={HeartC.scene} />
      {/* Texto 3D agregado */}
      <Center position={[0.04, -0.03, 0.02]}>
        <Text3D
          font="/Fonts/Arial.json"
          size={0.02}
          height={0.01}
          bevelEnabled
          bevelSize={0.0002}
          bevelThickness={0}
          rotation={[1.6, Math.PI /  3, 0]} 
        >
          {"Que Es?"}
          <meshStandardMaterial color="#ff0000" />
        </Text3D>
      </Center>
    </group>
  );
};

export default HeartDilatedModel2;

useGLTF.preload("models-3d/dilated-cardiomyopathy-models/human-heart1.glb");
