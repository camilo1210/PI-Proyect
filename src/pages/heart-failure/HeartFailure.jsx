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
          camera={{ position: [0, 2, 8], fov: 60 }}
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
          <Heartfailure position={[0, 0, 0]} scale={2.0} />
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
      

      <div className="info-section">
        <div className="card-left">
        <div className="info-title">¿Qué es?</div>
        <p>
        La Insuficiencia Cardíaca (IC) es un enfermedad crónica y degenerativa del corazón que impide que éste tenga capacidad suficiente
        para bombear la sangre y por lo tanto de hacer llegar suficiente oxígeno y nutrientes al resto de los órganos. Puede manifestarse a cualquier edad,
        aunque la probabilidad de sufrirla aumenta con los años. Según su forma de manifestarse, se clasifica en:

        Insuficiencia Cardíaca Crónica:
        La enfermedad se va manifestando gradualmente, pero los síntomas se intensifican con el paso del tiempo. Es la más frecuente.

        Insuficiencia Cardíaca Aguda:
        Los síntomas aparecen de forma repentina y son graves desde el principio. Con un tratamiento adecuado, los pacientes pueden mejorar rápidamente.
        </p>
        </div>
        
        <div className="card-right">
        <div className="info-tittle">¿Cuales son sus síntomas?</div>
        <p>
        Los síntomas predominantes son:
        <br />
            °Cansancio anormal por esfuerzos que antes no lo causaban.
            <br />
            °Respiración fatigosa incluso al estar acostado, haciendo que duermas sentado.
            <br />
            °Sensación de plenitud del abdomen, anorexia (falta de apetito).
            <br />
            °Tos seca y persistente.
            <br />
            °Sensaciones de mareo, confusión, mente en blanco y breves pérdidas de conciencia.
            <br />
            °Hinchazón en las piernas, tobillos o abdomen causado por retención de líquidos.
            <br />
            °Falta de aire (disnea) con el esfuerzo y mala tolerancia al ejercicio por fatiga 
        </p>
        </div>

        <div className="card-left">
        <div className="info-tittle">¿Qué lo causa?</div>
        <p>
          Proximamente...   
        </p>
        </div>

        <div className="card-right">
        <div className="info-tittle">¿Cómo tratarlo?</div>
        <p>
          Proximamente...   
        </p>
        </div>
      
      </div>
    </div>
  );
};

export default HeartFailure;