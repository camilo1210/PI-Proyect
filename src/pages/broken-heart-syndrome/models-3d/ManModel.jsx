/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ManModel(props) {
    const { nodes, materials } = useGLTF('/models-3d/broken-heart-sysdrome/man-pain.glb')
    return (
    <group {...props} dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.ManPainModel.geometry}
            material={materials.ManPainMaterial}
        />
    </group>
    )
}

useGLTF.preload('/man-pain.glb')
