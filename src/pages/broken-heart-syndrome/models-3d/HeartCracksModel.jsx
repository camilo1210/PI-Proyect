import React, { useEffect, useRef, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function HeartCracksModel(props) {
  const { nodes, materials } = useGLTF(
    "/models-3d/broken-heart-sysdrome/heart-cracks.glb"
  );

  const groupRef = useRef();
  const soundRef = useRef();
  const { camera } = useThree();
  const [isPlaying, setIsPlaying] = useState(false);

  // Cargar sonido 3D
  useEffect(() => {
    const listener = new THREE.AudioListener();
    camera.add(listener);

    const sound = new THREE.PositionalAudio(listener);
    const loader = new THREE.AudioLoader();

    loader.load("/sounds/heartbeat-distorted.mp3", (buffer) => {
      sound.setBuffer(buffer);
      sound.setRefDistance(5);
      sound.setLoop(true);
      sound.setVolume(0.5);
    });

    soundRef.current = sound;

    if (groupRef.current) {
      groupRef.current.add(sound);
    }

    return () => {
      camera.remove(listener);
    };
  }, [camera]);

  // Reproducir/detener sonido
  const handlePlaySound = () => {
    const sound = soundRef.current;
    if (sound && sound.buffer) {
      if (sound.isPlaying) {
        sound.pause(); // usa pause() en vez de stop() para poder reanudar
        setIsPlaying(false);
      } else {
        sound.play();
        setIsPlaying(true);
      }
    }
  };

  // Animación de tambaleo cuando el sonido está activo
  useFrame(() => {
    if (!groupRef.current) return;

    if (isPlaying) {
      const t = performance.now() / 1000;
      groupRef.current.rotation.y = Math.sin(t * 5) * 0.4;
      groupRef.current.rotation.x = Math.sin(t * 3) * 0.1;
    } else {
      groupRef.current.rotation.set(0, 0, 0);
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HeartCracksModel.geometry}
        material={materials.HeartCracksMaterial}
      />

      <Html position={[0, -1, 4]}>
        <button
          onClick={handlePlaySound}
          style={{
            padding: "12px 20px",
            fontSize: "16px",
            borderRadius: "10px",
            backgroundColor: "#800000",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            transform: "rotateY(-10deg)",
            boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
          }}
        >
          {isPlaying ? "Detener sonido" : "Sonido de Latido"}
        </button>
      </Html>
    </group>
  );
}

useGLTF.preload("/models-3d/broken-heart-sysdrome/heart-cracks.glb");
