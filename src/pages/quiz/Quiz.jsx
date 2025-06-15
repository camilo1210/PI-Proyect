import { useCallback } from "react";
import useQuizStore from "../../stores/use-quiz-store";
import "./Quiz.css";
import { Canvas } from "@react-three/fiber";
import Recipient from "../aortic-stenosis/models-3d/Recipient";


const Quiz = () => {
  const { quiz, incrementQuizProgress } = useQuizStore();

  const handleQuizNext = useCallback(() => {
    incrementQuizProgress();
  }, [incrementQuizProgress]);
  
  return (
    <>
    <div>
      <h1>Quiz</h1>
      <span>Progreso del quiz: {quiz.percentageQuizCompleted} % </span>
      <Canvas>
        <Recipient />
      </Canvas>
      <button onClick={handleQuizNext}>Siguiente</button>
    </div>
    </>
  );
};

export default Quiz;
