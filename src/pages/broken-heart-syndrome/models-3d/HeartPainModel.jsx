import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function HeartPainModel({ trigger = false, ...props }) {
  const { nodes, materials } = useGLTF("/models-3d/broken-heart-sysdrome/heart-pain.glb");
  const meshRef = useRef();
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (trigger) {
      startTimeRef.current = performance.now();
    }
  }, [trigger]);

  useFrame(() => {
    const elapsed = performance.now() - (startTimeRef.current || 0);
    if (trigger && meshRef.current) {
      if (elapsed < 1000) {
        meshRef.current.position.x = Math.sin(elapsed * 0.05) * 0.05;
      } else {
        meshRef.current.position.x = 0;
      }
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        geometry={nodes.HeartPainModel_1.geometry}
        material={materials.HeartPainMaterial}
        castShadow
        receiveShadow
      />
    </group>
  );
}
