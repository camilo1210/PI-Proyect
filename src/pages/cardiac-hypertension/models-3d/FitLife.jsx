import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function FitLife({ trigger = false, ...props }) {
  const { nodes, materials } = useGLTF("/models-3d/cardiac-hypertension/fitLife.glb");
  const groupRef = useRef();
  const soundRef = useRef();
  const { camera } = useThree();
  const [clickStage, setClickStage] = useState(true);

  useEffect(() => {
    const handleKeyDown = (s) => {
      console.log("Key pressed", s.key);
      if (s.key === "s") {
      setClickStage((prev) => (prev + 1) % 3);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);


  useEffect(() => {
    const listener = new THREE.AudioListener();
    camera.add(listener);

    const sound = new THREE.PositionalAudio(listener);
    const loader = new THREE.AudioLoader();

    loader.load("/sounds/dumbbells.mp3", (buffer) => {
      sound.setBuffer(buffer);
      sound.setRefDistance(5);
      sound.setLoop(false);
      sound.setVolume(0.5);
    });

    soundRef.current = sound;
    groupRef.current?.add(sound);

    return () => {
      camera.remove(listener);
    };
  }, [camera]);

  useEffect(() => {
    if (trigger && soundRef.current && soundRef.current.buffer) {
      soundRef.current.play();
    }
  }, [trigger]);

  useFrame(() => {
    if (!groupRef.current) return;

    if (trigger) {
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
        geometry={nodes.FitLife.geometry}
        material={materials.FitLifeMaterial}
      />
    </group>
  );
}