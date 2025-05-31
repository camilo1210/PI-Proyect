import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { Canvas } from "@react-three/fiber";

import FullHeartModel from "../aortic-stenosis/models-3d/fullHeart";
import Texts3dFullHeart from "../aortic-stenosis/texts3d/Texts3DFullHeart.jsx";
import Recipient from "../aortic-stenosis/models-3d/Recipient.jsx";
import Staging from "../aortic-stenosis/staging/Staging.jsx";

import HeartFailureModel from "../heart-failure/model-3d/HeartFailureModel";

import * as THREE from "three";
import { Circle, Html, OrbitControls } from "@react-three/drei";

// Modelos
import { BrokenHeartModel } from "../broken-heart-syndrome/models-3d/BrokenHeartModel.jsx";
import HeartDilatedModel from "../dilated-cardiomyopathy/models-3d/DilatedCardiomiopathyModel.jsx"; // Corrected import

// Luces y estilos
import Lights from "../broken-heart-syndrome/lights/Lights.jsx";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div />
        <h1 className="welcome">Bienvenido.</h1>
        <h1 className="home-title">
          Cuidemos Nuestro Corazón: Conoce,
          <br />
          Previene y Actúa
        </h1>
        <p className="home-description">
          El corazón es el motor de nuestra vida, pero muchas veces ignoramos
          las señales de alerta. En esta plataforma, te brindamos información
          clave sobre enfermedades cardíacas como la insuficiencia cardíaca, el
          síndrome del corazón roto, la hipertensión arterial, la miocardiopatía
          dilatada y la estenosis aórtica. Aprende cómo prevenirlas, detectarlas
          a tiempo y cuidar tu salud cardiovascular.
        </p>
        {/* =======================Recuadro Corazón roto================================================================*/}
        <div className="section">
          {/* Texto explicativo */}
          <div className="card left">
            <div className="title">Síndrome del corazón roto</div>
            <p>
              Cuando el estrés o una emoción intensa afectan tu corazón como si
              fuera un ataque, pero sin serlo. ¿Puede el corazón realmente
              romperse?
            </p>
            <button className="btnClose">
              <NavLink to="/Broken_heart_syndrome" end>
                Saber más
              </NavLink>
            </button>
          </div>

          {/* Modelo 3D */}
          <div className="card-model">
            <Canvas
              shadows
              camera={{ position: [0, 1, 8], fov: 50 }}
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
          </div>
        </div>

        {/* ============================Recuadro Hipertensión arterial===============================================================*/}
        <div className="card right">
          <div className="title">Hipertensión Arterial</div>
          <p>
            Una amenaza silenciosa que obliga al corazón a trabajar sin
            descanso, sin mostrar señales evidentes… hasta que es demasiado
            tarde.
          </p>
          <button className="btnClose">
            <NavLink to="/Cardiac_hypertension" end>
              Saber más
            </NavLink>
          </button>
        </div>
        {/* ===================================Recuadro Insuficiencia Cardíaca============================================================*/}
        <div className="section">
        <div className="card left">
          <div className="title">Insuficiencia Cardíaca</div>
          <p>
            Cuando el corazón pierde la capacidad de bombear con fuerza, cada
            actividad se vuelve un reto. ¿Es el final… o hay esperanza?
          </p>
          <button className="btnClose">
            <NavLink to="/Heart_failure" end>
              Saber más
            </NavLink>
          </button>
        </div>
        <div className="card-model">
          <Canvas
          shadows
          style={{
                width: "100%",
                height: 300,
                background: "var(--canvas-bg)",
                borderRadius: "var(--border-radius)",
              }}
          gl={{ shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap } }}
          camera={{ position: [0, 2, 8], fov: 60 }}
        >
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
          <Circle
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3.2, 0]}
            args={[10, 10]}
            receiveShadow
          >
            <meshStandardMaterial color="var(--canvas-bg)" />
          </Circle>
          <OrbitControls enableZoom={true} />
          <HeartFailureModel scale={2} castShadow rotation={[0, 0, 0]}/>
          {/* Piso para recibir sombras */}
          
        </Canvas>
        </div>
        </div>
        {/* ===========================Recuadro Miocardiopatía Dilatada==================================================================*/}
        <div className="section">
          <div className="card-model">
            <Canvas
              shadows
              camera={{ position: [0, 1, 8], fov: 50 }}
              style={{
                width: "100%",
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

              <HeartDilatedModel scale={2} position={[0, 1.5, 0]} castShadow />

              <OrbitControls
                enableZoom
                autoRotate
                autoRotateSpeed={1}
                minDistance={2}
                maxDistance={10}
              />

              <Html position={[3, 4, -1]}>
                <div className="heart-title-container">
                  <h1 className="heart-title">Miocardiopatía Dilatada</h1>
                </div>
              </Html>
            </Canvas>
          </div>
          <div className="card right">
            <div className="title">Miocardiopatía Dilatada</div>
            <p>
              El corazón se agranda tratando de compensar su debilidad, pero en el
              proceso pierde su fuerza. ¿Qué lo causa y cómo afecta tu vida?
            </p>
            <button className="btnClose">
              <NavLink to="/Dilated-cardiomyopathy" end>
                Saber más
              </NavLink>
            </button>
          </div>
        </div>
        {/* ============================Recuadro Estenosis Aórtica==================================================================*/}
        <div className="section">
          <div className="card left">
            <div className="title">Estenosis Aórtica</div>
            <p>
              Cuando la principal salida del corazón se estrecha, cada latido se
              convierte en un esfuerzo mayor. ¿Cómo puede un simple ‘bloqueo’
              cambiarlo todo?
            </p>
            <button className="btnClose">
              <NavLink to="/Aortic_stenosis" end>
                Saber más
              </NavLink>
            </button>
          </div>
          <div className="card-model">
            <Canvas
              shadows
              gl={{
                shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap },
              }}
              camera={{ position: [0, 0.2, -0.4] }}
              style={{
                width: "100%",
                height: 300,
                background: "var(--canvas-bg)",
                borderRadius: "var(--border-radius)",
              }}
            >
              <Texts3dFullHeart title={"Estenosis Aortica"} />
              <ambientLight intensity={0.5} />
              <directionalLight
                position={[4, 4, -5]}
                intensity={1}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-radius={4}
                shadow-bias={-0.001} // Ajuste para mejorar la definición de la sombra
                shadow-camera-near={0.5}
                shadow-camera-far={20}
                shadow-camera-left={-5}
                shadow-camera-right={5}
                shadow-camera-top={5}
                shadow-camera-bottom={-5}
              />
              <OrbitControls
                target={[0, 0.16, 0]}
                enableZoom={true}
                zoomSpeed={0.6}
                maxZoom={4}
              />
              <FullHeartModel
                scale={2}
                castShadow
                rotation={[0, 0, 0]}
                position={[0, 0.16, 0]}
              />
              {/* Piso para recibir sombras */}
              <Recipient />
              <Staging />
            </Canvas>
          </div>
        </div>
        {/* ===========================================================================================================================*/}
      </div>
    </>
  );
};

export default Home;
