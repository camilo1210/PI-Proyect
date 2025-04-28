// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
    const { nodes, materials } = useGLTF('/heart-cracks.glb')
    return (
        <group {...props} dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.HeartCracksModel.geometry}
            material={materials.HeartCracksMaterial}
        />
    </group>
    )
}

useGLTF.preload('/heart-cracks.glb')
