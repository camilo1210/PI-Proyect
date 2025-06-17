import { useGLTF, Sky, Stars } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Text3dBrokenHeart from "../../broken-heart-syndrome/texts3d/Texts3DBrokenHeart";

const HeartDilatedModel = () => {
  const HeartC = useGLTF("models-3d/dilated-cardiomyopathy-models/human-heart3.glb");
  const meshRef = useRef();

  // Función para simular la animación del latido
  const heartbeat = (time) => {
    const cycle = time % 2.4; // Duración total de un ciclo "pum pum ___"
    if (cycle < 0.2 || (cycle > 0.3 && cycle < 0.5)) {
      return 1 + Math.sin((cycle % 0.2) * Math.PI) * 0.1; // Pulso rápido
    }
    return 1; // Reposo
  };

  useEffect(() => {
    // Aplicar castShadow y receiveShadow a todas las partes del modelo
    HeartC.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
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

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Rotate around Y-axis
    }
  });

  return (
    <>
      {/* Cielo */}
      <Sky sunPosition={[100, 20, 100]} turbidity={8} rayleigh={6} />
      {/* Estrellas amarillas */}
      <Stars
        radius={100}
        depth={1}
        count={5000}
        factor={6}
        saturation={10}
        fade
        color="red"
      />
      {/* Modelo del corazón */}
      <group
        ref={meshRef}
        castShadow
        receiveShadow
        scale={20}
      >
        <primitive object={HeartC.scene} />
      </group>
      {/* Texto 3D BrokenHeart fuera del grupo para que NO rote */}
      <Text3dBrokenHeart
        title="Miocardiopatía Dilatada"
        position={[0, -0.4, 0.5]}
        size={0.2}
        color="#a31d1d"
      />
    </>
  );
};

export default HeartDilatedModel;

useGLTF.preload("models-3d/dilated-cardiomyopathy-models/human-heart3.glb");
