
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
    const { nodes, materials } = useGLTF('/man-pain.glb')
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
