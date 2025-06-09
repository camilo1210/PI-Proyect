import "./AorticStenosis.css";
import {
  Circle,
  Html,
  OrbitControls,
  SoftShadows,
  SpotLight,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import FullHeartModel from "./models-3d/fullHeart";
import * as THREE from "three";
import MaleHumanModel from "./models-3d/maleHuman";
import HalfHeart from "./models-3d/halfHeart";
import Lights from "./lights/AorticLights";
import Lights2 from "../dilated-cardiomyopathy/lights/Lights";
import { useEffect, useMemo } from "react";
import { KeyboardControls } from "@react-three/drei";
import Recipient from "./models-3d/Recipient";
import Staging from "./staging/Staging";
import Texts3dFullHeart from "./texts3d/Texts3DFullHeart";
import Texts3d from "./texts3d/Texts3D";
import StagingMale from "./staging/StagingMale";
import Controls from "./controls/Controls";
import Title2D from "./texts/Title";

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
      { name: "five", keys: ["5"] },
    ],
    []
  );


  return (
    <>
      <div className="container">
        {/* <h1 className="stenosis-title">Síndrome del corazón roto</h1> */}
        {/* Modelo central */}
        <div className="model-container">
          <KeyboardControls map={map}>
            <Canvas
              shadows
              gl={{
                shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap },
              }}
              camera={{ position: [0, 0.2, -0.4] }}
            >
              {/* <SoftShadows frustum={3.75} size={10} samples={16} focus={1} /> */}
              <Texts3dFullHeart title={"Estenosis Aortica"}  size={0.06} position={[4.5, 0.45, 0]} />
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
          </KeyboardControls>
        </div>
        {/* ===================================================================================================================================================== */}
        {/* Secciones informativas */}
        {/* QUE ES */}
        <div className="section ">
          <div className="card left">
            <div className="title">Qué es</div>
            <p>
              La EA es una enfermedad valvular en la que la válvula aórtica se
              calcifica o engrosa y su orificio efectivo. Formas graves impide
              el flujo adecuado de sangre. El corazón debe generar presiones más
              altas para vencer la obstrucción, provocando hipertrofia
              ventricular y, a largo plazo, disfunción sistólica
            </p>
          </div>
          <div className="card-model">
            <Canvas
              shadows={true}
              camera={{ position: [0, 0.1, -0.33] }}
              gl={{
                shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap },
              }}
              style={{
                width: "100%",
                height: "300px",
                background: "var(--canvas-bg)",
                borderRadius: "var(--border-radius)",
              }}
            >
              <ambientLight intensity={0.4} />
              <directionalLight
                position={[3, 5, -5]}
                intensity={1}
                castShadow={true}
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
              <Recipient />
              <OrbitControls
                target={[0, 0.16, 0]}
                enableZoom={true}
                zoomSpeed={0.6}
              />
              <HalfHeart scale={1} position={[0, 0, 0]} rotation={[0, 0, 0]} />
              <OrbitControls />
              <Lights2 />
            </Canvas>
          </div>
        </div>
        <div className="cards-container"></div>
        {/* ===================================================================================================================================================== */}
        {/* CUÁLES SON SUS SÍNTOMAS */}
        <div className="section reverse">
          <div className="card left">
            <div className="title">¿Cuáles son sus síntomas?</div>
            <p>
              Los pacientes permanecen asintomáticos años, pero cuando aparecen
              los síntomas, son típicos: disnea de esfuerzo, angina y síncope.
              La disnea es el síntoma más frecuente y puede aparecer en reposo o
              al realizar esfuerzos mínimos.
            </p>
          </div>
          <div className="card-model">
            <KeyboardControls map={map}>
              <Canvas
                camera={{ position: [0, 1.8, 2] }}
                gl={{
                  shadowMap: { enabled: true, type: THREE.PCFSoftShadowMap },
                }}
                shadows={true}
                style={{
                  width: "100%",
                  height: "300px",
                  background: "var(--canvas-bg)",
                  borderRadius: "var(--border-radius)",
                }}
                raycaster={{ enabled: true }}
              >
                <Texts3d title={"Síntomas"} />
                <ambientLight intensity={0.4} />
                <directionalLight
                  position={[-3, 4, 4]}
                  intensity={1}
                  castShadow={true}
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
                <Recipient />
                <MaleHumanModel
                  scale={1}
                  position={[0, 0, 0]}
                  rotation={[0, 0, 0]}
                />
                <OrbitControls
                  target={[0, 0, -0.8]}
                  enableZoom={true}
                  zoomSpeed={0.6}
                />
                <Controls />
                <StagingMale />
              </Canvas>
            </KeyboardControls>
          </div>
        </div>
      </div>
    </>
  );
};

export default AorticStenosis;
