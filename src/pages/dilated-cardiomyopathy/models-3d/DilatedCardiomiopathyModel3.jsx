import { useGLTF, Html } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const HeartDilatedModel3 = () => {
  const HeartC = useGLTF("models-3d/dilated-cardiomyopathy-models/human-heart2.glb");
  const meshRef = useRef();
  const [scaleFactor, setScaleFactor] = useState(1);

  // Evento de mouse: click para escalar
  const handleClick = () => {
    setScaleFactor(1.4);
    setTimeout(() => setScaleFactor(1), 1000);
  };

  // Evento de teclado SOLO si mouse está sobre el modelo
  const [hovered, setHovered] = useState(false);
  React.useEffect(() => {
    if (!hovered) return;
    const handleKeyDown = (e) => {
      if (e.key === "h") {
        setScaleFactor(1.4);
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
      autorotate
      position={[0, 2, 0]}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Bounding box invisible para mejorar el área de hover */}
      <mesh scale={[30, 30, 30]} position={[0, 0, 0]} visible={false}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      <primitive object={HeartC.scene} />
      {/* HTML 3D H1 acomodado para que siempre se vea arriba del corazón */}
      <Html position={[0, 0.2, 0.6]} center>
        <h1 style={{
          background: "rgba(255,255,255,0.92)",
          padding: "12px 22px",
          borderRadius: "14px",
          color: "#a31d1d",
          fontWeight: "bold",
          fontSize: "1.2rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          margin: 0,
          textAlign: "left",
          minWidth: "220px"
        }}>
          Dale click al corazón<br />o presiona H
        </h1>
      </Html>
    </group>
  );
};

export default HeartDilatedModel3;

useGLTF.preload("models-3d/dilated-cardiomyopathy-models/human-heart2.glb");
