// SIN useInView aquí
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import { PositionalAudio, AudioLoader, AudioListener } from "three";

const CigarettesModel = (props) => {
  const { nodes, materials } = useGLTF("models-3d/heart-failure-models/cigarettes.glb");
  const meshRef = useRef();
  const audioRef = useRef();
  const { camera } = useThree();
  const sound = useLoader(AudioLoader, "/sounds/smoking-sound.mp3");

  useEffect(() => {
    if (!meshRef.current) return;

    let listener = camera.children.find(child => child.type === "AudioListener");
    if (!listener) {
      listener = new AudioListener();
      camera.add(listener);
    }

    const audio = new PositionalAudio(listener);
    audio.setBuffer(sound);
    audio.setRefDistance(5);
    audio.setMaxDistance(30);
    audio.setLoop(true);
    audio.setVolume(1);
    audio.play();

    meshRef.current.add(audio);
    audioRef.current = audio;

    return () => {
      audio.pause();
    };
  }, [sound, camera]);

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.Cigarettes.geometry}
        material={materials.CigarettesMaterial}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
};

export default CigarettesModel;

useGLTF.preload("models-3d/heart-failure-models/cigarettes.glb");


