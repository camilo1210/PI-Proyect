

const preguntas = [
    {
        pregunta: "¿Cuál de los dos modelos representa el corazón roto?",
        modelos: ["heartHealthy", "heartRotten"],
        modeloCorrecto:"heartRotten" ,
        feedback:"El corazón roto tiene daños visibles y se ve fracturado."
    },

    {
        pregunta: "¿Cuál de los dos modelos representa la enfermedad estenosis aórtica?",
        modelos: ["HeartDilated", "stenosisHeart"],
        modeloCorrecto: "stenosisHeart",
        feedback:"Un corazón con estenosis tiene las válvulas aórticas engrosadas, lo que impide el flujo adecuado de sangre."
    },

    {
        pregunta: "¿Cuál de los dos modelos 'NO' representa la enfermedad miocardiopatía dilatada?",
        modelos: ["HeartDilatedModelQuiz", "heartMonitor"],
        modeloCorrecto: "heartMonitor",
        feedback:"El corazon con miocardiopatia dilatada por lo general se representa siendo mas grande que un corazon que no tiene esta enfermadad",
    },

    {
        pregunta: "¿Qué debes evitar para no tener insuficiencia cardíaca?",
        modelos: ["cigarettes", "healthyFood"],
        modeloCorrecto: "cigarettes",
        feedback:"Para evitar la insuficiencia cardíaca, es importante evitar fumar, beber alcohol en exceso y consumir grasas saturadas"
    },
    
    {
        pregunta: "¿Cuál de los dos modelos representa la hipertensión arterial?",
        modelos: ["heartCracks", "heartHypertension"],
        modeloCorrecto: "heartHypertension",
        feedback: "Un corazón con hipertensión suele tener paredes engrosadas por el esfuerzo extra de bombear sangre.",
    },
];

export default preguntas;







