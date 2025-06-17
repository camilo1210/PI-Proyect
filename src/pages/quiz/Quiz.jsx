import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import ModeloQuiz from "./ModeloQuiz";

const Quiz = () => {
  const [feedback, setFeedback] = useState(null);
  const correctAnswer = "heartRotten"; // nombre del modelo

  const handleSelection = (selectedModelName) => {
    setFeedback(selectedModelName === correctAnswer ? "¡Correcto!" : "Incorrecto");
  };

  return (
    <div className="quiz-container">
      <Canvas shadows camera={{ position: [0, 60, 120], fov: 60 }}>
        <Suspense fallback={null}>
          <ModeloQuiz onModelClick={handleSelection} />
        </Suspense>
      </Canvas>
      <div className="quiz-question">
        <p>¿Cuál de los dos modelos representa el corazón roto?</p>
        {feedback && <p className={feedback === "¡Correcto!" ? "correct" : "wrong"}>{feedback}</p>}
      </div>
    </div>
  );
};

export default Quiz;
