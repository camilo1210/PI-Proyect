/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Circle, OrbitControls, Text, Html, Sky, Environment } from "@react-three/drei";
import { useEffect, useState, Suspense } from "react";

// Modelos
import { BrokenHeartModel } from "./models-3d/BrokenHeartModel";
import { HeartCracksModel } from "./models-3d/HeartCracksModel";
import { HeartMonitorModel } from "./models-3d/HeartMonitorModel.jsx";
import { HeartPainModel } from "./models-3d/HeartPainModel";
import { ManModel } from "./models-3d/ManModel";

// Luces y estilos
import Lights from "./lights/Lights";
import "./BrokenHeartSyndrome.css";
import Text3dBrokenHeart from "./texts3d/Texts3DBrokenHeart.jsx";

const CANVAS_BACKGROUND_COLOR = "#e5d0ac";

const BrokenHeartSyndrome = () => {
  const [showHint, setShowHint] = useState(false);
  const [cracksVisible, setCracksVisible] = useState(false);
  const [painTriggered, setPainTriggered] = useState(false);
  const [ecgAnimationTriggered, setEcgAnimationTriggered] = useState(false);
  const [soundPlaying, setSoundPlaying] = useState(false);

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
            background: CANVAS_BACKGROUND_COLOR,
            borderRadius: "var(--border-radius)",
          }}
          gl={{
            antialias: true,
            shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap },
          }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[2, 4, 5]} castShadow intensity={1} />
          <Environment preset="studio" />
          <Circle
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -0.5, 0]}
            args={[10, 10]}
            receiveShadow
          >
            <meshStandardMaterial color={CANVAS_BACKGROUND_COLOR} />
          </Circle>
          <Suspense fallback={null}>
            <Text3dBrokenHeart title="Sindrome Del Corazon Roto" position={[0, 0, 1]} size={1} />
            <BrokenHeartModel scale={2} position={[0, 1.5, 0]} castShadow />
          </Suspense>
          <OrbitControls
            enableZoom
            autoRotate
            autoRotateSpeed={1}
            minDistance={2}
            maxDistance={10}
          />
          <Text position={[0, 3.8, 0]} fontSize={0.4} color="#ff2e63" anchorX="center" anchorY="middle">
            Haz clic o presiona la tecla "a" 💓
          </Text>
          <Html position={[3, 4, -1]}>
            <div className="heart-title-container">
              <Text3dBrokenHeart title="Síndrome del Corazón Roto" />
            </div>
          </Html>
        </Canvas>
        {showHint && (
          <div className="interaction-hint">
            💡 Haz clic en el corazón para interactuar, o presiona una tecla
          </div>
        )}
      </div>

      <div className="cards-container">
        <Section
          title="¿Qué es?"
          text="El síndrome del corazón roto es una afección cardíaca que a menudo se debe a situaciones estresantes y emociones extremas. También puede ocasionarse por una enfermedad física grave o una cirugía. Suele ser temporal, pero algunas personas pueden seguir sintiéndose mal después de que el corazón se cure."
          Model={(props) => (
            <Suspense fallback={null}>
              <Text3dBrokenHeart title="¿Qué es?" color="#a83234" position={[0, 2, 0]} size={0.5} />
              <HeartCracksModel {...props} animate={cracksVisible} onToggle={() => setCracksVisible((prev) => !prev)} />
            </Suspense>
          )}
          hasButton
          onButtonClick={() => setCracksVisible((prev) => !prev)}
          trigger={cracksVisible}
          setTrigger={setCracksVisible}
          modelScale={[5, 5, 5]}
          modelPosition={[0, 0.5, 0]}
        />

        <Section
          title="¿Cuáles son sus síntomas?"
          text={
            <>
              <p>Las personas con este síndrome pueden experimentar dolor repentino en el pecho o pensar que están teniendo un ataque cardíaco.</p>
              <p>Afecta solo una parte del corazón e interrumpe brevemente la forma en que bombea sangre, mientras el resto sigue funcionando.</p>
              <p>Síntomas más comunes:</p>
              <ul>
                <li>Dolor en el pecho</li>
                <li>Falta de aire</li>
                <li>Palpitaciones</li>
                <li>Desmayos</li>
              </ul>
            </>
          }
          Model={(props) => (
            <Suspense fallback={null}>
              <Text3dBrokenHeart title="¿Cuáles son sus síntomas?" color="#a83232" position={[0, 2.8, 0]} size={0.6} />
              <HeartPainModel {...props} />
            </Suspense>
          )}
          reverse
          hasButton
          onButtonClick={() => setPainTriggered((prev) => !prev)}
          trigger={painTriggered}
          setTrigger={setPainTriggered}
          modelScale={[5.5, 5.5, 5.5]}
          modelPosition={[0, 0.5, 0]}
          rotationModel={[0, 3.3, 0]}
        />

        <Section
          title="¿Qué lo causa?"
          text={
            <>
              <p>Se cree que un aumento repentino de hormonas del estrés, como la adrenalina, puede dañar temporalmente el corazón. Los desencadenantes incluyen:</p>
              <ul>
                <li>Muerte de un ser querido.</li>
                <li>Diagnóstico grave.</li>
                <li>Ruptura o separación.</li>
                <li>Estrés emocional o físico intenso.</li>
              </ul>
            </>
          }
          Model={(props) => (
            <Suspense fallback={null}>
              <Text3dBrokenHeart title="¿Qué lo causa?" color="#a83232" position={[0, 1.5, 1]} size={0.5} />
              <ManModel {...props} />
            </Suspense>
          )}
          hasButton
          onButtonClick={() => setSoundPlaying((prev) => !prev)}
          setTrigger={setSoundPlaying}
          playSound={soundPlaying}
          modelScale={[6, 6, 6]}
          modelPosition={[0, 0.4, 0]}
          rotationModel={[0, 3, 0]}
        />

        <Section
          title="¿Cómo tratarlo?"
          text={
            <>
              <p>El tratamiento depende de la gravedad de los síntomas y es similar al de un ataque cardíaco. Puede incluir:</p>
              <ul>
                <li>Analgésicos para aliviar el dolor.</li>
                <li>Betabloqueadores para reducir la frecuencia cardíaca.</li>
                <li>Aspirina para mejorar la circulación y prevenir coágulos.</li>
                <li>Inhibidores de la ECA o bloqueadores de los receptores de angiotensina para reducir la presión arterial.</li>
                <li>Diuréticos para disminuir la acumulación de líquidos.</li>
                <li>Fármacos inotrópicos para mejorar la contractilidad en casos graves.</li>
                <li>Dispositivos de asistencia ventricular en casos de shock cardiogénico.</li>
              </ul>
            </>
          }
          Model={(props) => (
            <Suspense fallback={null}>
              <Text3dBrokenHeart title="¿Cómo tratarlo?" color="#a83232" position={[0, 2.6, 0.5]} size={0.5} />
              <HeartMonitorModel {...props} />
            </Suspense>
          )}
          reverse
          hasButton
          onButtonClick={() => setEcgAnimationTriggered((prev) => !prev)}
          trigger={ecgAnimationTriggered}
          setTrigger={setEcgAnimationTriggered}
          modelScale={[6, 6, 6]}
          modelPosition={[0, 1.2, 0]}
        />
      </div>
    </div>
  );
};



