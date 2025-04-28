
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
    const { nodes, materials } = useGLTF('/heart-egc.glb')
    return (
    <group {...props} dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.HeartEGCModel.geometry}
            material={materials.HeartEGCMaterial}
        />
    </group>
    )
}

useGLTF.preload('/heart-egc.glb')