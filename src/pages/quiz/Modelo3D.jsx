import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

useGLTF.preload("/models-3d/cardiac-hypertension/healthyHeart.glb");

function Modelo() {
  const { scene } = useGLTF("/models-3d/cardiac-hypertension/healthyHeart.glb"); 
  return <primitive object={scene} scale={2} />;
}

const Modelo3D = () => {
  return (
    <Canvas style={{ width: "400px", height: "400px" }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 2]} />
      <Modelo />
      <OrbitControls />
    </Canvas>
  );
};

export default Modelo3D;