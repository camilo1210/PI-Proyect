/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Circle, Html, OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";

// Modelos
import { BrokenHeartModel } from "./models-3d/BrokenHeartModel";
import { HeartCracksModel } from "./models-3d/HeartCracksModel";
import { HeartEGCModel } from "./models-3d/HeartEGCModel";
import { HeartPainModel } from "./models-3d/HeartPainModel";
import { ManModel } from "./models-3d/ManModel";

// Luces y estilos
import Lights from "./lights/Lights";
import "./BrokenHeartSyndrome.css";

const BrokenHeartSyndrome = () => {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHint(true);
      setTimeout(() => setShowHint(false), 4000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="model-container">
        <Canvas
          shadows
          camera={{ position: [0, 1, 8], fov: 50 }}
          style={{
            width: "112%",
            height: 300,
            background: "var(--canvas-bg)",
            borderRadius: "var(--border-radius)",
          }}
          gl={{
            antialias: true,
            shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap },
          }}
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

          <OrbitControls
            enableZoom
            autoRotate
            autoRotateSpeed={1}
            minDistance={2}
            maxDistance={10}
          />

          <Html position={[3, 4, -1]}>
            <div className="heart-title-container">
              <h1 className="heart-title">Síndrome del Corazón Roto</h1>
            </div>
          </Html>

        
        </Canvas>

        {/* Mensaje de guía */}
        {showHint && (
          <div className="interaction-hint">
            💡 Haz clic en el corazón para interactuar, o presiona una tecla 
          </div>
        )}
      </div>

      {/* Secciones informativas */}
      <div className="cards-container">
        <Section
          title="¿Qué es?"
          text="El síndrome del corazón roto es una afección cardíaca que a menudo se debe a situaciones estresantes y emociones extremas..."
          Model={HeartCracksModel}
          hasButton
        />
        <Section
          title="¿Cuáles son sus síntomas?"
          text={
            <>
              <p>Las personas con este síndrome pueden experimentar dolor...</p>
              <ul>
                <li>Dolor en el pecho</li>
                <li>Falta de aire</li>
              </ul>
            </>
          }
          Model={HeartPainModel}
          reverse
          hasButton
        />
        <Section
          title="¿Qué lo causa?"
          text={
            <>
              <p>Se cree que un aumento repentino de hormonas del estrés...</p>
              <p>1. Muerte de un ser querido.</p>
              <p>2. Diagnóstico grave.</p>
            </>
          }
          Model={ManModel}
          hasButton
        />
        <Section
          title="¿Cómo tratarlo?"
          text={
            <>
              <p>El tratamiento depende de la gravedad de los síntomas...</p>
              <ul>
                <li>Analgésicos</li>
                <li>Betabloqueadores</li>
                <li>Aspirina</li>
              </ul>
            </>
          }
          Model={HeartEGCModel}
          reverse
          hasButton
        />
      </div>
    </div>
  );
};

// Componente reutilizable de sección con texto y modelo 3D
const Section = ({ title, text, Model, reverse, hasButton }) => (
  <div className={`section ${reverse ? "reverse" : ""}`}>
    <div className={`card ${reverse ? "right" : "left"}`}>
      <div className="title">{title}</div>
      <p>{text}</p>
    </div>
    <div className="card-model">
      <Canvas
        shadows
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{
          width: "100%",
          height: "300px",
          background: "var(--canvas-bg)",
          borderRadius: "var(--border-radius)",
        }}
        gl={{
          antialias: true,
          shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap },
        }}
      >
        <Circle
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.5, 0]}
          args={[10, 10]}
          receiveShadow
        >
          <meshStandardMaterial color="var(--canvas-bg)" />
        </Circle>

        {/* Modelo 3D */}
        <Model
          scale={2.5}
          position={[0, 2, 0]}
          castShadow
          rotation={[0, 4, 0]}
        />

        {/* Botón HTML 3D */}
        {hasButton && (
          <Html position={[0, -1, 4]}>
            <button
              style={{
                padding: "12px 20px",
                fontSize: "16px",
                borderRadius: "10px",
                backgroundColor: "#800000",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                transform: "rotateY(-10deg)",
                boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
              }}
              onClick={() => alert("¡Gracias por interactuar!")}
            >
              Participar
            </button>
          </Html>
        )}

        <Lights />
        <OrbitControls autoRotate enableZoom minDistance={2} maxDistance={10} />
      </Canvas>
    </div>
  </div>
);

export default BrokenHeartSyndrome;
