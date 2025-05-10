/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Circle, OrbitControls } from "@react-three/drei";
import { BrokenHeartModel } from "./models-3d/BrokenHeartModel";
import { HeartCracksModel } from "./models-3d/HeartCracksModel";
import { HeartEGCModel } from "./models-3d/HeartEGCModel";
import { HeartPainModel } from "./models-3d/HeartPainModel";
import {ManModel} from "./models-3d/ManModel";
import Lights from "./lights/Lights";
import "./BrokenHeartSyndrome.css";

const BrokenHeartSyndrome = () => {
  return (
    <div className="container">
      <h1 className="broken-heart-title">Síndrome del corazón roto</h1>

      {/* Modelo central */}
      <div className="model-container">
        <Canvas
          shadows
          camera={{ position: [0, 1, 8], fov: 50 }}
          style={{
            width: "100%",
            height: 300,
            background: "var(--canvas-bg)",
            borderRadius: "var(--border-radius)",
          }}
          gl={{ antialias: true, shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap } }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[2, 4, 5]} castShadow intensity={1} />
          <Circle
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -0.5, 0]}
            args={[10, 10]}
            receiveShadow
          >
            <meshStandardMaterial color="var(--canvas-bg)" />
          </Circle>
          <BrokenHeartModel scale={2} position={[0, 1.5, 0]} castShadow />
          <OrbitControls enableZoom autoRotate autoRotateSpeed={1} minDistance={2} maxDistance={10} />
        </Canvas>
      </div>

      {/* Secciones informativas */}
      <div className="cards-container">

        {/* ¿Qué es? */}
        <Section
          title="¿Qué es?"
          text="El síndrome del corazón roto es una afección cardíaca que a menudo se debe a situaciones estresantes y emociones extremas..."
          Model={HeartCracksModel}
        />

        {/* ¿Cuáles son sus síntomas? */}
        <Section
          title="¿Cuáles son sus síntomas?"
          text="Dolor en el pecho y falta de aire son síntomas comunes. Se puede confundir con un ataque cardíaco..."
          Model={HeartPainModel}
          reverse
        />

        {/* ¿Qué lo causa? */}
        <Section
          title="¿Qué lo causa?"
          text="Estrés físico o emocional extremo como la muerte de un ser querido o una separación puede detonar esta condición..."
          Model={ManModel}
        />

        {/* ¿Cómo tratarlo? */}
        <Section
          title="¿Cómo tratarlo?"
          text="El tratamiento depende de la gravedad: analgésicos, betabloqueadores, aspirina, entre otros. La mayoría se recupera en un mes."
          Model={HeartEGCModel}
          reverse
        />
      </div>
    </div>
  );
};

// Componente de sección reutilizable
const Section = ({ title, text, Model, reverse }) => (
  <div className={`section ${reverse ? "reverse" : ""}`}>
    <div className={`card ${reverse ? "right" : "left"}`}>
      <div className="title">{title}</div>
      <p>{text}</p>
    </div>
    <div className="card-model">
      <Canvas
        shadows
        camera={{ position: [20, 10, 20], fov: 50 }}
        style={{
          width: "100%",
          height: "300px",
          background: "var(--canvas-bg)",
          borderRadius: "var(--border-radius)",
        }}
        gl={{ antialias: true, shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap } }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 4, 5]} castShadow intensity={1} />
        <Circle
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.5, 0]}
          args={[10, 10]}
          receiveShadow
        >
          <meshStandardMaterial color="var(--canvas-bg)" />
        </Circle>
        <Model scale={8} position={[0, 1.6, 0]} castShadow rotation={[0, 4, 0]} />
        <Lights />
        <OrbitControls autoRotate enableZoom minDistance={2} maxDistance={10} />
      </Canvas>
    </div>
  </div>
);

export default BrokenHeartSyndrome;
