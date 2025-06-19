import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import preguntas from "./preguntas";

/* Modelos */
import { BrokenHeartModelHome } from "../broken-heart-syndrome/models-3d/BrokenHeartModelHome";
import { Model as HealthyHeartModel } from "../cardiac-hypertension/models-3d/HealthyHeartModel";
import StenosisHeart from "../aortic-stenosis/models-3d/fullHeart";

const Quiz = () => {
  const [feedback, setFeedback] = useState(null);
  const [preguntaIndex, setPreguntaIndex] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [puntuacion, setPuntuacion] = useState(0);

  const preguntaActual = preguntas[preguntaIndex];

  const handleModelClick = (e) => {
    e.stopPropagation();
    const name = e.object?.name || e.object?.parent?.name || "";
    if (!name || respuestaSeleccionada) return;

    const esCorrecto = name === preguntaActual.modeloCorrecto;
    setFeedback(esCorrecto ? "¡Correcto!" : "Incorrecto");
    if (esCorrecto) setPuntuacion((prev) => prev + 1);
    setRespuestaSeleccionada(name);
  };

  const handleSiguientePregunta = () => {
    setPreguntaIndex((prev) => prev + 1);
    setRespuestaSeleccionada(null);
    setFeedback(null);
  };

  if (!preguntaActual) {
    return (
      <div className="quiz-final">
        <h2>¡Has completado el quiz!</h2>
        <p>Puntuación final: {puntuacion} de {preguntas.length}</p>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-sidebar">
        {/* <button>Botón 1</button>
        <button>Botón 2</button> */}
      </div>
      <div className="quiz-canvas">
        <Suspense fallback={<p>Cargando modelos...</p>}>
          <Canvas shadows camera={{ position: [0, 60, 120], fov: 60 }} style={{ height: "500px", width: "100%" }}>
            <ambientLight intensity={0.4} />
            <directionalLight
              castShadow
              intensity={0.7}
              position={[50, 100, 50]}
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <mesh rotation-x={-Math.PI / 2} receiveShadow>
              <circleGeometry args={[80, 64]} />
              <meshStandardMaterial color="#4caf50" roughness={0.8} />
            </mesh>

            {/* Modelos */}
            <group position={[-20, 10, 0]} name="heartHealthy" scale={[10, 10, 10]}>
              <HealthyHeartModel onClick={handleModelClick} />
            </group>

            <group position={[0, 10, 0]} name="stenosisHeart" scale={70}>
              <StenosisHeart onClick={handleModelClick} />
            </group>

            <group position={[20, 10, 0]} name="heartRotten" scale={[10, 10, 10]}>
              <BrokenHeartModelHome onClick={handleModelClick} />
            </group>

            <OrbitControls target={[0, 10, 0]} />
          </Canvas>
        </Suspense>
      </div>
      <div className="quiz-question">
        <h2>{preguntaActual.pregunta}</h2>

        {feedback && (
          <p className={feedback === "¡Correcto!" ? "correct" : "wrong"}>
            {feedback}
            {feedback === "¡Correcto!" && (
              <>
                <br />
                {preguntaActual.feedback}
              </>
            )}
            {feedback !== "¡Correcto!" && (
              <>
                <br />
                La respuesta correcta era: <strong>{preguntaActual.modeloCorrecto}</strong>
              </>
            )}
          </p>
        )}

        {feedback && preguntaIndex < preguntas.length - 1 && (
          <button onClick={handleSiguientePregunta}>Siguiente</button>
        )}

        {feedback && preguntaIndex === preguntas.length - 1 && (
          <p>¡Has terminado todas las preguntas!</p>
        )}
      </div>
    </div>
  );
};

export default Quiz;