const Section = ({
  title,
  text,
  Model,
  reverse,
  hasButton = false,
  trigger,
  setTrigger,
  playSound,
  modelScale,
  modelPosition,
  rotationModel,
}) => (
  <div className={`section ${reverse ? "reverse" : ""}`}>
    <div className={`card ${reverse ? "right" : "left"}`}>
      <div className="title">{title}</div>
      <div className="section-text">{text}</div>
    </div>
    <div className="card-model" style={{ position: "relative" }}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{
          width: "100%",
          height: "300px",
          background: CANVAS_BACKGROUND_COLOR,
          borderRadius: "var(--border-radius)",
        }}
        gl={{
          antialias: true,
          shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap },
        }}
      >
        <Sky sunPosition={[100, 20, 100]} />
        <Circle
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
          args={[10, 10]}
          receiveShadow
        >
          <meshStandardMaterial color={CANVAS_BACKGROUND_COLOR} />
        </Circle>

        {typeof Model === "function" ? (
          <Model
            scale={modelScale}
            position={modelPosition}
            castShadow
            rotation={rotationModel}
            trigger={trigger}  // PASAMOS EL TRIGGER AQUÍ
            playSound={playSound}
          />
        ) : null}

        <Lights />
        <OrbitControls autoRotate enableZoom minDistance={2} maxDistance={10} />

        {/* Botón dentro del Canvas */}
        {hasButton && (
          <Html position={[0, -3.5, 0]} center style={{ pointerEvents: "auto" }}>
            <button
              onClick={() => setTrigger((prev) => !prev)}
              style={{
                padding: "12px 20px",
                fontSize: "16px",
                borderRadius: "10px",
                backgroundColor: "#800000",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                userSelect: "none",
              }}
            >
              {trigger ? "Detener Animación" : "Activar Animación"}
            </button>
          </Html>
        )}
      </Canvas>
    </div>
  </div>
);



export default BrokenHeartSyndrome;
