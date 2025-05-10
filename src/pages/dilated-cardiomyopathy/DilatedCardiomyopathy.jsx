import "./DilatedCardiomyopathy.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import HeartDilatedModel from "./models-3d/DilatedCardiomiopathyModel";
import HeartDilatedModel1 from "./models-3d/DilatedCardiomiopathyModel1";
import HeartDilatedModel2 from "./models-3d/DilatedCardiomioPathyModel2";
import HeartDilatedModel3 from "./models-3d/DilatedCardiomiopathyModel3";
import ModelDizzy from "./models-3d/ManDizzyAnimation";
import Button from "./buttom/Button"
import Lights from "../dilated-cardiomyopathy/lights/Lights";
import { Circle } from "@react-three/drei";
import * as THREE from "three";

const DilatedCardiomyopathy = () => {
  return (
    <div className="container">

      <div className="model-container">
        <Canvas shadows camera={{ position: [0.3, -0.2, -1] }}
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

          {/* Elemento HTML 3D */}
          <Html position={[0, 1, 0]} style={{ pointerEvents: "none" }}>
            <h1 style={{ color: "black", fontSize: "1.5rem", textAlign: "center" }}>
              Miocardiopatía Dilatada
            </h1>
          </Html>

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
        <Section
        
          title="¿Qué es?"
          text="La miocardiopatía dilatada (MCD) es una enfermedad del corazón en la cual el músculo cardíaco se debilita y se agranda, lo que dificulta su capacidad para bombear sangre de manera eficiente. Esta condición puede afectar a cualquier parte del corazón, aunque generalmente involucra los ventrículos, las cavidades principales que bombean sangre al resto del cuerpo."
          Model={HeartDilatedModel2}
          Circle
        />

        {/* ¿Cuáles son sus síntomas? */}
        <Section
          title="¿Cuáles son sus síntomas?"
          text="Los síntomas de la miocardiopatía dilatada incluyen fatiga, dificultad para respirar (especialmente al hacer ejercicio o acostarse), hinchazón en piernas o abdomen, palpitaciones, mareos y tos persistente, especialmente al estar acostado. Estos síntomas indican que el corazón no está bombeando sangre de manera eficiente."
          Model={ModelDizzy}
          Button={Button}
          reverse
          showButton={true}
        />

        {/* ¿Qué lo causa? */}
        <Section
          title="¿Qué lo causa?"
          text="La miocardiopatía dilatada puede ser causada por factores genéticos, infecciones virales que afectan el corazón (miocarditis), consumo excesivo de alcohol, trastornos metabólicos como diabetes e hipertensión, enfermedades autoinmunes que atacan al corazón y ciertos medicamentos, como los de quimioterapia, que dañan el músculo cardíaco."
          Model={HeartDilatedModel3}
        />

        {/* ¿Cómo tratarlo? */}
        <Section
          title="¿Cómo tratarlo?"
          text="El tratamiento de la miocardiopatía dilatada incluye medicamentos como inhibidores de la ECA y betabloqueadores, dispositivos como marcapasos, y cambios en el estilo de vida, como dieta saludable y evitar alcohol y tabaco. En casos graves, se puede considerar un trasplante cardíaco."
          Model={HeartDilatedModel1}

          reverse
        />
      </div>
    </div>
  );
};

// Componente de sección reutilizable
const Section = ({ title, text, Model, reverse, Button, showButton = false }) => (
  <div className={`section ${reverse ? "reverse" : ""}`}>
    <div className={`card ${reverse ? "right" : "left"}`}>
      <div className="title">{title}</div>
      <p>{text}</p>
      {showButton && <Button />}
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
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 4, 5]} intensity={1} />
        <Circle
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.5, 0]}
          args={[10, 10]}
          receiveShadow
        >
          <meshStandardMaterial />
        </Circle>
        <Model scale={10} position={[0, 1.6, 0]} rotation={[0, 4, 0]} />
        <Lights />
        <OrbitControls enableZoom minDistance={0} maxDistance={10} />
      </Canvas>
    </div>
  </div>
);

export default DilatedCardiomyopathy;
