import { useGLTF } from "@react-three/drei";
import React, { useRef } from 'react'
import { useFrame} from "@react-three/fiber";

const HeartFailureModel = ({ onClickFailure, onClickNormal, disableAnimation = false, ...props }) => {
  const { nodes, materials} = useGLTF("models-3d/heart-failure-models/heart-failure.glb");

  const leftHeartRef = useRef(null);
  const rightHeartRef = useRef(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (disableAnimation) {
      // 🔁 Solo rotación si se desactiva la animación
      if (leftHeartRef.current) leftHeartRef.current.rotation.y += 0.01;
      if (rightHeartRef.current) rightHeartRef.current.rotation.y += 0.01;
      return;
    }
  
    // Función para latido realista (pum-pum descanso)
    const heartbeat = (time, speed = 1) => {
      const cycle = (time * speed) % 2.5; // Modificamos con speed
      if (cycle < 0.3 || (cycle > 0.4 && cycle < 0.6)) {
        return 1 + Math.sin((cycle % 0.2) * Math.PI) * 0.1; // Pulso rápido
      }
      return 1; // Reposo
    };
  
    // Latido izquierdo (corazón enfermo, más agitado)
    if (leftHeartRef.current) {
      const scaleLeft = 3.5 * heartbeat(t, 3.8); // Más rápido (1.5x)
      leftHeartRef.current.scale.set(scaleLeft, scaleLeft, scaleLeft);
    }
  
    // Latido derecho (corazón normal, más tranquilo)
    if (rightHeartRef.current) {
      const scaleRight = 3.5 * heartbeat(t, 0.8); // Normal (1x)
      rightHeartRef.current.scale.set(scaleRight, scaleRight, scaleRight);
    }
  });

  return(
    <group {...props} dispose={null}>
    <mesh
      ref={leftHeartRef}  
      castShadow
      receiveShadow
      geometry={nodes.HeartFailure.geometry}
      material={materials.HeartFailureMaterial}
      onClick={onClickFailure} // Click en el corazón izquierdo (enfermo)
    />
    <mesh
      ref={rightHeartRef}
      castShadow
      receiveShadow
      geometry={nodes.HeartFailure002.geometry}
      material={materials.HeartFailureMaterial}
      onClick={onClickNormal} // Click en el corazón derecho (normal)
    />
  </group>
);
};


export default HeartFailureModel;

useGLTF.preload("models-3d/heart-failure/heart-failure.glb");