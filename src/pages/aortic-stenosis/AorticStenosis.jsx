import "./AorticStenosis.css";
import { Circle, OrbitControls, SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import FullHeartModel from "./models-3d/fullHeart";
import * as THREE from "three";
import MaleHumanModel from "./models-3d/maleHuman";
import HalfHeart from "./models-3d/halfHeart";
import Lights from "./lights/AorticLights";
import { useMemo } from "react";
import { KeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";

const AorticStenosis = () => {
  const map = useMemo(
    () => [
      { name: "left", keys: ["a", "ArrowLeft"] },
      { name: "right", keys: ["d", "ArrowRight"] },
      { name: "up", keys: ["w", "ArrowUp"] },
      { name: "down", keys: ["s", "ArrowDown"] },
      { name: "one", keys: ["1"] },
      { name: "two", keys: ["2"] },
      { name: "three", keys: ["3"] },
      { name: "four", keys: ["4"] },
    ],
    []
  );
  return (
    <div className="container">
      <h1 className="stenosis-title">Síndrome del corazón roto</h1>
      {/* Modelo central */}
      <div className="model-container">
        <KeyboardControls map={map}>
          <Canvas
            shadows
            gl={{ shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap } }}
            camera={{ position: [0, 0, -0.3] }}
          >
            <SoftShadows frustum={3.75} size={10} samples={16} focus={1} />
            <ambientLight intensity={0.5} />
            <directionalLight
              // Cambia estos valores para modificar la dirección de las sombras
              position={[4, 4, -5]}
              intensity={1}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-radius={3}
            />
            <OrbitControls target={[0, 0, 0]} />
            <FullHeartModel scale={2} castShadow rotation={[0, 0, 0]} />
            {/* Piso para recibir sombras */}
            <Circle
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -0.3, 0]}
              args={[10, 10]}
              receiveShadow
            >
              <meshStandardMaterial color="grey" />
            </Circle>
          </Canvas>
        </KeyboardControls>
      </div>

      {/* Secciones informativas */}
      <div className="section ">
        <div className="card left">
          <div className="title">Qué es</div>
          <p>
            La EA es una enfermedad valvular en la que la válvula aórtica se
            calcifica o engrosa y su orificio efectivo. Formas graves impide el
            flujo adecuado de sangre. El corazón debe generar presiones más
            altas para vencer la obstrucción, provocando hipertrofia ventricular
            y, a largo plazo, disfunción sistólica
          </p>
        </div>
        <div className="card-model">
          <></>
          <Canvas
            shadows
            camera={{ position: [-0.1, 0.13, -0.1] }}
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
            raycaster={{ enabled: true }}
          >
            <ambientLight intensity={0.4} />
            <directionalLight position={[-4, 4, -4]} castShadow intensity={1} />
            <Circle
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, 0, 0]}
              args={[10, 10]}
              receiveShadow
            >
              <meshStandardMaterial color="grey" />
            </Circle>
            <HalfHeart
              scale={1}
              position={[0, 0, 0]}
              castShadow
              rotation={[0, 4, 0]}
            />
            {/* <Lights /> */}
            <OrbitControls enableZoom minDistance={3} maxDistance={10} />
          </Canvas>
        </div>
      </div>
      <div className="cards-container">
        {/* ¿Qué es? */}
        {/* <SectionWhatIs
          title="¿Qué es?"
          text="La EA es una enfermedad valvular en la que la válvula aórtica se calcifica o engrosa y su orificio efectivo. Formas graves impide el flujo adecuado de sangre. El corazón debe generar presiones más altas para vencer la obstrucción, provocando hipertrofia ventricular y, a largo plazo, disfunción sistólica"
          Model={HalfHeart}
        /> */}

        {/* ¿Cuáles son sus síntomas? */}
        <Section
          title="¿Cuáles son sus síntomas?"
          text="Los pacientes permanecen asintomáticos años, pero cuando aparecen los síntomas, son típicos: disnea de esfuerzo, angina y síncope. La disnea es el síntoma más frecuente y puede aparecer en reposo o al realizar esfuerzos mínimos."
          Model={MaleHumanModel}
          reverse
        />

        {/* ¿Qué lo causa? */}
        <Section
          title="¿Qué lo causa?"
          text="Tiene muchas causas, pero la más frecuente es la calcificación, anomalías geneticas, infecciones que cicatrizan la válvula."
          Model={MaleHumanModel}
        />

        {/* ¿Cómo tratarlo? */}
        <Section
          title="¿Cómo tratarlo?"
          text="No existen medicamentos que detengan la estrechez; se usan diuréticos betabloqueadores o IECAs solo para aliviar congestión o controlar hipertensión y arritmias. La única opción es la cirugía, que puede ser una sustitución de la válvula o una valvuloplastia con balón."
          Model={MaleHumanModel}
          reverse
        />
      </div>
    </div>
  );
};

