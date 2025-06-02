import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function ManModel({ trigger = false, ...props }) {
  const { nodes, materials } = useGLTF("/models-3d/broken-heart-sysdrome/man-pain.glb");
  const meshRef = useRef();
  const soundRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    const listener = new THREE.AudioListener();
    camera.add(listener);

    const sound = new THREE.PositionalAudio(listener);
    const loader = new THREE.AudioLoader();

    loader.load("/sounds/agony-man.wav", (buffer) => {
      sound.setBuffer(buffer);
      sound.setRefDistance(5);
      sound.setLoop(false);
      sound.setVolume(0.8);
    });

    soundRef.current = sound;
    meshRef.current?.add(sound);

    return () => {
      camera.remove(listener);
    };
  }, [camera]);

  useEffect(() => {
    if (trigger && soundRef.current && soundRef.current.buffer) {
      soundRef.current.play();
    }
  }, [trigger]);

  const heartbeat = (t) => {
    const cycle = t % 1.5;
    if (cycle < 0.3 || (cycle > 0.5 && cycle < 0.7)) {
      return 1 + Math.sin((cycle % 0.2) * Math.PI) * 0.1;
    }
    return 1;
  };

  useFrame(({ clock }) => {
    const scale = 3.5 * heartbeat(clock.getElapsedTime());
    if (trigger && meshRef.current) {
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
    </group>
  );
}
