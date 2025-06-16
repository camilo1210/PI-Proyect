import "./Quiz.css";
import preguntas from "./preguntas";
import { useEffect } from "react";
import { useState } from "react";
import Modelo3D from "./Modelo3D"; 


const Quiz = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);

  function handleAnswerSubmit(correcta, e) {
    if (correcta) setPuntuacion(puntuacion + 1);

    e.target.classList.add(correcta ? "correct" : "incorrect");

    if (preguntaActual === preguntas.length - 1) {
      setIsFinished(true);
    } else {
      setPreguntaActual(preguntaActual + 1);
    }
  }



  if (isFinished) return (
    <main className="Quiz">
      <div className="juego-terminado">
        <span>Obtuviste {puntuacion} de {preguntas.length}</span>
        <button onClick={() => window.location.reload()}>Volver a jugar</button>
      </div>
       <div className="modelo-3d">
          <Modelo3D />
        </div>
    </main>
  );


  const handleRespuesta = (opcion, index) => {
    setRespuestaSeleccionada(index);

    if (opcion.correcta) {
      setPuntuacion(puntuacion + 1);
    }


    setTimeout(() => {
      setRespuestaSeleccionada(null);
      if (preguntaActual + 1 < preguntas.length) {
        setPreguntaActual(preguntaActual + 1);
      } else {
        setIsFinished(true);
      }
    }, 1000);
  };


  return (
    <>
      <div className="quiz-container">
        <div className="quiz-left">
          <div className="quiz-progress">
            <h1>❤️ Quiz Cardiovascular</h1>
            <span>Pregunta  {preguntaActual + 1} de {preguntas.length} </span>
          </div>

          <div className="quiz-question">
            <h2>{preguntas[preguntaActual].titulo}</h2>
          </div>
        </div>

        <div className="quiz-right">
          {preguntas[preguntaActual].opciones.map((respuesta) => (
            <button key={respuesta.textoRespuesta}
              onClick={(e) => handleAnswerSubmit(respuesta.correcta, e)}>
              {respuesta.textoRespuesta}</button>
          ))}

        </div>
      </div>
    </>
  );
}
export default Quiz;
