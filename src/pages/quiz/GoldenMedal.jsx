import React from 'react';
import { useGLTF } from '@react-three/drei';

const GoldenMedal = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/quiz-model/medal.glb');
  
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Medal001.geometry}
        material={materials.MedalMaterial}
        position={[0, -0.256, 0.256]}
        scale={0.078}
      />
    </group>
  );
};

export default GoldenMedal;

useGLTF.preload('/models-3d/quiz-model/medal.glb')