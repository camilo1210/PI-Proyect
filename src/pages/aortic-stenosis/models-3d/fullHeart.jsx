import React, { useRef, useEffect, useCallback } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function FullHeart(props) {
  const { nodes, materials } = useGLTF(
    "/models-3d/aortic-stenosis-models/full-heart.glb"
  );
  const meshRef = useRef();

  // Función para simular la animación del latido
  const heartbeat = (time) => {
    const cycle = time % 2.4; // Duración total de un ciclo "pum pum ___"
    if (cycle < 0.2 || (cycle > 0.3 && cycle < 0.5)) {
      return 1 + Math.sin((cycle % 0.2) * Math.PI) * 0.1; // Pulso rápido
    }
    return 1; // Reposo
  };

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const scale = heartbeat(t);
    if (meshRef.current) {
      meshRef.current.scale.set(scale, scale, scale);
      // Se eliminó la rotación en Y para que no rote en su propio eje
      // meshRef.current.rotation.y = t * 0.2;
    }
  });

  const handleHeart = useCallback((e) => {
    // console.log(e);
    // Aquí puedes agregar la lógica para manejar el clic en el corazón
  }, []);

  return (
    <group {...props} dispose={null} ref={meshRef} onClick={handleHeart}>
      <mesh
        geometry={nodes.FullHeart.geometry}
        material={materials.FullHeartMaterial}
        castShadow
        receiveShadow
      />
    </group>
  );
}

export default FullHeart;

useGLTF.preload("/models-3d/aortic-stenosis-models/full-heart.glb");
