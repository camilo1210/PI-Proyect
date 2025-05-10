/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function HeartPainModel(props) {
    const { nodes, materials } = useGLTF('/models-3d/broken-heart-sysdrome/heart-pain.glb')

    const meshRef = useRef();
    
    
        const heartbeat = (time) => {
            const cycle = time % 2.4; // Duración total de un ciclo "pum pum ___"
            if (cycle < 0.2 || (cycle > 0.3 && cycle < 0.5)) {
              return 1 + Math.sin((cycle % 0.2) * Math.PI) * 0.1; // Pulso rápido
            }
            return 1; // Reposo
          };
    
            useFrame(({ clock }) => {
              const t = clock.getElapsedTime();
              const scale = 3.5 * heartbeat(t); // Modificar la escala en base al latido
          
              if (meshRef.current) {
                // Actualizar la escala del modelo para dar la sensación de latido
                  meshRef.current.scale.set(scale, scale, scale);
              }
            });
    return (
    <group {...props} dispose={null}>
        <mesh
            ref={meshRef}
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