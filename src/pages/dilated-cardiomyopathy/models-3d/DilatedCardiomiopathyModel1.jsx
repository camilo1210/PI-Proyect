import { useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const HeartDilatedModel1 = () => {
  const HeartC = useGLTF("models-3d/dilated-cardiomyopathy-models/human-heart0.glb");
  const meshRef = useRef();
/*
  // Función para simular la animación del latido
  const heartbeat = (time) => {
    const cycle = time % 2.4; // Duración total de un ciclo "pum pum ___"
    if (cycle < 0.2 || (cycle > 0.3 && cycle < 0.5)) {
      return 1 + Math.sin((cycle % 0.2) * Math.PI) * 0.1; // Pulso rápido
    }
    return 1; // Reposo
  };

  useEffect(() => {
    // Aplicar castShadow a todas las partes del modelo
    HeartC.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
      }
    });
  }, [HeartC]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const scale = 1.5 * heartbeat(t); // Puedes ajustar el 1.5 si quieres que sea más grande o pequeño

    if (meshRef.current) {
      meshRef.current.scale.set(scale, scale, scale);

      // Hacer que el modelo gire alrededor del eje Y
      meshRef.current.rotation.y = t * 0.2; // Ajusta el valor "0.2" para hacer la rotación más rápida o lenta
    }
  });
  */
  return (
    <group ref={meshRef} castShadow scale={5} position={[0,1,0]}>
      <primitive object={HeartC.scene} />
    </group>
  );

};

export default HeartDilatedModel1;

useGLTF.preload("models-3d/dilated-cardiomyopathy-models/human-heart0.glb");
