import "./DilatedCardiomyopathy.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HeartDilatedModel from "./models-3d/DilatedCardiomiopathyModel";
import Lights from "../dilated-cardiomyopathy/lights/Lights";

const DilatedCardiomyopathy = () => {
  return (
    <div className="dilated-cardiomyopathy">
      <h1>Miocardiopatía Dilatada</h1>

      <Canvas camera={{ position: [0, 2, 0] }}>
      <OrbitControls target={[0, 0, 0]} />
      <HeartDilatedModel scale={50} />
      <Lights/>
      </Canvas>



      <div className="card left">
  <div className="title">¿QUE ES?</div>
  <p>La miocardiopatía dilatada (MCD) es una enfermedad del músculo cardíaco en la cual el ventrículo izquierdo, que es la principal cámara de bombeo del corazón, se agranda (dilata) y pierde fuerza para contraerse y bombear sangre de forma eficiente al resto del cuerpo. Con el tiempo, esto puede afectar a otras cámaras del corazón y causar insuficiencia cardíaca.</p>
</div>

<div className="card right">
  <div className="title">¿CUALES SON SUS SINTOMAS?</div>
  <p>La causa puede variar, desde enfermedades del corazón hasta condiciones crónicas como la hipertensión. Un diagnóstico adecuado es esencial.</p>
</div>

<div className="card left">
  <div className="title">¿Cuáles son sus síntomas?</div>
  <p>Los síntomas más comunes incluyen dificultad para respirar, fatiga, hinchazón en las piernas, y latidos cardíacos irregulares. Estos signos suelen empeorar con el tiempo si no se recibe tratamiento adecuado.</p>
</div>

<div className="card right">
  <div className="title">¿Cuál es la causa?</div>
  <p>La causa puede variar, desde enfermedades del corazón hasta condiciones crónicas como la hipertensión. Un diagnóstico adecuado es esencial.</p>
</div>


    </div>
  );
};

export default DilatedCardiomyopathy;
