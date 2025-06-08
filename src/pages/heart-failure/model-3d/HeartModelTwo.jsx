import { useGLTF } from "@react-three/drei";
import React, { useRef } from 'react'
import { useFrame} from "@react-three/fiber";

const HeartModelTwo = (props) => {
    const { nodes, materials} = useGLTF("models-3d/heart-failure-models/heart-failure.glb");
    
      const rightHeartRef = useRef(null);
    
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
      
        // Latido derecho (corazón normal, más tranquilo)
        if (rightHeartRef.current) {
         const scaleRight = 3.5 * heartbeat(t, 0.8); // Normal (1x)
         rightHeartRef.current.scale.set(scaleRight, scaleRight, scaleRight);
        }
      });
    
      return(
        <group {...props} dispose={null}>
        <mesh
          ref={rightHeartRef}
          castShadow
          receiveShadow
          geometry={nodes.HeartFailure002.geometry}
          material={materials.HeartFailureMaterial}
        />
      </group>
    )
  }

  export default HeartModelTwo;
  
  useGLTF.preload('models-3d/heart-failure-models/heart-failure.glb')