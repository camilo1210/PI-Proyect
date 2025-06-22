/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Text } from "@react-three/drei";

const Medallero3D = () => {
  const [topScores, setTopScores] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/quiz/scores`)
      .then((res) => res.json())
      .then((data) => setTopScores(data))
      .catch(console.error);
  }, []);

  if (topScores.length < 3) return <p>Cargando medallero...</p>;

  return (
    <div style={{ width: "100%", height: 500 }}>
      <Canvas shadows camera={{ position: [0, 8, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <OrbitControls />

        {/* ======= Segundo Lugar ======= */}
        <group position={[-3, 0, 0]}>
          <mesh position={[0, 1, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="silver" />
          </mesh>
          <Text
            position={[0, 2.2, 0]}
            fontSize={0.4}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            2do
          </Text>
          <Html position={[0, 1, 0]} center>
            <div
              style={{
                textAlign: "center",
                background: "#fff9",
                padding: "4px 8px",
                borderRadius: "6px",
                fontWeight: "bold",
              }}
            >
              {topScores[1].displayName}
              <br />
              {topScores[1].score} pts
            </div>
          </Html>
        </group>

        {/* ======= Primer Lugar ======= */}
        <group position={[0, 0, 0]}>
          <mesh position={[0, 1.5, 0]}>
            <boxGeometry args={[2, 3, 2]} />
            <meshStandardMaterial color="gold" />
          </mesh>
          <Text
            position={[0, 3.3, 0]}
            fontSize={0.5}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            1er
          </Text>
          <Html position={[0, 1.5, 0]} center>
            <div
              style={{
                textAlign: "center",
                background: "#fff9",
                padding: "4px 8px",
                borderRadius: "6px",
                fontWeight: "bold",
              }}
            >
              {topScores[0].displayName}
              <br />
              {topScores[0].score} pts
            </div>
          </Html>
        </group>

        {/* ======= Tercer Lugar ======= */}
        <group position={[3, 0, 0]}>
          <mesh position={[0, 0.75, 0]}>
            <boxGeometry args={[2, 1.5, 2]} />
            <meshStandardMaterial color="#cd7f32" />
          </mesh>
          <Text
            position={[0, 1.7, 0]}
            fontSize={0.35}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            3er
          </Text>
          <Html position={[0, 0.75, 0]} center>
            <div
              style={{
                textAlign: "center",
                background: "#fff9",
                padding: "4px 8px",
                borderRadius: "6px",
                fontWeight: "bold",
              }}
            >
              {topScores[2].displayName}
              <br />
              {topScores[2].score} pts
            </div>
          </Html>
        </group>
      </Canvas>
    </div>
  );
};

export default Medallero3D;

