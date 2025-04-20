import { useGLTF } from "@react-three/drei";
// import { useEffect } from "react";
import React, { useRef } from 'react'

const HeartfailureModel = (props) => {
  const { nodes, materials} = useGLTF("models-3d/heart-failure-models/heart-failure.glb");

  return(
  <group {...props} dispose={null}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.HeartFailure.geometry}
      material={materials.HeartFailureMaterial}
    />
  </group>
  );
};

export default HeartfailureModel;

useGLTF.preload("models-3d/heart-failure/heart-failure.glb");