/* eslint-disable react/no-unknown-property */
import { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame} from "@react-three/fiber";
import * as THREE from "three"; // Asegúrate de importar THREE si lo necesitas para Color

// Estados del latido
const BeatStages = {
  OFF: 0, // Sin latido
  SOFT: 1, // Latido suave
  STRONG: 2, // Latido fuerte
};

export function BrokenHeartModelHome(props) {
  // Cargamos el modelo GLTF y extraemos sus nodos y materiales
  const { nodes, materials } = useGLTF(
    "/models-3d/broken-heart-sysdrome/broken-heart.glb"
  );

  // Referencia a mesh
  const meshRef = useRef();

  // Estado actual del clic: OFF → SOFT → STRONG → OFF
  const [clickStage, setClickStage] = useState(BeatStages.OFF);

  // Eliminamos el useEffect para la configuración de sonidos

  // Manejador de teclado para activar el latido (si lo quieres mantener)
  useEffect(() => {
    const handleKeyDown = (a) => {
      if (a.key === "a") {
        setClickStage((prev) => (prev + 1) % 3);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Función que calcula el latido y devuelve escala e intensidad del brillo
  const heartbeat = (time) => {
    if (clickStage === BeatStages.OFF) {
      return { scale: 1, intensity: 0 };
    }

    // Ciclo de latido (simulado)
    // El latido ocurre dos veces en un ciclo de 0.85 segundos
    const cycle = time % 0.85;
    const isBeat = cycle < 0.15 || (cycle > 0.2 && cycle < 0.35); // Dos pulsos por ciclo

    // Configuramos cuánto escala y cuánto brilla
    const scaleFactor = clickStage === BeatStages.SOFT ? 0.1 : 0.2; // Escala más para latido fuerte
    const intensityFactor = clickStage === BeatStages.SOFT ? 0.3 : 0.6; // Brillo más para latido fuerte

    // Valor oscilatorio del latido (simula un pulso que sube y baja)
    const value = isBeat ? Math.sin((cycle % 0.15) * Math.PI / 0.15 * Math.PI) : 0; // Ajuste para que la sinusoide complete el ciclo en 0.15s


    return {
      scale: 1 + value * scaleFactor, // tamaño del corazón
      intensity: value * intensityFactor, // brillo del material
    };
  };

  // Eliminamos el useEffect para detener sonidos cuando clickStage === OFF

  // Animación en cada frame
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const { scale, intensity } = heartbeat(t);

    // Escalamos el modelo según el latido
    if (meshRef.current) {
      meshRef.current.scale.setScalar(3.5 * scale);
    }

    // Aplicamos brillo (emissive) al material
    if (materials.BrokenHeartMaterial) {
      // Asegúrate de que el material 'BrokenHeartMaterial' exista en tu modelo GLB
      materials.BrokenHeartMaterial.emissive = new THREE.Color(0xff2e63); // rojo brillante
      materials.BrokenHeartMaterial.emissiveIntensity = intensity;
    }
  });

  // Maneja el clic para cambiar de etapa de latido
  const handleClick = () => {
    setClickStage((prev) => (prev + 1) % 3); // Cicla entre 0, 1, 2
  };

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.BrokenHeartModel.geometry} // Asegúrate de que 'BrokenHeartModel' sea el nombre correcto del nodo
        material={materials.BrokenHeartMaterial} // Asegúrate de que 'BrokenHeartMaterial' sea el nombre correcto del material
        onClick={handleClick}
      />
    </group>
  );
}

// Precarga el modelo 3D para que cargue más rápido cuando se necesite
useGLTF.preload("/models-3d/broken-heart-sysdrome/broken-heart.glb");