import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function HeartMonitorModel({ trigger = false, ...props }) {
  const { nodes, materials } = useGLTF("/models-3d/broken-heart-sysdrome/heart-egc.glb");
  const meshRef = useRef();
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (trigger) {
      startTimeRef.current = performance.now();
    }
  }, [trigger]);

  useFrame(() => {
    if (!trigger || !meshRef.current) return;

    const elapsed = (performance.now() - (startTimeRef.current || 0)) / 1000;
    if (elapsed < 5) {
      const scale = 1 + Math.sin(elapsed * 10) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    } else {
      meshRef.current.scale.set(1, 1, 1);
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        geometry={nodes.HeartEGCModel.geometry}
        material={materials.HeartEGCMaterial}
        castShadow
        receiveShadow
      />
    </group>
  );
}
