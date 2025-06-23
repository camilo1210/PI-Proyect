/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unknown-property */

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import preguntas from "./preguntas";
import { Html } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import "./Quiz.css";
import { useEffect } from "react";
import useAuthStore from "../../stores/use-auth-store";
/* Modelos */
import { BrokenHeartModelHome } from "../broken-heart-syndrome/models-3d/BrokenHeartModelHome";
import { Model as HealthyHeartModel } from "../cardiac-hypertension/models-3d/HealthyHeartModel";
import StenosisHeart from "../aortic-stenosis/models-3d/fullHeart";
import StenosisHalfHeart from "../aortic-stenosis/models-3d/HalfHeartDetails";
import { HeartPainModel } from "../broken-heart-syndrome/models-3d/HeartPainModel";
import { HalfHeart } from "../aortic-stenosis/models-3d/halfHeart";
import { FullHeart } from "../aortic-stenosis/models-3d/fullHeart";
import HalfHeartDetails from "../aortic-stenosis/models-3d/HalfHeartDetails";
import MaleHumanModelCare from "../aortic-stenosis/models-3d/maleHumanCares";
import { ManModel } from "../broken-heart-syndrome/models-3d/ManModel";
import MaleHumanModel from "../aortic-stenosis/models-3d/maleHuman";
import { HeartCracksModel } from "../broken-heart-syndrome/models-3d/HeartCracksModel";
import { HeartMonitorModel } from "../broken-heart-syndrome/models-3d/HeartMonitorModel";
import HeartDilatedModel1 from "../dilated-cardiomyopathy/models-3d/DilatedCardiomiopathyModel1";
import HeartDilatedModel2 from "../dilated-cardiomyopathy/models-3d/DilatedCardiomioPathyModel2";
import HeartDilatedModel3 from "../dilated-cardiomyopathy/models-3d/DilatedCardiomiopathyModel3";
import HeartDilatedModelQuiz from "../dilated-cardiomyopathy/models-3d/DilatedCardiomiopathyModelQuiz";
import HeartDilatedModel from "../dilated-cardiomyopathy/models-3d/DilatedCardiomiopathyModel";
import ModelDizzy from "../dilated-cardiomyopathy/models-3d/ManDizzyAnimation";
import HealthyFood from "../heart-failure/model-3d/HealthyFood";
import HeartModelTwo from "../heart-failure/model-3d/HeartModelTwo";
import Cigarettes from "../heart-failure/model-3d/Cigarettes";
import HeartModelOne from "../heart-failure/model-3d/HeartModelOne";
import { Model } from "../cardiac-hypertension/models-3d/HealthyHeartModel";
import Medallero3D from "./Medallero3D";
import GoldenMedal from "./GoldenMedal";
import TopResultados from "./TopResultados/TopResultados";

