import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const HealthyFood  = (props) =>{
  const { nodes, materials } = useGLTF("models-3d/heart-failure-models/healthy-food.glb")

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Banana001.geometry}
        material={materials.banana}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass.geometry}
        material={materials.Basic_Glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Juice001.geometry}
        material={materials.Lemon}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Orange001.geometry}
        material={materials.Naranjina}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table001.geometry}
        material={materials.Tabla}
      />
    </group>
  );
};

export default HealthyFood;

useGLTF.preload("models-3d/heart-failure-models/healthy-food.glb");