import { useEffect, useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function HeartPainModel(props) {
  const { nodes, materials } = useGLTF("/models-3d/broken-heart-sysdrome/heart-pain.glb");
  const meshRef = useRef();
  const [vibrating, setVibrating] = useState(false);
  const [startTime, setStartTime] = useState(0);

  const triggerVibration = () => {
    setVibrating(true);
    setStartTime(performance.now());
  };

   useEffect(() => {
    console.log("Nodos cargados para HeartPainModel:", nodes);
    console.log("Materiales cargados para HeartPainModel:", materials);
  }, [nodes, materials]); // Se ejecutará cuando nodes o materials cambien (es decir, cuando se carguen)

  const handleKeyDown = (e) => {
    if (e.key === "d") {
      triggerVibration();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useFrame(() => {
    if (vibrating && meshRef.current) {
      const elapsed = performance.now() - startTime;
      if (elapsed < 1000) {
        meshRef.current.position.x = Math.sin(elapsed * 0.05) * 0.05;
      } else {
        meshRef.current.position.x = 0;
        setVibrating(false);
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
          onClick={triggerVibration}
        >
          Simular Dolor
        </button>
      </Html>
    </group>
  );
}

useGLTF.preload("/public/models-3d/broken-heart-sysdrome/heart-pain.glb");
