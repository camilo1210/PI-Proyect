import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Circle, OrbitControls, SoftShadows } from "@react-three/drei";
import HeartFailureModel from "./model-3d/HeartFailureModel";
import HeartModelOne from "./model-3d/HeartModelOne";
import Staging from "./staging/Staging";
import React, {useState, useRef} from "react";
import "./HeartFailure.css";
import CigarettesModel from "./model-3d/CigarettesModel";
import Text3DHeartFailure from "./texts3d/Text3DHeartFailure"

const HeartFailure = () => {
const [audio, setAudio] = useState(null); // Estado para almacenar el audio actual
  const audioRef = useRef(null); // Referencia para el audio, así podemos detenerlo

  // Función para reproducir el sonido de latido normal
  const heartBeatingNormal = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // Detiene el audio anterior
      audioRef.current.currentTime = 0; // Reestablece el tiempo del audio anterior
    }
    const newAudio = new Audio("/sounds/heart-beating-normal.mp3"); // Ruta al archivo de latido normal
    newAudio.volume = 1.0;
    newAudio.play();
    setAudio(newAudio); // Guardamos la referencia al audio
    audioRef.current = newAudio;

    // Detener el audio después de 10 segundos
    setTimeout(() => {
      newAudio.pause();
    }, 10000);
  };

  // Función para reproducir el sonido de latido rápido
  const heartBeatingFast = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // Detiene el audio anterior
      audioRef.current.currentTime = 0; // Reestablece el tiempo del audio anterior
    }
    const newAudio = new Audio("/sounds/heart-beating-fast.mp3"); // Ruta al archivo de latido rápido
    newAudio.volume = 1.0;
    newAudio.play();
    setAudio(newAudio); // Guardamos la referencia al audio
    audioRef.current = newAudio;

    // Detener el audio después de 10 segundos
    setTimeout(() => {
      newAudio.pause();
    }, 10000);
  };

  return (
    <div className="heart-failure-container">
      {/* <h1 className="heart-failure-title">Insuficiencia cardíaca</h1> */}

      <div className="model-container">
        <Canvas
          shadows
          gl={{ shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap } }}
          camera={{ position: [0, 2, 8], fov: 60 }}
        >
          <Text3DHeartFailure title={"Insuficiencia Cardíaca"} />
          <SoftShadows frustum={3.75} size={10} samples={16} focus={1} />
          <ambientLight intensity={0.4} />
          <directionalLight
            // Cambia estos valores para modificar la dirección de las sombras
            position={[-2, 5, 7]}
            intensity={2}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-radius={3}
          />
          <Staging />
          <OrbitControls enableZoom={true} />
          <HeartFailureModel scale={2} castShadow rotation={[0, 0, 0]} onClickNormal={heartBeatingNormal} onClickFailure={heartBeatingFast}/>
          {/* Piso para recibir sombras */}
          <Circle
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3.2, 0]}
            args={[10, 10]}
            receiveShadow
          >
            <meshStandardMaterial color="var(--canvas-bg)" />
          </Circle>
        </Canvas>
      </div>

      <div className="labels">
        <p> Corazón normal </p>
        <p> Corazón con insuficiencia </p>
      </div>

      <div className="labelsTwo">
          <p>Prueba haciendo click en los corazones de arriba....</p>
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
              en:
              <br />
              <br />
              °Insuficiencia Cardíaca Crónica: La enfermedad se va
              manifestando gradualmente, pero los síntomas se intensifican con
              el paso del tiempo. Es la más frecuente. 
              <br />
              <br />
              °Insuficiencia Cardíaca
              Aguda: Los síntomas aparecen de forma repentina y son graves desde
              el principio. Con un tratamiento adecuado, los pacientes pueden
              mejorar rápidamente.
            </p>
          </div>
        </div>  

          <div className="section reverse">
            <div className="card-right">
              <div className="title">¿Cuales son sus síntomas?</div>
              <p>
                Los síntomas predominantes de la insuficiencia cardíaca son:
                <br />
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

            <div className="card-models">
              <Canvas
                shadows
                camera={{ position: [20, 10, 20], fov: 50 }}
                style={{
                  width: "100%",
                  height: "300px",
                  borderRadius: "12px",
                  background: "transparent",
                }}
                gl={{
                  alpha: true,
                  antialias: true,
                  shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap },
                }}
              >
            
                <ambientLight intensity={0.4} />
                <directionalLight
                  castShadow
                  position={[2, 4, 5]}
                  intensity={2}
                />
                {/* Piso para proyectar sombra visible */}
                <Circle
                  rotation={[-Math.PI / 2, 0, 0]}
                  position={[0, -3, 0]}
                  args={[10, 10]}
                  receiveShadow
                >
                  <meshStandardMaterial color="grey" />
                </Circle>
                <HeartModelOne
                  scale={2}
                  position={[-2, 0, 0]}
                  castShadow
                />
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
              <p>La insuficiencia cardíaca se puede producir a causa de un corazón debilitado, dañado o rígido.
                 <br />
                 °Si el corazón está dañado o debilitado, las cavidades cardíacas pueden estirarse y aumentar de tamaño. El corazón no puede bombear la cantidad de sangre necesaria.
                 <br />
                 °Si las principales cavidades de bombeo del corazón, denominadas ventrículos, están rígidas, no pueden llenarse con suficiente sangre entre latidos.
                 <br />
                 °Ciertas infecciones, el consumo excesivo de alcohol, el consumo de drogas ilícitas y algunos medicamentos de quimioterapia pueden dañar el músculo cardíaco. Los genes también pueden influir.
                 </p>
            </div>

            <div className="card-models">
              <Canvas
                shadows
                camera={{ position: [20, 10, 20], fov: 50 }}
                style={{
                  width: "100%",
                  height: "300px",
                  borderRadius: "12px",
                  background: "transparent",
                }}
                gl={{
                  alpha: true,
                  antialias: true,
                  shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap },
                }}
              >
            
                <ambientLight intensity={0.4} />
                <directionalLight
                  castShadow
                  position={[2, 4, 5]}
                  intensity={2}
                />
                {/* Piso para proyectar sombra visible */}
                <Circle
                  rotation={[-Math.PI / 2, 0, 0]}
                  position={[0, 0, 0]}
                  args={[10, 10]}
                  receiveShadow
                >
                  <meshStandardMaterial color="grey" />
                </Circle>
                <CigarettesModel
                  scale={40}
                  position={[0, 0, 0]}
                  castShadow
                />
                <OrbitControls
                  autoRotate
                  enableZoom
                  minDistance={2}
                  maxDistance={10}
                />
              </Canvas>
            </div>
          </div>

            <div className="section reverse">
              <div className="card-right">
                <div className="title">¿Cómo tratarlo?</div>
                <p>Proximamente...</p>
              </div>
            </div>
        </div>
    </div>
  );
};


export default HeartFailure;
