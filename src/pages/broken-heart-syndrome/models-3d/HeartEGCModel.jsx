import { useEffect, useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function HeartEGCModel(props) {
  const { nodes, materials } = useGLTF("/models-3d/broken-heart-sysdrome/heart-egc.glb");
  const meshRef = useRef();
  const [beating, setBeating] = useState(false);
  const [startTime, setStartTime] = useState(0);

  const startHeartbeat = () => {
    setBeating(true);
    setStartTime(performance.now());
  };

   useEffect(() => {
    console.log("Nodos cargados para HeartEGCModel:", nodes);
    console.log("Materiales cargados para HeartEGCModel:", materials);
  }, [nodes, materials]); // Se ejecutará cuando nodes o materials cambien (es decir, cuando se carguen)

  const handleKeyDown = (e) => {
    if (e.key === "b") {
      startHeartbeat();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useFrame(() => {
    if (beating && meshRef.current) {
      const elapsed = (performance.now() - startTime) / 1000;
      if (elapsed < 5) {
        const scale = 1 + Math.sin(elapsed * 10) * 0.05;
        meshRef.current.scale.set(scale, scale, scale);
      } else {
        meshRef.current.scale.set(1, 1, 1);
        setBeating(false);
      }
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
      <Html position={[0, -1, 4]}>
        <button
          style={{
            padding: "12px 20px",
            fontSize: "16px",
            borderRadius: "10px",
            backgroundColor: "#800000",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            transform: "rotateY(-10deg)",
            boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
          }}
          onClick={startHeartbeat}
        >
          Mostrar Latido
        </button>
      </Html>
    </group>
  );
}

useGLTF.preload("/models-3d/broken-heart-sysdrome/heart-egc.glb");
