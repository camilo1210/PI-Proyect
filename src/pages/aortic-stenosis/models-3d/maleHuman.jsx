import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  useGLTF,
  useAnimations,
  useKeyboardControls,
  Html,
} from "@react-three/drei";

export function MaleHumanFull(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models-3d/aortic-stenosis-models/male-human.glb"
  );
  const { actions } = useAnimations(animations, group);
  const [currentAction, setCurrentAction] = useState("Idle");
  // const [, get] = useKeyboardControls();

  useEffect(() => {
    actions[currentAction].fadeIn(0.5).play();
    return () => {
      actions[currentAction].fadeOut(0.5).stop();
    };
  }, [actions, currentAction]);

  const handleMaleWalking = useCallback((e) => {
    console.log(e);
    setCurrentAction("Walking");
  }, []);

  const handleMaleBreathless = useCallback((e) => {
    console.log(e);
    setCurrentAction("Breathless");
  }, []);
  const handleMaleFatigue = useCallback((e) => {
    console.log(e);
    setCurrentAction("Fatigue");
  }, []);

  const handleMaleTired = useCallback((e) => {
    console.log(e);
    setCurrentAction("Tired");
  }, []);

  const handleMaleIdle = useCallback((e) => {
    console.log(e);
    setCurrentAction("Idle");
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group name="MaleHuman" onClick={handleMaleWalking}>
            <skinnedMesh
              castShadow
              receiveShadow
              name="MaleHuman_1"
              geometry={nodes.MaleHuman_1.geometry}
              material={materials.MaleHumanHair}
              skeleton={nodes.MaleHuman_1.skeleton}
              morphTargetDictionary={nodes.MaleHuman_1.morphTargetDictionary}
              morphTargetInfluences={nodes.MaleHuman_1.morphTargetInfluences}
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="MaleHuman_2"
              geometry={nodes.MaleHuman_2.geometry}
              material={materials.MaleHumanEye}
              skeleton={nodes.MaleHuman_2.skeleton}
              morphTargetDictionary={nodes.MaleHuman_2.morphTargetDictionary}
              morphTargetInfluences={nodes.MaleHuman_2.morphTargetInfluences}
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="MaleHuman_3"
              geometry={nodes.MaleHuman_3.geometry}
              material={materials.MaleHumanSkin}
              skeleton={nodes.MaleHuman_3.skeleton}
              morphTargetDictionary={nodes.MaleHuman_3.morphTargetDictionary}
              morphTargetInfluences={nodes.MaleHuman_3.morphTargetInfluences}
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="MaleHuman_4"
              geometry={nodes.MaleHuman_4.geometry}
              material={materials.MaleHumanTeeth}
              skeleton={nodes.MaleHuman_4.skeleton}
              morphTargetDictionary={nodes.MaleHuman_4.morphTargetDictionary}
              morphTargetInfluences={nodes.MaleHuman_4.morphTargetInfluences}
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="MaleHuman_5"
              geometry={nodes.MaleHuman_5.geometry}
              material={materials.MaleHumanBody}
              skeleton={nodes.MaleHuman_5.skeleton}
              morphTargetDictionary={nodes.MaleHuman_5.morphTargetDictionary}
              morphTargetInfluences={nodes.MaleHuman_5.morphTargetInfluences}
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="MaleHuman_6"
              geometry={nodes.MaleHuman_6.geometry}
              material={materials.MaleHumanOutfitBottom}
              skeleton={nodes.MaleHuman_6.skeleton}
              morphTargetDictionary={nodes.MaleHuman_6.morphTargetDictionary}
              morphTargetInfluences={nodes.MaleHuman_6.morphTargetInfluences}
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="MaleHuman_7"
              geometry={nodes.MaleHuman_7.geometry}
              material={materials.MaleHumanOutfitFootwear}
              skeleton={nodes.MaleHuman_7.skeleton}
              morphTargetDictionary={nodes.MaleHuman_7.morphTargetDictionary}
              morphTargetInfluences={nodes.MaleHuman_7.morphTargetInfluences}
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="MaleHuman_8"
              geometry={nodes.MaleHuman_8.geometry}
              material={materials.MaleHumanOutfitTop}
              skeleton={nodes.MaleHuman_8.skeleton}
              morphTargetDictionary={nodes.MaleHuman_8.morphTargetDictionary}
              morphTargetInfluences={nodes.MaleHuman_8.morphTargetInfluences}
            />
            <Html
            position={[180, -150, 0]}
            >
              <button className="btn-3D" onClick={handleMaleWalking}>1.</button>
              <button className="btn-3D" onClick={handleMaleFatigue}>2.</button>
              <button className="btn-3D" onClick={handleMaleTired}>3.</button>
              <button className="btn-3D" onClick={handleMaleIdle}>4.</button>
              <button className="btn-3D" onClick={handleMaleBreathless}>5.</button>
            </Html>
          </group>
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

/* Animaciones disponibles del modelo: 
'Breathless'

'Fatigue'

'Tired'

'Idle'

'Walking'

*/
export default MaleHumanFull;
useGLTF.preload("/models-3d/aortic-stenosis-models/male-human.glb");
