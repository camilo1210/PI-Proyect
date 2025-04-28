import "./DilatedCardiomyopathy.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HeartDilatedModel from "./models-3d/DilatedCardiomiopathyModel";
import Staging from "./staging/Staging";
import Lights from "../dilated-cardiomyopathy/lights/Lights";
import { Circle } from "@react-three/drei";


const DilatedCardiomyopathy = () => {
  return (
    <div className="dilated-cardiomyopathy">
      <h1>Miocardiopatía Dilatada</h1>

      <div className="model-container">
      <Canvas shadows
       camera={{ position: [0.3, 0, -0.7] }}
       >
        
      <OrbitControls target={[0, 0, 0]} />
      <HeartDilatedModel scale={50} />
      <Lights/>

    {/* Piso para recibir sombras */}
      <Circle
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.5, 0]}
      args={[10, 10]}
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


      <div className="card left">
  <div className="title">¿QUE ES?</div>
  <p>La miocardiopatía dilatada (MCD) es una enfermedad del músculo cardíaco en la cual el ventrículo izquierdo, que es la principal cámara de bombeo del corazón, se agranda (dilata) y pierde fuerza para contraerse y bombear sangre de forma eficiente al resto del cuerpo. Con el tiempo, esto puede afectar a otras cámaras del corazón y causar insuficiencia cardíaca.</p>
</div>

<div className="card right">
  <div className="title">¿CUALES SON SUS SINTOMAS?</div>
  <p>La causa puede variar, desde enfermedades del corazón hasta condiciones crónicas como la hipertensión. Un diagnóstico adecuado es esencial.</p>
</div>

<div className="card left">
  <div className="title">¿Qué la causa?</div>
  <p>Las causas de la miocardiopatía dilatada incluyen factores genéticos, infecciones virales, consumo excesivo de alcohol o drogas, quimioterapia, problemas hormonales, presión arterial alta crónica, complicaciones del embarazo y deficiencias nutricionales, como la falta de tiamina.</p>
</div>

<div className="card right">
  <div className="title">¿Cómo se trata?</div>
  <p>El tratamiento de la miocardiopatía dilatada incluye medicamentos como IECA, betabloqueadores y diuréticos para mejorar la función del corazón y reducir síntomas. En algunos casos, se usan anticoagulantes o antiarrítmicos. También se pueden implantar dispositivos como marcapasos o desfibriladores. Además, se recomienda una dieta baja en sal, evitar el alcohol y el tabaco, y hacer ejercicio moderado. En casos graves, se considera el trasplante de corazón.</p>
</div>


    </div>
  );
};

export default DilatedCardiomyopathy;
