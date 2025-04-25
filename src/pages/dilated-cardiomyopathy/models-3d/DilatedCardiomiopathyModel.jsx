import { useGLTF } from "@react-three/drei";
// import { useEffect } from "react";
import React, { useEffect, useRef } from 'react'

const HeartDilatedModel = () => {
  const HeartC = useGLTF("models-3d/dilated-cardiomyopathy-models/human-heart3.glb");
    useEffect(()=>{console.log("ya cargo",HeartC)},[HeartC])
  return(

    <mesh>
      <primitive object={HeartC.scene}/>
    </mesh>

  );
};

export default HeartDilatedModel;

useGLTF.preload("models-3d/dilated-cardiomyopathy-models/human-heart3.glb");