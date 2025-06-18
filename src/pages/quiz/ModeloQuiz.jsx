import React from "react";
import { OrbitControls } from "@react-three/drei";
import { BrokenHeartModelHome } from "../broken-heart-syndrome/models-3d/BrokenHeartModelHome";
import { Model as HealthyHeartModel } from "../cardiac-hypertension/models-3d/HealthyHeartModel";

const ModeloQuiz = ({ onModelClick }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    const name = e.object.parent.name || e.object.name;
    if (onModelClick && name) {
      onModelClick(name);
    }
  };

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        intensity={0.7}
        position={[50, 100, 50]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <mesh rotation-x={-Math.PI / 2} receiveShadow>
        <circleGeometry args={[80, 64]} />
        <meshStandardMaterial color="#4caf50" roughness={0.8} />
      </mesh>

      <group position={[-20, 10, 0]} name="heartHealthy" scale={[10, 10, 10]}>
        {/* Healthy Heart Model */}
        <HealthyHeartModel onClick={handleClick} />
      </group>

      <group position={[20, 10, 0]} name="heartRotten" scale={[10, 10, 10]}>
        <BrokenHeartModelHome onClick={handleClick} />
      </group>

      <OrbitControls target={[0, 10, 0]} />
    </>
  );
};

export default ModeloQuiz;
