/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Circle } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { BrokenHeartModel } from "./models-3d/BrokenHeartModel";
import { HeartCracksModel } from "./models-3d/HeartCracksModel";
import { HeartEGCModel } from "./models-3d/HeartEGCModel";
import { HeartPainModel } from "./models-3d/HeartPainModel";
import "./BrokenHeartSyndrome.css";
import { ManModel } from "./models-3d/ManModel";
import Lights from "./lights/Lights";
const BrokenHeartSyndrome = () => {
  return (
    <div className="broken-heart-container">
      <h1 className="broken-heart-title">Síndrome del corazón roto</h1>

      {/* Primer modelo centrado */}
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

          <BrokenHeartModel scale={2} position={[0, 1.5, 0]} castShadow />

          <OrbitControls
            enableZoom
            maxDistance={10}
            minDistance={2}
            autoRotate
            autoRotateSpeed={1}
          />
        </Canvas>
      </div>

      {/* Tarjetas con modelos a los lados */}
      <div className="cards-container">
        {/* Card 1 */}
        <div className="broken-heart-section">
          <div className="card left">
            <div className="title">¿Qué es?</div>
            <p>
              El síndrome del corazón roto es una afección cardíaca que a menudo
              se debe a situaciones estresantes y emociones extremas. También
              puede ocasionarse por una enfermedad física grave o una cirugía.
              Suele ser temporal, pero algunas personas pueden seguir
              sintiéndose mal después de que el corazón se cure.
            </p>
          </div>
          <div className="card-model">
            <Canvas
              shadows
              camera={{ position: [20, 10, 20], fov: 50 }}
              style={{
                width: "100%",
                height: "300px",
                background: "#f0f0f0",
                borderRadius: "12px",
              }}
              gl={{
                antialias: true,
                shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap },
              }}
            >
              <ambientLight intensity={0.4} />
              <directionalLight castShadow position={[2, 4, 5]} intensity={1} />
              {/* Piso para proyectar sombra visible */}
              <Circle
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -0.5, 0]}
                args={[10, 10]}
                receiveShadow
              >
                <meshStandardMaterial color="#f0f0f0" />
              </Circle>
              <HeartCracksModel scale={8} position={[0, 1.70, 0]} castShadow rotation={[0, 4, 0]}/>
              <OrbitControls
                autoRotate
                enableZoom
                minDistance={2}
                maxDistance={10}
              />
            </Canvas>
          </div>
        </div>

        {/* Card 2 */}
        <div className="broken-heart-section reverse">
          <div className="card right">
            <div className="title">¿Cuáles son sus síntomas?</div>
            <p>
              Las personas con este síndrome pueden experimentar dolor repentino
              en el pecho o pensar que están teniendo un ataque cardíaco. Afecta
              solo una parte del corazón e interrumpe brevemente la forma en que
              bombea sangre, mientras el resto sigue funcionando.
              <br />
              <br />
              Síntomas comunes:
              <br />
              1. Dolor en el pecho.
              <br />
              2. Falta de aire.
            </p>
          </div>
          <div className="card-model">
            <Canvas
              shadows
              camera={{ position: [20, 10, 20], fov: 50 }}
              style={{
                width: "100%",
                height: "300px",
                background: "#f0f0f0",
                borderRadius: "12px",
              }}
              gl={{
                antialias: true,
                shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap },
              }}
            >
              <ambientLight intensity={0.4} />
              <directionalLight castShadow position={[2, 4, 5]} intensity={1} />
              {/* Piso para proyectar sombra visible */}
              <Circle
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -0.5, 0]}
                args={[10, 10]}
                receiveShadow
              >
                <meshStandardMaterial color="#f0f0f0" />
              </Circle>
              <HeartPainModel scale={8} position={[0, 1.5, 0]} castShadow rotation={[0, 4, 0]}/>
              <Lights />
              <OrbitControls
                autoRotate
                enableZoom
                minDistance={2}
                maxDistance={10}
              />
            </Canvas>
          </div>
        </div>

        {/* Card 3 */}
        <div className="broken-heart-section">
          <div className="card left">
            <div className="title">¿Qué lo causa?</div>
            <p>
              Se cree que un aumento repentino de hormonas del estrés, como la
              adrenalina, puede dañar temporalmente el corazón. Los
              desencadenantes incluyen:
              <br />
              1. Muerte de un ser querido.
              <br />
              2. Diagnóstico grave.
              <br />
              3. Ruptura o separación.
              <br />
              4. Estrés emocional o físico intenso.
            </p>
          </div>
          <div className="card-model">
            <Canvas
              shadows
              camera={{ position: [20, 10, 20], fov: 50 }}
              style={{
                width: "100%",
                height: "300px",
                background: "#f0f0f0",
                borderRadius: "12px",
              }}
              gl={{
                antialias: true,
                shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap },
              }}
            >
              <ambientLight intensity={0.4} />
              <directionalLight castShadow position={[2, 4, 5]} intensity={1} />
              {/* Piso para proyectar sombra visible */}
              <Circle
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -0.5, 0]}
                args={[10, 10]}
                receiveShadow
              >
                <meshStandardMaterial color="#f0f0f0" />
              </Circle>
              <ManModel scale={8} position={[0, 1.5, 0]} castShadow rotation={[0, 4, 0]}/>
              <Lights />
              <OrbitControls
                autoRotate
                enableZoom
                minDistance={2}
                maxDistance={10}
              />
            </Canvas>
          </div>
        </div>

        {/* Card 4 */}
        <div className="broken-heart-section reverse">
          <div className="card right">
            <div className="title">¿Cómo tratarlo?</div>
            <p>
              El tratamiento depende de la gravedad e incluye:
              <br />
              1. Analgésicos.
              <br />
              2. Betabloqueadores.
              <br />
              3. Aspirina.
              <br />
              4. Inhibidores de ECA.
              <br />
              5. Diuréticos.
              <br />
              6. Fármacos inotrópicos.
              <br />
              7. Dispositivos de asistencia ventricular.
              <br />
              <br />
              La mayoría se recupera en un mes.
            </p>
          </div>
          <div className="card-model">
            <Canvas
              shadows
              camera={{ position: [20, 10, 20], fov: 50 }}
              style={{
                width: "100%",
                height: "300px",
                background: "#f0f0f0",
                borderRadius: "12px",
              }}
              gl={{
                antialias: true,
                shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap },
              }}
            >
              <ambientLight intensity={0.4} />
              <directionalLight castShadow position={[2, 4, 5]} intensity={1} />
              {/* Piso para proyectar sombra visible */}
              <Circle
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -0.5, 0]}
                args={[10, 10]}
                receiveShadow
              >
                <meshStandardMaterial color="#f0f0f0" />
              </Circle>
              <HeartEGCModel scale={8} position={[0, 1.70, 0]} castShadow />
              <OrbitControls
                autoRotate
                enableZoom
                minDistance={2}
                maxDistance={10}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokenHeartSyndrome;
