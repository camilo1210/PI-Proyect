/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export function HeartCracksModel(props) {
  const { nodes, materials } = useGLTF("/models-3d/broken-heart-sysdrome/heart-cracks.glb");
  const meshRef = useRef();
  const soundRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    const listener = new THREE.AudioListener();
    camera.add(listener);

    const sound = new THREE.Audio(listener);
    const loader = new THREE.AudioLoader();

    loader.load('/sounds/heartbeat.mp3', (buffer) => {
      sound.setBuffer(buffer);
      sound.setVolume(0.5);
      sound.setLoop(false);
    });

    soundRef.current = sound;
  }, [camera]);

  const lastBeatRef = useRef(0);

  const heartbeat = (time) => {
    const cycle = time % 2.4;
    const isBeat = cycle < 0.2 || (cycle > 0.3 && cycle < 0.5);
    if (isBeat && time - lastBeatRef.current > 0.3) {
      lastBeatRef.current = time;
      if (soundRef.current && !soundRef.current.isPlaying) {
        soundRef.current.play();
      }
    }
    return isBeat ? 1 + Math.sin((cycle % 0.2) * Math.PI) * 0.1 : 1;
  };

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
        geometry={nodes.HeartCracksModel.geometry}
        material={materials.HeartCracksMaterial}
      />
    </group>
  );
}

useGLTF.preload('/models-3d/broken-heart-sysdrome/heart-cracks.glb');
