/* eslint-disable react/no-unknown-property */
import { Suspense, useState } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

import { Circle, Html, OrbitControls, Environment } from "@react-three/drei";

// Modelos y componentes
import { BrokenHeartModelHome } from "../broken-heart-syndrome/models-3d/BrokenHeartModelHome.jsx";
import { Model as HealthyHeartModel } from "../cardiac-hypertension/models-3d/HealthyHeartModel.jsx";import HeartDilatedModel from "../dilated-cardiomyopathy/models-3d/DilatedCardiomiopathyModel.jsx";
import FullHeartModel from "../aortic-stenosis/models-3d/fullHeart";
import Texts3dFullHeart from "../aortic-stenosis/texts3d/Texts3DFullHeart.jsx";
import Recipient from "../aortic-stenosis/models-3d/Recipient.jsx";
import Staging from "../aortic-stenosis/staging/Staging.jsx";
import Text3dFullHeart from "../aortic-stenosis/texts3d/Texts3DFullHeart.jsx";
import TextWithRotation from "../heart-failure/texts3d/TextWithRotation.jsx";

const CANVAS_BACKGROUND_COLOR = "#e5d0ac";

const Home = () => {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="home-container">
      <h1 className="welcome">Bienvenido.</h1>
      <h1 className="home-title">
        Cuidemos Nuestro Corazón: Conoce,
        <br />
        Previene y Actúa
      </h1>
      <p className="home-description">
        El corazón es el motor de nuestra vida, pero muchas veces ignoramos las
        señales de alerta. En esta plataforma, te brindamos información clave
        sobre enfermedades cardíacas como la insuficiencia cardíaca, el síndrome
        del corazón roto, la hipertensión arterial, la miocardiopatía dilatada y
        la estenosis aórtica. Aprende cómo prevenirlas, detectarlas a tiempo y
        cuidar tu salud cardiovascular.
      </p>

      {/* ======================= CORAZÓN ROTO ======================= */}
      <div className="section">
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

        <div className="card-model">
          <Canvas
            shadows
            camera={{ position: [0, 0, -8], fov: 50 }}
            style={{
              width: "100%",
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
              {/* Agrupación separada para el texto */}
              <group position={[0, 0, -1]}>
                <Text3dFullHeart title="Síndrome del Corazón Roto" size={0.5} />
              </group>

              {/* Agrupación separada para el modelo */}
              <group position={[0, 1.5, 0]}>
                <BrokenHeartModelHome scale={2} castShadow />
              </group>
            </Suspense>

            <OrbitControls
              target={[0, 1.5, 0]}
              enableZoom
              autoRotate
              autoRotateSpeed={1}
              minDistance={2}
              maxDistance={10}
            />
          </Canvas>
        </div>
      </div>

      {/* ======================= HIPERTENSIÓN ======================= */}
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
           <Suspense fallback={null}>
              {/* Agrupación separada para el texto */}
              <group position={[0, 0, -1]}>
                <Text3dFullHeart title="Hipertension arterial" size={0.5} />
              </group>

              {/* Agrupación separada para el modelo */}
              <group position={[0, 1.5, 0]}>
                <HealthyHeartModel scale={2} castShadow />
              </group>
            </Suspense>
            <OrbitControls
              enableZoom
              autoRotate
              autoRotateSpeed={1}
              minDistance={2}
              maxDistance={10}
            />
          </Canvas>
        </div>
        <div className="card right">
          <div className="title">Hipertensión Arterial</div>
          <p>
            Una amenaza silenciosa que obliga al corazón a trabajar sin descanso,
            sin mostrar señales evidentes… hasta que es demasiado tarde.
          </p>
          <button className="btnClose">
            <NavLink to="/Cardiac_hypertension" end>
              Saber más
            </NavLink>
          </button>
        </div>
      </div>


      {/* ======================= INSUFICIENCIA ======================= */}
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
            camera={{ position: [0, 2, 8], fov: 60 }}
            style={{
              width: "100%",
              height: 300,
              background: "var(--canvas-bg)",
              borderRadius: "var(--border-radius)",
            }}
            gl={{
              shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap },
            }}
          >
            <ambientLight intensity={0.4} />
            <directionalLight position={[-2, 5, 7]} intensity={2} castShadow />
            <Circle
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -3.2, 0]}
              args={[10, 10]}
              receiveShadow
            >
              <meshStandardMaterial color="var(--canvas-bg)" />
            </Circle>
            < TextWithRotation />
            <OrbitControls enableZoom />
          </Canvas>
        </div>
      </div>

      {/* ======================= MIOCARDIOPATÍA ======================= */}
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
            <HeartDilatedModel scale={20} position={[0, 1.5, 0]} castShadow />
            <OrbitControls
              enableZoom
              autoRotate
              autoRotateSpeed={1}
              minDistance={2}
              maxDistance={10}
            />
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

      {/* ======================= ESTENOSIS ======================= */}
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
            camera={{ position: [0, 0.2, -0.4] }}
            style={{
              width: "100%",
              height: 300,
              background: "var(--canvas-bg)",
              borderRadius: "var(--border-radius)",
            }}
            gl={{
              shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap },
            }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[4, 4, -5]} intensity={1} castShadow />
            <Texts3dFullHeart
              title="Estenosis Aórtica"
              position={[0, 0, 0]}
              size={0.06}
            />
            <FullHeartModel scale={2} castShadow position={[0, 0.16, 0]} />
            <Recipient />
            <Staging />
            <OrbitControls target={[0, 0.16, 0]} enableZoom zoomSpeed={0.6} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Home;