const Quiz = () => {
  const [feedback, setFeedback] = useState(null);
  const [preguntaIndex, setPreguntaIndex] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [puntuacion, setPuntuacion] = useState(0);
  const { userLogged, loginGoogleWithPopUp, logout } = useAuthStore();
  const preguntaActual = preguntas[preguntaIndex];
  const [mensajeGuardado, setMensajeGuardado] = useState("");


  const handleModelClick = (e) => {
    e.stopPropagation();
    const name =
      e.object?.parent?.parent?.name ||
      e.object?.parent?.name ||
      e.object?.name ||
      "";
    console.log("Clicked model name:", name);
    if (!name || respuestaSeleccionada) return;

    const esCorrecto = name === preguntaActual.modeloCorrecto;
      setFeedback(esCorrecto ? "¡Correcto!" : "Incorrecto");
      setRespuestaSeleccionada(name);

    if (esCorrecto) setPuntuacion((prev) => prev + 1);
  };

  const handleRestartQuiz = () => {
    setPreguntaIndex(0);
    setRespuestaSeleccionada(null);
    setFeedback(null);
    setPuntuacion(0);
  };

  const handleSiguientePregunta = () => {
    setPreguntaIndex((prev) => prev + 1);
    setRespuestaSeleccionada(null);
    setFeedback(null);
  };

  const guardarResultado = async () => {
    console.log("🌐 API BASE:", import.meta.env.VITE_API_BASE_URL);
    if (!userLogged) {
      console.log("⛔ Usuario no logueado");
      return;
    }
    console.log("📤 Guardando desde QUIZ");

    const { displayName, email } = userLogged;
    const data = {
      displayName,
      email,
      score: puntuacion,
      totalQuestions: preguntas.length,
    };

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/quiz/save-score`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) throw new Error("Error al guardar puntuación");
      console.log("Resultado guardado correctamente");
      console.log("Datos enviados:", data);

      setMensajeGuardado("Resultado guardado correctamente");
      setTimeout(() => {
      setMensajeGuardado("");
      }, 3000);

    } catch (err) {
      console.error("Error al guardar el resultado:", err);
    }
  };

  if (!preguntaActual) {
    return (
      <div className="quiz-final">
        <h2>¡Has completado el quiz!</h2>
        <p>
          Puntuación final: {puntuacion} de {preguntas.length}
        </p>
      </div>
    );
  }

  useEffect(() => {
    if (preguntaIndex === preguntas.length && userLogged) {
      guardarResultado();
    }
  }, [preguntaIndex]);
  const DynamicModel = ({ name, position, scale, children }) => (
    <RigidBody type="dynamic" colliders="hull" mass={1}>
      <group name={name} position={position} scale={scale}>
        {children}
      </group>
    </RigidBody>
  );

  return (
    <div className="quiz-container">
      <div className="quiz-margin">
        <div className="quiz-canvas">
          <Suspense fallback={<p>Cargando modelos...</p>}>
            <Canvas
              shadows
              camera={{ position: [0, 60, 120], fov: 60 }}
              style={{ height: "500px", width: "600px" }}
            >
              <Physics gravity={[0, -8, 0]} >
                <ambientLight intensity={0.4} />
                <directionalLight
                  castShadow
                  intensity={0.7}
                  position={[50, 100, 50]}
                  shadow-mapSize-width={2048}
                  shadow-mapSize-height={2048}
                />
                <RigidBody type="fixed" colliders={false}>
                  <mesh rotation-x={-Math.PI / 2} receiveShadow>
                    <circleGeometry args={[624, 624]} />
                    <meshStandardMaterial color="#4caf50" roughness={0.8} />
                  </mesh>
                  <CuboidCollider args={[80, 4, 100]} />
                </RigidBody>

                {/* Modelos */}
                {/* Renderizar modelos solo si están en la pregunta */}

                {/* ===========PREGUNTA 1============ */}
                <RigidBody type="dynamic" colliders={"hull"}>
                  {preguntaActual.modelos.includes("heartHealthy") && (
                    <group
                      position={[-20, 50, 0]}
                      name="heartHealthy"
                      scale={[10, 10, 10]}
                    >
                      <HealthyHeartModel onPointerDown={handleModelClick} />
                    </group>
                  )}
                </RigidBody>
                {/* ===========PREGUNTA 1============ */}
                <RigidBody type="dynamic" colliders={"hull"}>
                  {preguntaActual.modelos.includes("heartRotten") && (
                    <group
                      position={[20, 50, 0]}
                      name="heartRotten"
                      scale={[10, 10, 10]}
                    >
                      <BrokenHeartModelHome onPointerDown={handleModelClick} />
                    </group>
                  )}
                </RigidBody>
                {/* ===========PREGUNTA 2============ */}
                <DynamicModel >
                  {preguntaActual.modelos.includes("HeartDilated") && (
                    <group
                      position={[-20, 50, 0]}
                      name="HeartDilated"
                      scale={[10, 10, 10]}
                    >
                      <HeartModelOne onPointerDown={handleModelClick} />
                    </group>
                  )}
                </DynamicModel>
                {/* ===========PREGUNTA 2============ */}
                <DynamicModel>
                  {preguntaActual.modelos.includes("stenosisHeart") && (
                    <group
                      position={[20, 50, 0]}
                      name="stenosisHeart"
                      scale={[40, 40, 40]}
                    >
                      <StenosisHeart onPointerDown={handleModelClick} />
                    </group>
                  )}
                </DynamicModel>
                {/* ===========PREGUNTA 3============ */}
                <DynamicModel>
                  {preguntaActual.modelos.includes("HeartDilatedModelQuiz") && (
                    <group
                      position={[-20, 50, 0]}
                      name="HeartDilatedModelQuiz"
                      scale={5}
                    >
                      <HeartDilatedModelQuiz onPointerDown={handleModelClick} />
                    </group>
                  )}
                </DynamicModel>
                {/* ===========PREGUNTA 3============ */}
                <DynamicModel>
                  {preguntaActual.modelos.includes("heartMonitor") && (
                    <group
                      position={[20, 50, 0]}
                      name="heartMonitor"
                      scale={30}
                    >
                      <HeartMonitorModel onPointerDown={handleModelClick} />
                    </group>
                  )}
                </DynamicModel>
                {/* ===========PREGUNTA 4============ */}
                <DynamicModel>
                  {preguntaActual.modelos.includes("cigarettes") && (
                    <group
                      position={[-20, 50, 0]}
                      name="cigarettes"
                      scale={[100, 100, 100]}
                    >
                      <Cigarettes onPointerDown={handleModelClick} />
                    </group>
                  )}
                </DynamicModel>
                {/* ===========PREGUNTA 4============ */}
                <DynamicModel>
                  {preguntaActual.modelos.includes("healthyFood") && (
                    <group
                      position={[20, 50, 0]}
                      name="healthyFood"
                      scale={[2, 2, 2]}
                    >
                      <HealthyFood onPointerDown={handleModelClick} />
                    </group>
                  )}
                </DynamicModel>
                {/* ===========PREGUNTA 5============ */}
                <DynamicModel>
                  {preguntaActual.modelos.includes("heartHypertension") && (
                    <group
                      position={[20, 50, 0]}
                      name="heartHypertension"
                      scale={[10, 10, 10]}
                    >
                      <Model onPointerDown={handleModelClick} />
                    </group>
                  )}
                </DynamicModel>
                {/* ===========PREGUNTA 5============ */}
                <DynamicModel>
                  {preguntaActual.modelos.includes("heartCracks") && (
                    <group
                      position={[-20, 50, 0]}
                      name="heartCracks"
                      scale={[30, 30, 30]}
                    >
                      <HeartCracksModel onPointerDown={handleModelClick} />
                    </group>
                  )}
                </DynamicModel>

                <Html position={[40, 40, 0]}>
                  <div
                    style={{
                      backgroundColor: "#ffffffdd",
                      padding: "10px 16px",
                      borderRadius: "10px",
                      fontWeight: "bold",
                      fontSize: "16px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                    }}
                  >
                    Puntuación: {puntuacion} / {preguntas.length}
                  </div>
                </Html>

                <OrbitControls target={[0, 10, 0]} />
              </Physics>
            </Canvas>
          </Suspense>
        </div>
        <div className="quiz-question">
          <h2>{preguntaActual.pregunta}</h2>

          {feedback && (
            <div className={`feedback ${feedback === "¡Correcto!" ? "correct" : "incorrecto"}`}>
              <p>{feedback}</p>

              {feedback === "¡Correcto!" ? (
                <p>{preguntaActual.feedback}</p>
              ) : (
                <p>
                  La respuesta correcta era: <strong>{preguntaActual.modeloCorrecto}</strong>
                  <br />
                  {preguntaActual.feedback || "Intenta observar mejor las diferencias entre los modelos."}
                </p>
              )}
            </div>
          )}


          {feedback && preguntaIndex < preguntas.length - 1 && (
            <button onClick={handleSiguientePregunta}>Siguiente</button>
          )}

          {feedback && preguntaIndex === preguntas.length - 1 && (
            <>
              <p>¡Has terminado todas las preguntas!</p>
              <div className="quiz-final">
                <h2>¡Has completado el quiz!</h2>
                <p>
                  Puntuación final: {puntuacion} de {preguntas.length}
                </p>
                <button onClick={handleRestartQuiz} className="btnClose">
                  Reiniciar Quiz
                </button>

                {userLogged && (
                  <button onClick={guardarResultado}>
                    Guardar Resultado
                  </button>
                )}

                {!userLogged && (
                  <div style={{ marginBottom: "16px" }}>
                    <p>Para guardar tu puntuación, inicia sesión:</p>
                    <button className="btnClose" onClick={loginGoogleWithPopUp}>
                      Iniciar sesión
                    </button>
                  </div>
                )}

                <h2 style={{ marginTop: "32px" }}> Medallero</h2>
                <div style={{ marginTop: "16px" }}>
                  <Medallero3D />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <TopResultados />
    </div>
  );
};

export default Quiz;
