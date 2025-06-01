import React, { useEffect, useRef, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function ManModel(props) {
  const { nodes, materials } = useGLTF(
    "/models-3d/broken-heart-sysdrome/man-pain.glb"
  );
  const meshRef = useRef();
  const soundRef = useRef();
  const { camera } = useThree();
  const [isPlaying, setIsPlaying] = useState(false);

  // Animación de latido (pulso visual)
  const heartbeat = (time) => {
    const cycle = time % 1.5;
    if (cycle < 0.3 || (cycle > 0.5 && cycle < 0.7)) {
      return 1 + Math.sin((cycle % 0.2) * Math.PI) * 0.1;
    }
    return 1;
  };

  // Cargar sonido 3D
  useEffect(() => {
    const listener = new THREE.AudioListener();
    camera.add(listener);

    const sound = new THREE.PositionalAudio(listener);
    const loader = new THREE.AudioLoader();

    loader.load("/sounds/agony-man.wav", (buffer) => {
      sound.setBuffer(buffer);
      sound.setRefDistance(5);
      sound.setLoop(true);
      sound.setVolume(0.8);
    });

    soundRef.current = sound;

    if (meshRef.current) {
      meshRef.current.add(sound);
    }

    return () => {
      camera.remove(listener);
    };
  }, [camera]);

  // Manejar clic en el botón
  const handlePlaySound = () => {
    const sound = soundRef.current;
    if (sound && sound.buffer) {
      if (sound.isPlaying) {
        sound.pause();
        setIsPlaying(false);
      } else {
        sound.play();
        setIsPlaying(true);
      }
    }
  };

  // Escala animada
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const scale = 3.5 * heartbeat(t);
    if (meshRef.current) {
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.ManPainModel.geometry}
        material={materials.ManPainMaterial}
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
          {isPlaying ? "Detener sonido" : "Sonido de Agonía"}
        </button>
      </Html>
    </group>
  );
}

useGLTF.preload("/models-3d/broken-heart-sysdrome/man-pain.glb");
