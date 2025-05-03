/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {OrbitControls } from "@react-three/drei";
import Lights from "./lights/Lights";
import { Model } from "./models-3d/BrokenHeartModel";
import { Circle } from "@react-three/drei";
import "./BrokenHeartSyndrome.css";

const BrokenHeartSyndrome = () => {
  return (
    <div className="broken-heart-container">
      <h1 className="broken-heart-title">Síndrome del corazón roto</h1>

      <div className="model-container">
        <Canvas
          shadows
          camera={{ position: [0, 1, 8], fov: 50 }}
          style={{
            width: "100%",
            height: 300,
            background: "#f0f0f0",
            borderRadius: "12px",
          }}
          gl={{
            antialias: true,
            shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap },
          }}
        >
          <ambientLight intensity={0.4} />

          <directionalLight
            castShadow
            position={[2, 4, 5]}
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-radius={3}
          />

          {/* Piso para proyectar sombra visible */}
          <Circle
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -0.5, 0]}
            args={[10, 10]}
            receiveShadow
          >
            <meshStandardMaterial color="#f0f0f0" />
          </Circle>

          
          <Model scale={2} position={[0, 1.5, 0]} castShadow />

          <OrbitControls
            enableZoom
            maxDistance={10}
            minDistance={2}
            autoRotate
            autoRotateSpeed={1}
          />
        </Canvas>
      </div>

      <div className="cards-container">
        <div className="card left">
          <div className="title">¿Qué es?</div>
          <p>
            El síndrome del corazón roto es una afección cardíaca que a menudo
            se debe a situaciones estresantes y emociones extremas. También
            puede ocasionarse por una enfermedad física grave o una cirugía. El
            síndrome del corazón roto suele ser temporal, pero algunas personas
            pueden seguir sintiéndose mal después de que el corazón se cure.
          </p>
        </div>

        <div className="card right">
          <div className="title">¿Cuáles son sus síntomas?</div>
          <p>
            Las personas con síndrome del corazón roto pueden experimentar dolor
            repentino en el pecho o pensar que están teniendo un ataque
            cardíaco. Afecta solo una parte del corazón e interrumpe brevemente
            la forma en que bombea sangre, mientras el resto del corazón sigue
            funcionando. A veces, el corazón se contrae con más fuerza.
            <br />
            <br />
            Los síntomas incluyen:
            <br />
            1. Dolor en el pecho.
            <br />
            2. Falta de aire.
          </p>
        </div>

        <div className="card left">
          <div className="title">¿Qué lo causa?</div>
          <p>
            Se cree que un aumento repentino de hormonas del estrés, como la
            adrenalina, puede dañar temporalmente el corazón. Este síndrome
            puede desencadenarse por:
            <br />
            1. La muerte de un ser querido.
            <br />
            2. Un diagnóstico grave.
            <br />
            3. Una ruptura o separación.
            <br />
            4. Estrés emocional intenso.
            <br />
            5. Estrés físico intenso, como una enfermedad grave o cirugía.
          </p>
        </div>

        <div className="card right">
          <div className="title">¿Cómo tratarlo?</div>
          <p>
            El tratamiento depende de la gravedad de los síntomas y es similar
            al de un ataque cardíaco. Puede incluir:
            <br />
            1. Analgésicos para aliviar el dolor.
            <br />
            2. Betabloqueadores para reducir la frecuencia cardíaca.
            <br />
            3. Aspirina para mejorar la circulación y prevenir coágulos.
            <br />
            4. Inhibidores de la ECA o bloqueadores de los receptores de
            angiotensina para reducir la presión arterial.
            <br />
            5. Diuréticos para disminuir la acumulación de líquidos.
            <br />
            6. Fármacos inotrópicos para mejorar la contractilidad en casos
            graves.
            <br />
            7. Dispositivos de asistencia ventricular en casos de shock
            cardiogénico.
            <br />
            <br />
            Recuperación: La mayoría de las personas se recuperan por completo
            en aproximadamente un mes, realizando un ecocardiograma para
            asegurar el buen funcionamiento del corazón. A veces, el síndrome
            puede reaparecer después del tratamiento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrokenHeartSyndrome;
