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
          text="El síndrome del corazón roto es una afección cardíaca que a menudo
              se debe a situaciones estresantes y emociones extremas. También
              puede ocasionarse por una enfermedad física grave o una cirugía.
              Suele ser temporal, pero algunas personas pueden seguir
              sintiéndose mal después de que el corazón se cure."
          Model={HeartCracksModel}
          hasButton
        />
        <Section
          title="¿Cuáles son sus síntomas?"
          text={
            <>
              <p>
                Las personas con este síndrome pueden experimentar dolor
                repentino en el pecho o pensar que están teniendo un ataque
                cardíaco.
              </p>

              <p>
                Afecta solo una parte del corazón e interrumpe brevemente la
                forma en que bombea sangre, mientras el resto sigue funcionando.
              </p>

              <p>Síntomas más comunes:</p>
              <ul>
                <li>Dolor en el pecho</li>
                <li>Falta de aire</li>
                <li>Palpitaciones</li>
                <li>Desmayos</li>
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
              <p>
                Se cree que un aumento repentino de hormonas del estrés, como la
                adrenalina, puede dañar temporalmente el corazón. Los
                desencadenantes incluyen:
              </p>

              <p>Se cree que un aumento repentino de hormonas del estrés...</p>
              <p>1. Muerte de un ser querido.</p>
              <p>2. Diagnóstico grave.</p>
              <p>3. Ruptura o separación.</p>
              <p>4. Estrés emocional o físico intenso.</p>
            </>
          }
          Model={ManModel}
          hasButton
        />
        <Section
          title="¿Cómo tratarlo?"
          text={
            <>
              <p>El tratamiento depende de la gravedad de los síntomas y es similar
                al de un ataque cardíaco. Puede incluir:</p>
              <ul>
                <li>Analgésicos para aliviar el dolor.</li>
                <li>Betabloqueadores para reducir la frecuencia cardíaca.</li>
                <li>Aspirina para mejorar la circulación y prevenir coágulos.</li>
                <li>Inhibidores de la ECA o bloqueadores de los receptores de angiotensina para reducir la presión arterial.</li>
                <li>Diuréticos para disminuir la acumulación de líquidos.</li>
                <li>Fármacos inotrópicos para mejorar la contractilidad en casos graves.</li>
                <li>Dispositivos de asistencia ventricular en casos de shock cardiogénico.</li>
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
