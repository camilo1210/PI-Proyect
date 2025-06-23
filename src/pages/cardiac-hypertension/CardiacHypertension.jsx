import { Canvas } from "@react-three/fiber";
import {
    Circle,
    OrbitControls,
    Text,
    Html,
    Sky,
    Environment,
} from "@react-three/drei";
import { useEffect, useState, Suspense, useRef } from "react";
import Staging from "./staging/Staging";
//Modelos
import { Model } from "./models-3d/HealthyHeartModel";
import { SwollenHeart } from "./models-3d/SwollenHeart.jsx";
import { ChestPain } from "./models-3d/ChestPain.jsx";
import { Person } from "./models-3d/Person.jsx";
import { FitLife } from "./models-3d/FitLife.jsx";
// Luces y estilos
import Lights from "./lights/Lights";
import "./CardiacHypertension.css";
import Text3dCardiacHypertension from "./texts3d/Texts3DCardiacHypertension.jsx";

const CANVAS_BACKGROUND_COLOR = "#e5d0ac";

const CardiacHypertension = () => {
    const [showHint, setShowHint] = useState(false);
    const [cracksVisible, setCracksVisible] = useState(false);
    const [painTriggered, setPainTriggered] = useState(false);
    const [ecgAnimationTriggered, setEcgAnimationTriggered] = useState(false);
    const [soundPlaying, setSoundPlaying] = useState(false);

    const containerRef = useRef(null);
    useEffect(() => {
        const show = () => {
            setShowHint(true);
            setTimeout(() => setShowHint(false), 4000);
        };
        const interval = setInterval(show, 20000);
        show();
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key.toLowerCase()) {
                case "s":
                    setCracksVisible((prev) => !prev);
                    break;

                case "d":
                    setPainTriggered((prev) => !prev);
                    break;

                case "w":
                    setEcgAnimationTriggered((prev) => !prev);
                    break;

                case "e":
                    setSoundPlaying((prev) => !prev);
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="container" ref={containerRef}>
            <div className="model-container">
                <Canvas
                    shadows
                    camera={{ position: [0, 1, 2.5] }}
                    style={{
                        width: "112%",
                        height: 300,
                        background: CANVAS_BACKGROUND_COLOR,
                        borderRadius: "var(--border-radius)",
                    }}

                >
                    <ambientLight intensity={0.4} />
                    <directionalLight position={[2, 4, 5]} castShadow intensity={1} />
                    <Environment preset="studio" />
                    <Circle
                        rotation={[-Math.PI / 2, 0, 0]}
                        position={[0, 0, 0]}
                        args={[3, 3]}
                        receiveShadow
                    >
                        <meshStandardMaterial color={CANVAS_BACKGROUND_COLOR} />
                    </Circle>
                    <Suspense fallback={null}>
                        <Text3dCardiacHypertension
                            title="Hypertensión Cardíaca"
                            position={[0, 0.05, 0.05]}
                            size={0.08}
                        />
                        <Model scale={0.3} position={[0, 0.3, 0]} castShadow />
                    </Suspense>
                    <Staging />
                    <OrbitControls
                        enableZoom
                        autoRotate
                        autoRotateSpeed={1}
                        minDistance={0}
                        maxDistance={1}
                    />
                    <Text
                        position={[0, 0.6, 0]}
                        fontSize={0.09}
                        color="red"
                        textAlign="center"
                    >
                        Haz clic o presiona la tecla "a" 💓
                    </Text>
                    <Html position={[3, 4, -1]}>
                        <div className="heart-title-container">
                            <Text3dCardiacHypertension title="Síndrome del Corazón Roto" />
                        </div>
                    </Html>
                </Canvas>
                {showHint && (
                    <div className="interaction-hint">
                        💡 Utiliza la tecla A para la animacion del primer modelo o clickea encima de él
                    </div>
                )}
            </div>

            <div className="cards-container">
                <Section
                    title="¿Qué es?"
                    text="La hipertensión cardíaca se refiere al engrosamiento del músculo del corazón, especialmente del ventrículo izquierdo, como respuesta al esfuerzo adicional que el corazón debe hacer para bombear sangre contra una presión arterial elevada."
                    Model={(props) => (
                        <Suspense fallback={<Html><p>Cargando...</p></Html>}>
                            <Text3dCardiacHypertension
                                title="¿Qué es?"
                                color="#a83234"
                                position={[0, 2, 0]}
                                size={0.5}
                            />
                            <SwollenHeart {...props} animate={cracksVisible} />
                        </Suspense>
                    )}
                    hasButton
                    trigger={cracksVisible}
                    setTrigger={setCracksVisible}
                    modelScale={[20, 20, 20]}
                    modelPosition={[0, 0, 0]}
                />

                <Section
                    title="¿Cuáles son sus síntomas?"
                    text={
                        <>
                            <p>Entre los sintomas mas comunes se encuentran: </p>
                            <p>1. Dificultad para respirar</p>
                            <p>2. Fatiga o debilidad</p>
                            <p>3. Dolor o presion en el pecho</p>
                            <p>4. Hinchazón en las piernas o pies</p>
                            <p>5. Mareos o desmayos</p>
                        </>
                    }
                    Model={(props) => (
                        <Suspense fallback={<Html><p>Cargando...</p></Html>}>
                            <Text3dCardiacHypertension
                                title="¿Cuáles son sus síntomas?"
                                color="#a83232"
                                position={[0, 3.4, 0]}
                                size={0.6}
                            />
                            <ChestPain {...props} />
                        </Suspense>
                    )}
                    reverse
                    hasButton
                    trigger={painTriggered}
                    setTrigger={setPainTriggered}
                    modelScale={[2, 2, 2]}
                    modelPosition={[0, 1, 0]}
                />
                <Section
                    title="¿Qué lo causa?"
                    text={
                        <>
                            <p>Los factores que lo provocan son: </p>
                            <p>1. Genetica</p>
                            <p>2. Edad</p>
                            <p>3. Sobrepeso u obesidad</p>
                            <p>4. Sedentarismo</p>
                            <p>5. Dieta rica en sal, grasas o alcohol</p>
                            <p>6. Estrés crónico</p>
                            <p>7. Consumo de tabaco</p>
                            <p>8. Falta de sueño o mala calidad del sueño</p>
                        </>
                    }
                    Model={(props) => (
                        <Suspense fallback={<Html><p>Cargando...</p></Html>}>
                            <Text3dCardiacHypertension
                                title="¿Qué lo causa?"
                                color="#a83232"
                                position={[0, 2, 1]}
                                size={0.5}
                            />
                            <Person {...props} trigger={soundPlaying} playSound={soundPlaying} />
                        </Suspense>
                    )}
                    hasButton
                    trigger={soundPlaying}
                    setTrigger={setSoundPlaying}
                    playSound={soundPlaying}
                    modelScale={[15, 15, 15]}
                    modelPosition={[0, 0.4, 1]}
                />

                <Section
                    title="¿Cómo tratarlo?"
                    text={
                        <>
                            <p>
                                Existe un tratamiento en el cual se usan medicamentos, se realiza una dieta y se hace ejercicio,
                                pero lo mejor que puedes hacer, es hacer un cambio a tu estilo devida, en el cual consumas menos sal,
                                tengas mas actividad fisica, dejes de consumir tabaco,
                                intentar estar con menos estres y en general que cuides mas de tu salud
                            </p>

                        </>
                    }
                    Model={(props) => (
                        <Suspense fallback={<Html><p>Cargando...</p></Html>}>
                            <Text3dCardiacHypertension
                                title="¿Cómo tratarlo?"
                                color="#a83232"
                                position={[0, 2.6, 0.5]}
                                size={0.5}
                            />
                            <FitLife {...props} />
                        </Suspense>
                    )}
                    reverse
                    hasButton
                    trigger={ecgAnimationTriggered}
                    setTrigger={setEcgAnimationTriggered}
                    modelScale={[30, 30, 30]}
                    modelPosition={[0, 0, 0]}
                />
            </div>
        </div >
    );
};

const Section = ({
    title,
    text,
    Model,
    reverse,
    hasButton,
    trigger,
    setTrigger,
    playSound,
    modelScale,
    modelPosition,
    rotationModel,
}) => (
    <div className={`section ${reverse ? "reverse" : ""}`}>
        <div className={`card ${reverse ? "right" : "left"}`}>
            <div className="title">{title}</div>
            <div className="section-text">{text}</div>
        </div>
        <div className="card-model">
            <Canvas
                shadows
                camera={{ position: [0, 0, 10], fov: 50 }}
                style={{
                    width: "100%",
                    height: "300px",
                    background: CANVAS_BACKGROUND_COLOR,
                    borderRadius: "var(--border-radius)",
                }}
            >
                <Sky sunPosition={[100, 20, 100]} />
                <Environment preset="sunset" />
                <Circle
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, -1, 0]}
                    args={[10, 10]}
                    receiveShadow
                >
                    <meshStandardMaterial color={CANVAS_BACKGROUND_COLOR} />
                </Circle>

                {Model && (
                    <Model
                        scale={modelScale}
                        position={modelPosition}
                        castShadow
                        rotation={rotationModel}
                        trigger={trigger}
                        playSound={playSound}
                    />
                )}

                <Lights />
                <OrbitControls autoRotate enableZoom minDistance={2} maxDistance={10} />

                {hasButton && (
                    <Html
                        position={[0, -3.5, 0]}
                        center
                        style={{ pointerEvents: "auto" }}
                    >
                        <button
                            onClick={() => setTrigger((prev) => !prev)}
                            style={{
                                padding: "12px 20px",
                                fontSize: "16px",
                                borderRadius: "10px",
                                backgroundColor: "#800000",
                                color: "#fff",
                                border: "none",
                                cursor: "pointer",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                                userSelect: "none",
                            }}
                        >
                            {trigger ? "Detener Animación" : "Activar Animación"}
                        </button>
                    </Html>
                )}
            </Canvas>
        </div>
    </div>
);
export default CardiacHypertension;



