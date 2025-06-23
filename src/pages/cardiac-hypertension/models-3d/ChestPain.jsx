import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ChestPain({ trigger = false, ...props }) {
  const { nodes, materials } = useGLTF("/models-3d/cardiac-hypertension/chestPain.glb");
  const meshRef = useRef();
  const { camera } = useThree();

  const audioRef = useRef(null);
  const listenerRef = useRef(null);
  const hasPlayedRef = useRef(false); // evita repetir el sonido
  const startTimeRef = useRef(null); // para movimiento

  // Cargar y preparar el sonido al montar
  useEffect(() => {
    const listener = new THREE.AudioListener();
    camera.add(listener);
    listenerRef.current = listener;

    const sound = new THREE.Audio(listener);
    const loader = new THREE.AudioLoader();

    loader.load("/sounds/complain-of-pain.mp3", (buffer) => {
      sound.setBuffer(buffer);
      sound.setVolume(1);
      sound.setLoop(false);
      audioRef.current = sound;
      console.log("✅ Sonido cargado correctamente");
    });

    return () => {
      if (audioRef.current?.isPlaying) audioRef.current.stop();
      camera.remove(listener);
    };
  }, [camera]);

  // Detecta cambio en el trigger
  useEffect(() => {
    if (trigger) {
      startTimeRef.current = performance.now();

      if (audioRef.current && !hasPlayedRef.current) {
        audioRef.current.play();
        hasPlayedRef.current = true;
      }
    } else {
      hasPlayedRef.current = false; // se reinicia si trigger es false
    }
  }, [trigger]);

  // Movimiento tipo "sacudida"
  useFrame(() => {
    if (!trigger || !meshRef.current) return;

    const elapsed = performance.now() - (startTimeRef.current || 0);

    if (elapsed < 1000) {
      meshRef.current.position.x = Math.sin(elapsed * 0.05) * 0.05;
    } else {
      meshRef.current.position.x = 0;
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        geometry={nodes.ChestPain.geometry}
        material={materials.ChestPainMaterial}
        castShadow
        receiveShadow
      />
    </group>
  );
}