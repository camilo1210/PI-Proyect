import "./HeartFailure.css";
import { Canvas } from "@react-three/fiber";
import { Circle, OrbitControls, SoftShadows } from "@react-three/drei";
import HeartFailureModel from "./model-3d/HeartFailureModel";
import * as THREE from "three";
import HeartFailureLights from "./lights/HeartFailureLights";
import HeartModelOne from "./model-3d/HeartModelOne";
import React, { Suspense } from "react";

const HeartFailure = () => {
  return (
    <div className="heart-failure-container">
      <h1 className="heart-failure-tittle">Insuficiencia cardíaca</h1>

      <div className="model-container">
        <Canvas
          shadows
          gl={{ shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap } }}
          camera={{ position: [0, 2, 8], fov: 60 }}
        >
          <SoftShadows frustum={3.75} size={10} samples={16} focus={1} />
          <ambientLight intensity={0.5} />
          <directionalLight
            // Cambia estos valores para modificar la dirección de las sombras
            position={[-4, 6, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-radius={3}
          />
          <OrbitControls target={[0, 0, 0]} />
          <HeartFailureModel scale={2} castShadow rotation={[0, 0, 0]} />
          {/* Piso para recibir sombras */}
          <Circle
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3.2, 0]}
            args={[10, 10]}
            receiveShadow
          >
            <meshStandardMaterial color="grey" />
          </Circle>
        </Canvas>
      </div>

      <div className="labels">
        <p>Corazón normal</p>
        <p>Corazón con insuficiencia</p>
      </div>

      <div className="cards-container">
        <div className="section">
          <div className="card-left">
            <div className="title">¿Qué es?</div>
            <p>
              La Insuficiencia Cardíaca (IC) es un enfermedad crónica y
              degenerativa del corazón que impide que éste tenga capacidad
              suficiente para bombear la sangre y por lo tanto de hacer llegar
              suficiente oxígeno y nutrientes al resto de los órganos. Puede
              manifestarse a cualquier edad, aunque la probabilidad de sufrirla
              aumenta con los años. Según su forma de manifestarse, se clasifica
              en: Insuficiencia Cardíaca Crónica: La enfermedad se va
              manifestando gradualmente, pero los síntomas se intensifican con
              el paso del tiempo. Es la más frecuente. Insuficiencia Cardíaca
              Aguda: Los síntomas aparecen de forma repentina y son graves desde
              el principio. Con un tratamiento adecuado, los pacientes pueden
              mejorar rápidamente.
            </p>
          </div>

          <div className="section reverse">
            <div className="card-right">
              <div className="title">¿Cuales son sus síntomas?</div>
              <p>
                Los síntomas predominantes son:
                <br />
                °Latidos más rápidos de lo normal.
                <br />
                °Respiración fatigosa incluso al estar acostado, haciendo que
                duermas sentado.
                <br />
                °Sensación de plenitud del abdomen, anorexia (falta de apetito).
                <br />
                °Tos seca y persistente.
                <br />
                °Sensaciones de mareo, confusión, mente en blanco y breves
                pérdidas de conciencia.
                <br />
                °Hinchazón en las piernas, tobillos o abdomen causado por
                retención de líquidos.
                <br />
                °Falta de aire (disnea) con el esfuerzo y mala tolerancia al
                ejercicio por fatiga
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
                <directionalLight
                  castShadow
                  position={[2, 4, 5]}
                  intensity={1}
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
                <HeartModelOne
                  scale={8}
                  position={[0, 1.5, 0]}
                  castShadow
                  rotation={[0, 4, 0]}
                />
                <HeartFailureLights />
                <OrbitControls
                  autoRotate
                  enableZoom
                  minDistance={2}
                  maxDistance={10}
                />
              </Canvas>
            </div>
          </div>

          <div className="section">
            <div className="card-left">
              <div className="title">¿Qué lo causa?</div>
              <p>Proximamente...</p>
            </div>

            <div className="section reverse">
              <div className="card-right">
                <div className="info-title">¿Cómo tratarlo?</div>
                <p>Proximamente...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartFailure;
