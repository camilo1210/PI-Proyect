/* eslint-disable react/no-unknown-property */
import { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Estados del latido
const BeatStages = {
  OFF: 0, // Sin latido
  SOFT: 1, // Latido suave
  STRONG: 2, // Latido fuerte
};

export function BrokenHeartModel(props) {
  // Cargamos el modelo GLTF y extraemos sus nodos y materiales
  const { nodes, materials } = useGLTF(
    "/models-3d/broken-heart-sysdrome/broken-heart.glb"
  );

  // Referencias a mesh y sonidos
  const meshRef = useRef();
  const heartbeatSoftRef = useRef(null);
  const heartbeatStrongRef = useRef(null);
  const lastBeatRef = useRef(0); // Para evitar latidos demasiado frecuentes

  // Accedemos a la cámara para poder conectar el listener de audio
  const { camera } = useThree();

  // Estado actual del clic: OFF → SOFT → STRONG → OFF
  const [clickStage, setClickStage] = useState(BeatStages.OFF);

  // Configuramos los sonidos al cargar el componente
  useEffect(() => {
    const listener = new THREE.AudioListener();
    camera.add(listener);

    const soft = new THREE.Audio(listener);
    const strong = new THREE.Audio(listener);
    const loader = new THREE.AudioLoader();

    // Cargamos sonido de latido normal
    loader.load("/sounds/heart-beating-normal.mp3", (buffer) => {
      soft.setBuffer(buffer);
      soft.setVolume(3);
      soft.setLoop(false);
    });

    // Cargamos sonido de latido fuerte
    loader.load("/sounds/heart-beating-fast.mp3", (buffer) => {
      strong.setBuffer(buffer);
      strong.setVolume(5);
      strong.setLoop(false);
    });

    // Guardamos referencias
    heartbeatSoftRef.current = soft;
    heartbeatStrongRef.current = strong;

    // Limpieza: detener sonidos y quitar listener
    return () => {
      if (soft.isPlaying) {
        soft.stop();
      }
      if (strong.isPlaying) {
        strong.stop();
      }
      camera.remove(listener);
    };
  }, [camera]);


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
    const cycle = time % 0.85;
    const isBeat = cycle < 0.15 || (cycle > 0.2 && cycle < 0.35);

    // Si es un nuevo latido y ha pasado suficiente tiempo desde el anterior
    if (isBeat && time - lastBeatRef.current > 0.3) {
      lastBeatRef.current = time;

      // Seleccionamos sonido según etapa
      const sound =
        clickStage === BeatStages.SOFT
          ? heartbeatSoftRef.current
          : heartbeatStrongRef.current;

      if (sound) {
        if (sound.isPlaying) {
          sound.stop();
        } // Detiene si estaba sonando aún
        sound.play();
      }
    }

    // Configuramos cuánto escala y cuánto brilla
    const scaleFactor = clickStage === BeatStages.SOFT ? 0.1 : 0.2;
    const intensityFactor = clickStage === BeatStages.SOFT ? 0.3 : 0.6;

    // Valor oscilatorio del latido
    const value = isBeat ? Math.sin((cycle % 0.15) * Math.PI) : 0;

    return {
      scale: 1 + value * scaleFactor, // tamaño del corazón
      intensity: value * intensityFactor, // brillo del material
    };
  };

  // Si se apaga (clickStage === 0), aseguramos que los sonidos se detengan
  useEffect(() => {
    if (clickStage === BeatStages.OFF) {
      heartbeatSoftRef.current?.isPlaying && heartbeatSoftRef.current.stop();
      heartbeatStrongRef.current?.isPlaying &&
        heartbeatStrongRef.current.stop();
    }
  }, [clickStage]);

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
        geometry={nodes.BrokenHeartModel.geometry}
        material={materials.BrokenHeartMaterial}
        onClick={handleClick}
      />
    </group>
  );
}

// Precarga el modelo 3D para que cargue más rápido cuando se necesite
useGLTF.preload("/models-3d/broken-heart-sysdrome/broken-heart.glb");
