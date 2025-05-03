import "./AorticStenosis.css";
import { Circle, OrbitControls, SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import FullHeartModel from "./models-3d/fullHeart";
import AorticLights from "./lights/AorticLights";
import * as THREE from "three";
import MaleHumanModel from "./models-3d/maleHuman";

const AorticStenosis = () => {
  return (
    <div className="aortic-stenosis">
      <h1>Estenosis aortica</h1>

      <div className="model-container">
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
      </div>
      {/* =============================================================== */}
      <div className="card left">
        <div className="title">Qué es la enfermedad Estenosis aórtica?</div>
        <p>
          La EA es una enfermedad valvular en la que la válvula aórtica se
          calcifica o engrosa y su orificio efectivo. Formas graves impide el
          flujo adecuado de sangre. El corazón debe generar presiones más altas
          para vencer la obstrucción, provocando hipertrofia ventricular y, a
          largo plazo, disfunción sistólica
        </p>
        <p className="male-cointainer">
          <Canvas
            shadows
            gl={{ shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap } }}
            style={{ height: "260px", width: "480px" }}
          >
            <MaleHumanModel scale={1} position={[0, 0, 0]} castShadow />
            <Circle
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -0.3, 0]}
              args={[10, 10]}
              receiveShadow
            >
              <meshStandardMaterial color="grey" />
            </Circle>
          </Canvas>
        </p>
      </div>
      {/* =============================================================== */}
      <div className="card right">
        <div className="title">Sintomas</div>
        <p>
          Los pacientes permanecen asintomáticos años, pero cuando aparecen los
          síntomas, son típicos: disnea de esfuerzo, angina y síncope. La disnea
          es el síntoma más frecuente y puede aparecer en reposo o al realizar
          esfuerzos mínimos.
        </p>
      </div>

      <div className="card left">
        <div className="title">Tratamiento</div>
        <p>
          No existen medicamentos que detengan la estrechez; se usan diuréticos,
          betabloqueadores o IECAs solo para aliviar congestión o controlar
          hipertensión y arritmias. La única opción es la cirugía, que puede ser
          una sustitución de la válvula o una valvuloplastia con balón.
        </p>
      </div>

      <div className="card right">
        <div className="title">Prevención y cuidados</div>
        <p>Proximamente....</p>
      </div>
    </div>
  );
};

export default AorticStenosis;
