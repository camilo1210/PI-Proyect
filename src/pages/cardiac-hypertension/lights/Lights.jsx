import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Lights = () => {
  const spotLightRef = useRef();

  const heartbeat = (t) => {
    const bpm = 60;
    const beatTime = 60 / bpm;
    const cycle = t % (beatTime * 2);
    if (cycle < beatTime * 0.2 || (cycle > beatTime * 0.5 && cycle < beatTime * 0.7)) {
      return 1 + Math.sin((cycle % (beatTime * 0.2)) * Math.PI / (beatTime * 0.2)) * 0.5;
    }
    return 1;
  };

  useFrame(({ clock }) => {
    const spot = spotLightRef.current;
    if (!spot) {return};
    const t = clock.getElapsedTime();
    const beat = heartbeat(t);
    const r = 1.5;
    spot.position.set(Math.cos(t * 0.5) * r, 3, Math.sin(t * 0.5) * r);
    spot.target.position.set(0, 0, 0);
    spot.target.updateMatrixWorld();
    spot.intensity = 2.5 * beat;
  });

  return (
    <>
      {/* Luz ambiental básica */}
      <ambientLight intensity={1} />

      {/* Luz direccional extra para rellenar sombras */}
      <directionalLight position={[5, 5, 5]} intensity={0.3} />

      {/* Spot animado en latido  */ }
      <spotLight
        ref={spotLightRef}
        position={[0, 3, 0]}
        color="#ff4f5e"
        distance={10}
        intensity={2.5}
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
};

export default Lights;
