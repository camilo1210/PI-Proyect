import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ManModel({ trigger = false, ...props }) {
  const { nodes, materials } = useGLTF(
    "/models-3d/broken-heart-sysdrome/man-pain.glb"
  );
  const meshRef = useRef();
  const { camera } = useThree();

  const soundRef = useRef(null);

  const [soundPlaying, setSoundPlaying] = React.useState(false);
  const heartbeatSoftRef = useRef(null);
  const heartbeatStrongRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "e") {
        setSoundPlaying(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const listener = new THREE.AudioListener();
    camera.add(listener);

    const soft = new THREE.PositionalAudio(listener);
    const strong = new THREE.Audio(listener);
    const loader = new THREE.AudioLoader();

    // Cargamos sonido de latido normal
    loader.load("/sounds/agony-man.wav", (buffer) => {
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

  useFrame(({ clock }) => {
    if (!trigger || !meshRef.current) return;

    const t = clock.getElapsedTime();
    const cycle = t % 1.5;
    const scale =
      cycle < 0.3 || (cycle > 0.5 && cycle < 0.7)
        ? 1 + Math.sin((cycle % 0.2) * Math.PI) * 0.1
        : 1;

    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        geometry={nodes.ManPainModel.geometry}
        material={materials.ManPainMaterial}
        castShadow
        receiveShadow
      />
    </group>
  );
}
