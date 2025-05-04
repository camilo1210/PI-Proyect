/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function HeartEGCModel(props) {
    const { nodes, materials } = useGLTF('/models-3d/broken-heart-sysdrome/heart-egc.glb')
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