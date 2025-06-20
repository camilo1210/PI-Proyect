 import { useGLTF } from "@react-three/drei"; 
/* import React, { useRef } from 'react'
import { useFrame} from "@react-three/fiber"; */

const Cigarettes = (props) => {
  const { nodes, materials } = useGLTF('models-3d/heart-failure-models/cigarettes.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cigarettes.geometry}
        material={materials.CigarettesMaterial}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

export default Cigarettes;

useGLTF.preload('models-3d/heart-failure-models/cigarettes.glb')