/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function HeartPainModel(props) {
    const { nodes, materials } = useGLTF('/models-3d/broken-heart-sysdrome/heart-pain.glb')
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