// Componente de sección reutilizable
const Section = ({ title, text, Model, reverse }) => (
  <div className={`section ${reverse ? "reverse" : ""}`}>
    <div className={`card ${reverse ? "right" : "left"}`}>
      <div className="title">{title}</div>
      <p>{text}</p>
    </div>
    <div className="card-model">
      <Canvas
        shadows
        camera={{ position: [-0.1, 0.13, -0.1] }}
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
        raycaster={{ enabled: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[-4, 4, -4]} castShadow intensity={1} />
        <Circle
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
          args={[10, 10]}
          receiveShadow
        >
          <meshStandardMaterial color="grey" />
        </Circle>
        <Model scale={1} position={[0, 0, 0]} castShadow rotation={[0, 4, 0]} />
        {/* <Lights /> */}
        <OrbitControls enableZoom minDistance={3} maxDistance={10} />
      </Canvas>
    </div>
  </div>
);
// Componente de "qué es?" reutilizable
const SectionWhatIs = ({ title, text, Model, reverse }) => (
  <div className={`section ${reverse ? "reverse" : ""}`}>
    <div className={`card ${reverse ? "right" : "left"}`}>
      <div className="title">{title}</div>
      <p>{text}</p>
    </div>
    <div className="card-model">
      <Canvas
        shadows
        camera={{ position: [-0.1, 0.1, -0.1] }}
        style={{
          width: "100%",
          height: "300px",
          background: "var(--canvas-bg)",
          borderRadius: "var(--border-radius)",
        }}
        gl={{
          antialias: true,
          // shadows: true,
          shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap },
        }}
      >
        {/* <SoftShadows frustum={3.75} size={10} samples={16} focus={1} /> */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[4, 4, -5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-radius={3}
        />
        <Circle
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
          args={[10, 10]}
          receiveShadow
        >
          <meshStandardMaterial color="grey" />
        </Circle>
        <Model
          scale={1}
          position={[0, 0, 0]}
          castShadow
          rotation={[0, 0.4, 0]}
        />
        {/* <Lights /> */}
        <OrbitControls enableZoom minDistance={0.38} maxDistance={10} />
      </Canvas>
    </div>
  </div>
);

export default AorticStenosis;

{
  /* <p>
  La EA es una enfermedad valvular en la que la válvula aórtica se
  calcifica o engrosa y su orificio efectivo. Formas graves impide el
  flujo adecuado de sangre. El corazón debe generar presiones más altas
  para vencer la obstrucción, provocando hipertrofia ventricular y, a
  largo plazo, disfunción sistólica
  </p> */
}

{
  /* <p>
    Los pacientes permanecen asintomáticos años, pero cuando aparecen los
    síntomas, son típicos: disnea de esfuerzo, angina y síncope. La disnea
    es el síntoma más frecuente y puede aparecer en reposo o al realizar
    esfuerzos mínimos.
  </p> */
}

{
  /* <p>
    No existen medicamentos que detengan la estrechez; se usan diuréticos,
    betabloqueadores o IECAs solo para aliviar congestión o controlar
    hipertensión y arritmias. La única opción es la cirugía, que puede ser
    una sustitución de la válvula o una valvuloplastia con balón.
    </p> */
}
