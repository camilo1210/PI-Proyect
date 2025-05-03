import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function HeartFailureLights() {
  const spotRef = useRef();

  // Pulso para intensidad de foco
  const heartbeat = (t) => {
    const cycle = t % 1.2;
    if (cycle < 0.1 || (cycle > 0.2 && cycle < 0.3)) {
      return 1 + Math.sin((cycle % 0.1) * Math.PI) * 0.5;
    }
    return 1;
  };

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const beat = heartbeat(t);
    if (spotRef.current) {
      const r = 1.5;
      spotRef.current.position.set(
        Math.cos(t * 0.5) * r,
        3,
        Math.sin(t * 0.5) * r
      );
      spotRef.current.intensity = 2.5 * beat;
      spotRef.current.target.updateMatrixWorld();
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} />
      <spotLight
        ref={spotRef}
        position={[0, 3, 0]}
        color="#ff4f5e"
        distance={10}
        angle={Math.PI / 8}
        penumbra={0.4}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0005}
        shadow-radius={4}
      />
    </>
  );
}