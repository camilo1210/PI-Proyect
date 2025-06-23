import { useEffect, useRef } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import usePersonStore from "../../../stores/dilated-cardiomiopathy-stores/use-person-store";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const ModelDizzy = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "models-3d/dilated-cardiomyopathy-models/man-dizzi.glb"
  );
  const { actions } = useAnimations(animations, group);
  const { currentAnimation } = usePersonStore();
  const { camera } = useThree();

  // Audio
  const breathingAudioRef = useRef(null);

  useEffect(() => {
    if (actions[currentAnimation]) {
      actions[currentAnimation].reset().fadeIn(0.5).play();
    }
    return () => {
      if (actions[currentAnimation]) {
        actions[currentAnimation].fadeOut(0.5);
      }
    };
  }, [actions, currentAnimation]);

  useEffect(() => {
    // Audio setup
    const listener = new THREE.AudioListener();
    camera.add(listener);

    const breathing = new THREE.PositionalAudio(listener);
    const loader = new THREE.AudioLoader();

    loader.load("/sounds/breathing-fast.wav", (buffer) => {
      breathing.setBuffer(buffer);
      breathing.setRefDistance(2);
      breathing.setVolume(1);
      breathing.setLoop(false);
    });

    breathingAudioRef.current = breathing;

    // Limpieza
    return () => {
      if (breathing.isPlaying) breathing.stop();
      camera.remove(listener);
    };
  }, [camera]);

  useEffect(() => {
    // Play audio on Enter
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && breathingAudioRef.current && !breathingAudioRef.current.isPlaying) {
        breathingAudioRef.current.play();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          rotation={[Math.PI / 2, 0, 3]}
          scale={0.0023}
          position={[0, -0.19, 0]}
        >
          <skinnedMesh
            name="personw"
            geometry={nodes.personw.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.personw.skeleton}
            castShadow
            receiveShadow
          />
          <primitive object={nodes.mixamorigHips} />
          {/* Audio Posicional */}
          <primitive object={breathingAudioRef.current} />
          {/* HTML 3D H1 agregado */}
          <Html position={[0, 1, 1]} >
            <h1
              style={{
                background: "rgba(255,255,255,0.92)",
                padding: "10px 18px",
                borderRadius: "12px",
                color: "#1d1da3",
                fontWeight: "bold",
                fontSize: "1.1rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                margin: 0,
                textAlign: "center",
                minWidth: "180px",
              }}
            >
              ¡presiona "Enter"!
            </h1>
          </Html>
        </group>
      </group>
    </group>
  );
};

export default ModelDizzy;

useGLTF.preload("models-3d/dilated-cardiomyopathy-models/man-dizzi.glb");
