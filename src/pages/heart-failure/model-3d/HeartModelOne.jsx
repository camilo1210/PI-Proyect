import { useGLTF } from "@react-three/drei";
import React, { useRef } from 'react'
import { useFrame} from "@react-three/fiber";

const HeartModelOne = (props) => {
    const { nodes, materials} = useGLTF("models-3d/heart-failure-models/heart-failure.glb");
    
      const leftHeartRef = useRef(null);
    
      useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
      
        // Función para latido realista (pum-pum descanso)
        const heartbeat = (time, speed = 1) => {
          const cycle = (time * speed) % 2.4; // Modificamos con speed
          if (cycle < 0.2 || (cycle > 0.3 && cycle < 0.5)) {
            return 1 + Math.sin((cycle % 0.2) * Math.PI) * 0.1; // Pulso rápido
          }
          return 1; // Reposo
        };
      
        // Latido izquierdo (corazón enfermo, más agitado)
        if (leftHeartRef.current) {
          const scaleLeft = 3.5 * heartbeat(t, 2.0); // Más rápido (1.5x)
          leftHeartRef.current.scale.set(scaleLeft, scaleLeft, scaleLeft);
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
        />
      </group>
    )
  }

  export default HeartModelOne;
  
  useGLTF.preload('models-3d/heart-failure-models/heart-failure.glb')