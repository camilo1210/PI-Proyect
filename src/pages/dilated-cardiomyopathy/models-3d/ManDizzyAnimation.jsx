import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import usePersonStore from "../../../stores/dilated-cardiomiopathy-stores/use-person-store";

const ModelDizzy = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "models-3d/dilated-cardiomyopathy-models/man-dizzi.glb"
  );
  const { actions } = useAnimations(animations, group);
  const { currentAnimation } = usePersonStore();

  useEffect(() => {
    if (actions[currentAnimation]) {
      actions[currentAnimation].reset().fadeIn(0.5).play(); // Asegúrate de reiniciar y reproducir la animación
    }
    return () => {
      if (actions[currentAnimation]) {
        actions[currentAnimation].fadeOut(0.5); // Detén la animación anterior
      }
    };
  }, [actions, currentAnimation]);

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
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
};

export default ModelDizzy;

useGLTF.preload("models-3d/dilated-cardiomyopathy-models/man-dizzi.glb");
