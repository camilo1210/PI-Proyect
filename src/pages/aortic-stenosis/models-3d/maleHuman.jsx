import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function MaleHumanFull(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/aortic-stenosis-models/male-human.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group name="MaleHuman">
            <skinnedMesh
              name="MaleHuman_1"
              geometry={nodes.MaleHuman_1.geometry}
              material={materials.MaleHumanHair}
              skeleton={nodes.MaleHuman_1.skeleton}
              morphTargetDictionary={nodes.MaleHuman_1.morphTargetDictionary}
              morphTargetInfluences={nodes.MaleHuman_1.morphTargetInfluences}
            />
            <skinnedMesh
              name="MaleHuman_2"
              geometry={nodes.MaleHuman_2.geometry}
              material={materials.MaleHumanEye}
              skeleton={nodes.MaleHuman_2.skeleton}
              morphTargetDictionary={nodes.MaleHuman_2.morphTargetDictionary}
              morphTargetInfluences={nodes.MaleHuman_2.morphTargetInfluences}
            />
            <skinnedMesh
              name="MaleHuman_3"
              geometry={nodes.MaleHuman_3.geometry}
              material={materials.MaleHumanSkin}
              skeleton={nodes.MaleHuman_3.skeleton}
              morphTargetDictionary={nodes.MaleHuman_3.morphTargetDictionary}
              morphTargetInfluences={nodes.MaleHuman_3.morphTargetInfluences}
            />
            <skinnedMesh
              name="MaleHuman_4"
              geometry={nodes.MaleHuman_4.geometry}
              material={materials.MaleHumanTeeth}
              skeleton={nodes.MaleHuman_4.skeleton}
              morphTargetDictionary={nodes.MaleHuman_4.morphTargetDictionary}
              morphTargetInfluences={nodes.MaleHuman_4.morphTargetInfluences}
            />
            <skinnedMesh
              name="MaleHuman_5"
              geometry={nodes.MaleHuman_5.geometry}
              material={materials.MaleHumanBody}
              skeleton={nodes.MaleHuman_5.skeleton}
              morphTargetDictionary={nodes.MaleHuman_5.morphTargetDictionary}
              morphTargetInfluences={nodes.MaleHuman_5.morphTargetInfluences}
            />
            <skinnedMesh
              name="MaleHuman_6"
              geometry={nodes.MaleHuman_6.geometry}
              material={materials.MaleHumanOutfitBottom}
              skeleton={nodes.MaleHuman_6.skeleton}
              morphTargetDictionary={nodes.MaleHuman_6.morphTargetDictionary}
              morphTargetInfluences={nodes.MaleHuman_6.morphTargetInfluences}
            />
            <skinnedMesh
              name="MaleHuman_7"
              geometry={nodes.MaleHuman_7.geometry}
              material={materials.MaleHumanOutfitFootwear}
              skeleton={nodes.MaleHuman_7.skeleton}
              morphTargetDictionary={nodes.MaleHuman_7.morphTargetDictionary}
              morphTargetInfluences={nodes.MaleHuman_7.morphTargetInfluences}
            />
            <skinnedMesh
              name="MaleHuman_8"
              geometry={nodes.MaleHuman_8.geometry}
              material={materials.MaleHumanOutfitTop}
              skeleton={nodes.MaleHuman_8.skeleton}
              morphTargetDictionary={nodes.MaleHuman_8.morphTargetDictionary}
              morphTargetInfluences={nodes.MaleHuman_8.morphTargetInfluences}
            />
          </group>
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

export default MaleHumanFull;
useGLTF.preload('/models-3d/aortic-stenosis-models/male-human.glb')