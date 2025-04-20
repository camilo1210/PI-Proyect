import "./HeartFailure.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React from "react";
import Heartfailure from "./model-3d/HeartFailureModel";

const HeartFailure = () => {
  return (
    <div className="heart-failure">
      <h1>Insuficiencia cardíaca</h1>

      <Canvas
          className="heart-canvas"
          shadows
          camera={{ position: [0, 2, 5], fov: 50 }}
          style={{ width: "100%", height: "100%" }}
        >
          <ambientLight intensity={1.8} />
          <directionalLight
            castShadow
            position={[5, 10, 5]}
            intensity={2}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
         <pointLight position={[-5, 5, -5]} intensity={1.5} />
          <Heartfailure position={[0, 0, 0]} scale={1.5} />
          {/* Suelo para recibir sombra */}
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -1, 0]}
          >
            <planeGeometry args={[20, 20]} />
            <shadowMaterial opacity={0.3} />
          </mesh>
          {/* Controles para girar la cámara */}
          <OrbitControls enableZoom enablePan />
        </Canvas>

        <div className="labels">
          <p>Corazón normal</p>
          <p>Corazón con insuficiencia</p>
        </div>
      

      <section className="info-section">
        <div className="info-title">¿Qué es?</div>
        <p>
          La insuficiencia cardíaca es una condición en la que el corazón no puede
          bombear sangre de manera eficiente para satisfacer las necesidades del cuerpo.
          Puede deberse a debilidad del músculo cardíaco, rigidez o problemas estructurales.
        </p>
      </section>
    </div>
  );
};

export default HeartFailure;