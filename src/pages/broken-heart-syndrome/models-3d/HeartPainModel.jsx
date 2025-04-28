import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
    const { nodes, materials } = useGLTF('/heart-pain.glb')
    return (
    <group {...props} dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.HeartPainModel_1.geometry}
            material={materials.HeartPainMaterial}
        />
        <points geometry={nodes.HeartPainModel_2.geometry} material={materials.HeartPainMaterial} />
    </group>
    )
}

useGLTF.preload('/heart-pain.glb')