/* import HeartDilatedModel1 from "../dilated-cardiomyopathy/models-3d/DilatedCardiomiopathyModel1";
import HeartDilatedModel2 from "../dilated-cardiomyopathy/models-3d/DilatedCardiomioPathyModel2";
import HeartDilatedModel3 from "../dilated-cardiomyopathy/models-3d/DilatedCardiomiopathyModel3";
import HeartDilatedModel from "../dilated-cardiomyopathy/models-3d/DilatedCardiomiopathyModel";
import ModelDizzy from "../dilated-cardiomyopathy/models-3d/ManDizzyAnimation";
import HealthyFood from "../heart-failure/model-3d/HealthyFood";
import HeartModelTwo from "../heart-failure/model-3d/HeartModelTwo";
import CigarettesModel from "./heart-failure/model-3d/CigarettesModel";
import HeartModelOne from "./heart-failure/model-3d/HeartModelOne";
import { Model } from "./cardiac-hypertension/models-3d/HealthyHeartModel";import React from "react";
import { OrbitControls } from "@react-three/drei";

/*modelos*/
/*import { BrokenHeartModelHome } from "../broken-heart-syndrome/models-3d/BrokenHeartModelHome";
import { Model as HealthyHeartModel } from "../cardiac-hypertension/models-3d/HealthyHeartModel";
import StenosisHeart from "../aortic-stenosis/models-3d/fullHeart";
import { Canvas } from "@react-three/fiber";

import { BrokenHeartModel } from "./broken-heart-syndrome/models-3d/BrokenHeartModel";
import { HeartCracksModel } from "./broken-heart-syndrome/models-3d/HeartCracksModel";
import { HeartMonitorModel } from "./broken-heart-syndrome/models-3d/HeartMonitorModel";
import { HeartPainModel } from "./broken-heart-syndrome/models-3d/HeartPainModel";
import { ManModel } from "./broken-heart-syndrome/models-3d/ManModel";
import MaleHumanModel from "./aortic-stenosis/models-3d/maleHuman";
import MaleHumanModelCare from "./aortic-stenosis/models-3d/maleHumanCares";
import HalfHeart from "./aortic-stenosis/models-3d/halfHeart";
import HalfHeartDetails from "./models-3d/HalfHeartDetails";*/

const ModeloQuiz = ({ onModelClick }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    const name = e.object.parent.name || e.object.name;
    if (onModelClick && name) {
      onModelClick(name);
    }
  };

  return (
    <>
      {/* <div className="quiz-container">
        <div className="quiz-canvas">
          <ambientLight intensity={0.4} />
          <directionalLight
            castShadow
            intensity={0.7}
            position={[50, 100, 50]}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <mesh rotation-x={-Math.PI / 2} receiveShadow>
            <circleGeometry args={[80, 64]} />
            <meshStandardMaterial color="#4caf50" roughness={0.8} />
          </mesh>
          <group
            position={[-20, 10, 0]}
            name="heartHealthy"
            scale={[10, 10, 10]}
          >
            
            <HealthyHeartModel onClick={handleClick} />
          </group>
          <group position={[0, 10, 0]} name="stenosisHeart" scale={70}>
            <StenosisHeart />
          </group>
          <group position={[20, 10, 0]} name="heartRotten" scale={[10, 10, 10]}>
            <BrokenHeartModelHome onClick={handleClick} />
          </group>
          <OrbitControls target={[0, 10, 0]} />
        </div>
      </div> */}
    </>
  );
};

export default ModeloQuiz;
