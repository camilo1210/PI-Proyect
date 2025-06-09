import "./DilatedCardiomyopathy.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, Circle } from "@react-three/drei";
import HeartDilatedModel from "./models-3d/DilatedCardiomiopathyModel";
import HeartDilatedModel1 from "./models-3d/DilatedCardiomiopathyModel1";
import HeartDilatedModel2 from "./models-3d/DilatedCardiomioPathyModel2";
import HeartDilatedModel3 from "./models-3d/DilatedCardiomiopathyModel3";
import ModelDizzy from "./models-3d/ManDizzyAnimation";
import Button from "./buttom/Button";
import Lights from "../dilated-cardiomyopathy/lights/Lights";
import * as THREE from "three";

const DilatedCardiomyopathy = () => {
  return (
    <div className="container">

      <div className="model-container">
        <Canvas shadows camera={{ position: [-1, 0.2, 2] }}
          style={{
            width: "116%",
            height: 300,
          }}>
          <OrbitControls target={[0, 0, 0]} />
          <HeartDilatedModel scale={50} />
          <Lights />

          {/* Piso para recibir sombras */}
          <Circle
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -0.5, 0]}
            args={[5, 5]}
            receiveShadow
          >
            <meshStandardMaterial color="grey" />
          </Circle>

   
          {/* Controles de cámara */}
          <OrbitControls target={[0, 0, 0]} />

          {/* Modelo del corazón */}
          <HeartDilatedModel scale={50} />

          {/* Luces latientes */}
          <Lights />
        </Canvas>
      </div>

      {/* Secciones informativas */}
      <div className="cards-container">

        {/* ¿Qué es? */}
        <SectionQueEs />

        {/* ¿Cuáles son sus síntomas? */}
        <SectionSintomas />

        {/* ¿Qué lo causa? */}
        <SectionCausas />

        {/* ¿Cómo tratarlo? */}
        <SectionTratamiento />
      </div>
    </div>
  );
};

// Sección: ¿Qué es?
const SectionQueEs = () => (
  <div className="section">
    <div className="card left">
      <div className="title">¿Qué es?</div>
      <p>
        La miocardiopatía dilatada (MCD) es una enfermedad del corazón en la cual el músculo cardíaco se debilita y se agranda, lo que dificulta su capacidad para bombear sangre de manera eficiente. Esta condición puede afectar a cualquier parte del corazón, aunque generalmente involucra los ventrículos, las cavidades principales que bombean sangre al resto del cuerpo.
      </p>
    </div>
    <div className="card-model">
      <Canvas
        shadows
        camera={{ position: [20, 15, 20], fov: 70 }}
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
        {/* Luz azulada */}
        <ambientLight intensity={0.4} color="#b3e0ff" />
        <directionalLight
          position={[2, 4, 5]}
          intensity={1}
          color="#3a8dde"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.001}
        />
        <Circle
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
          args={[10, 10]}
          receiveShadow
        >
          <meshStandardMaterial color="#bbb" />
        </Circle>
        <HeartDilatedModel2 scale={10} position={[0, -100, 0]} rotation={[0, 4, 0]} />
        <Lights />
        <OrbitControls enableZoom minDistance={0} maxDistance={10} />
      </Canvas>
    </div>
  </div>
);

// Sección: ¿Cuáles son sus síntomas?
const SectionSintomas = () => (
  <div className="section reverse">
    <div className="card right">
      <div className="title">¿Cuáles son sus síntomas?</div>
      <p>
        Los síntomas de la miocardiopatía dilatada incluyen fatiga, dificultad para respirar (especialmente al hacer ejercicio o acostarse), hinchazón en piernas o abdomen, palpitaciones, mareos y tos persistente, especialmente al estar acostado. Estos síntomas indican que el corazón no está bombeando sangre de manera eficiente.
      </p>
      <Button />
    </div>
    <div className="card-model">
      <Canvas
        shadows
        camera={{ position: [20, 15, 20], fov: 65 }}
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
        {/* Luz verdosa */}
        <ambientLight intensity={0.4} color="#baffc9" />
        <directionalLight
          position={[2, 4, 5]}
          intensity={1}
          color="#3edc81"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.001}
        />
        <Circle
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.5, 0]}
          args={[10, 10]}
          receiveShadow
        >
          <meshStandardMaterial color="#bbb" />
        </Circle>
        <ModelDizzy scale={10} position={[0, 1.6, 0]} rotation={[0, 4, 0]} />
        <Lights />
        <OrbitControls enableZoom minDistance={0} maxDistance={10} />
      </Canvas>
    </div>
  </div>
);

// Sección: ¿Qué lo causa?
const SectionCausas = () => (
  <div className="section">
    <div className="card left">
      <div className="title">¿Qué lo causa?</div>
      <p>
        La miocardiopatía dilatada puede ser causada por factores genéticos, infecciones virales que afectan el corazón (miocarditis), consumo excesivo de alcohol, trastornos metabólicos como diabetes e hipertensión, enfermedades autoinmunes que atacan al corazón y ciertos medicamentos, como los de quimioterapia, que dañan el músculo cardíaco.
      </p>
    </div>
    <div className="card-model">
      <Canvas
        shadows
        camera={{ position: [20, 15, 20], fov: 75 }}
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
        {/* Luz anaranjada */}
        <ambientLight intensity={0.4} color="#ffe5b4" />
        <directionalLight
          position={[2, 4, 5]}
          intensity={1}
          color="#ff9900"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.001}
        />
        <Circle
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1.5, 0]}
          args={[10, 10]}
          receiveShadow
        >
          <meshStandardMaterial color="#bbb" />
        </Circle>
        <HeartDilatedModel3 scale={50} position={[0, 10, 0]} rotation={[0, 4, 0]} />
        <Lights />
        <OrbitControls enableZoom minDistance={0} maxDistance={10} />
      </Canvas>
    </div>
  </div>
);

// Sección: ¿Cómo tratarlo?
const SectionTratamiento = () => (
  <div className="section reverse">
    <div className="card right">
      <div className="title">¿Cómo tratarlo?</div>
      <p>
        El tratamiento de la miocardiopatía dilatada incluye medicamentos como inhibidores de la ECA y betabloqueadores, dispositivos como marcapasos, y cambios en el estilo de vida, como dieta saludable y evitar alcohol y tabaco. En casos graves, se puede considerar un trasplante cardíaco.
      </p>
    </div>
    <div className="card-model">
      <Canvas
        shadows
        camera={{ position: [20, 15, 20], fov: 75 }}
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
        {/* Luz rosada */}
        <ambientLight intensity={0.4} color="#ffd6f6" />
        <directionalLight
          position={[2, 4, 5]}
          intensity={1}
          color="#e75480"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.001}
        />
        <Circle
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1.5, 0]}
          args={[10, 10]}
          receiveShadow
        >
          <meshStandardMaterial color="#bbb" />
        </Circle>
        <HeartDilatedModel1 scale={10} position={[0, 1.6, 0]} rotation={[0, 4, 0]} />
        <Lights />
        <OrbitControls enableZoom minDistance={0} maxDistance={10} />
      </Canvas>
    </div>
  </div>
);

export default DilatedCardiomyopathy;
