import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function SwollenHeart({ trigger = false, ...props }) {

  const { nodes, materials } = useGLTF("/models-3d/cardiac-hypertension/swollenHeart.glb");
  const meshRef = useRef();
  const startTimeRef = useRef(null);
  const { camera } = useThree();
  const heartbeatSoftRef = useRef(null);
  const heartbeatStrongRef = useRef(null);



  useEffect(() => {
    const listener = new THREE.AudioListener();
    camera.add(listener);

    const soft = new THREE.Audio(listener);
    const strong = new THREE.Audio(listener);
    const loader = new THREE.AudioLoader();

    // Cargamos sonido de latido normal
    loader.load("/sounds/heartbeat-distorted.mp3", (buffer) => {
      strong.setBuffer(buffer);
      strong.setVolume(1);
      strong.setLoop(false);
    });

    // Guardamos referencias
    heartbeatSoftRef.current = soft;
    heartbeatStrongRef.current = strong;

    // Limpieza: detener sonidos y quitar listener
    return () => {
      if (soft.isPlaying) {
        soft.stop();
      }
      if (strong.isPlaying) {
        strong.stop();
      }
      camera.remove(listener);
    };
  }, [camera]);

  useEffect(() => {
    if (trigger) {
      startTimeRef.current = performance.now();
    }
  }, [trigger]);

  useEffect(() => {
  if (trigger && heartbeatSoftRef.current && heartbeatStrongRef.current) {
    // Aseguramos que no estén ya sonando
    if (!heartbeatSoftRef.current.isPlaying) {
      heartbeatSoftRef.current.play();
    }

    setTimeout(() => {
      if (!heartbeatStrongRef.current.isPlaying) {
        heartbeatStrongRef.current.play();
      }
    }, 1000); // Por ejemplo, 2 segundos después
  }
}, [trigger]);


  useFrame(() => {
    if (!trigger || !meshRef.current) return;

    const elapsed = (performance.now() - (startTimeRef.current || 0)) / 1000;
    if (elapsed < 5) {
      const scale = 1 + Math.sin(elapsed * 10) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    } else {
      meshRef.current.scale.set(1, 1, 1);
    }
  });
  

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        geometry={nodes.SwollenHeart.geometry}
        material={materials.SwollenHeartMaterial}
        castShadow
        receiveShadow
      />
    </group>
  );
}
