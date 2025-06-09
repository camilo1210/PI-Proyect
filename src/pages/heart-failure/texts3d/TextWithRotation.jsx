import Text3DHeartFailure from "./Text3DHeartFailure";
import HeartFailureModel from "../model-3d/HeartFailureModel";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const TextWithRotation = () => {

const parentGroup = useRef();
  const textGroup = useRef();
  const heartGroup = useRef();

  useFrame(() => {
    // Rotación general del grupo padre (puede estar fija o rotando)
    if (parentGroup.current) {
      parentGroup.current.rotation.y += 0; // por ejemplo 0 para fijo
    }

    // Rotación individual del texto
    if (textGroup.current) {
      textGroup.current.rotation.y += 0.01; // gira más rápido
    }

    // Rotación individual del corazón
    if (heartGroup.current) {
      heartGroup.current.rotation.y += 0.00001; // gira más lento
    }
  });

  return (
    <group ref={parentGroup}>
      <group ref={textGroup} position={[0, 0, 0]}>
        <Text3DHeartFailure title="Insuficiencia Cardíaca" />
      </group>
      <group ref={heartGroup} position={[0, 0, 0]}>
        <HeartFailureModel scale={6} castShadow disableAnimation />
      </group>
    </group>
  );
};

export default TextWithRotation;