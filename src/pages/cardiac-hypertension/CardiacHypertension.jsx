import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./models-3d/HealthyHeartModel";
import "./CardiacHypertension.css";

const CardiacHypertension = () => {
    return (
        <div className="cardiac-hypertension-container">
            <h1 className="cardiac-hypertension-title">Hipertension Arterial</h1>

            <div className="model-container">
                <Canvas
                    className="healthyHeart-canvas"
                    shadows
                    camera={{ position: [0, 2, 8], fov: 60 }}
                    style={{ width: "75%", height: "100%" }}
                >
                    <ambientLight intensity={1.8} />
                    <directionalLight
                        castShadow
                        position={[5, 10, 5]}
                        intensity={2}
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                    />
                    <pointLight position={[-5, 5, -5]} intensity={1.5} />

                    {/* Suelo para recibir sombra */}
                    <mesh
                        receiveShadow
                        rotation={[-Math.PI / 2, 0, 0]}
                        position={[0, -3.43, 0]}
                    >
                        <planeGeometry args={[20, 20]} />
                        <shadowMaterial opacity={0.3} />    
                    </mesh>
                    
                    <Model scale={6} position={[0, 0, 0]} />

                    <OrbitControls
                        enableZoom
                        maxDistance={10}
                        minDistance={2}
                        autoRotate
                        autoRotateSpeed={10}
                    />
                </Canvas>
            </div>

            <div className="cards-container">
                <div className="card left">
                    <div className="title">¿Qué es?</div>
                    <p>La hipertensión cardíaca se refiere al engrosamiento del músculo del corazón, especialmente del ventrículo izquierdo, como respuesta al esfuerzo adicional que el corazón debe hacer para bombear sangre contra una presión arterial elevada.</p>
                </div>

                <div className="card right">
                    <div className="title">¿Cuáles son sus sintomas?</div>
                    <p>Entre los sintomas mas comunes se encuentran: </p>
                    <p>1. Dificultad para respirar</p>
                    <p>2. Fatiga o debilidad</p>
                    <p>3. Dolor o presion en el pecho</p>
                    <p>4. Hinchazón en las piernas o pies</p>
                    <p>5. Mareos o desmayos</p>
                </div>

                <div className="card left">
                    <div className="title">¿Qué lo causa?</div>
                    <p>Los factores que lo provocan son: </p>
                    <p>1. Genetica</p>
                    <p>2. Edad</p>
                    <p>3. Sobrepeso u obesidad</p>
                    <p>4. Sedentarismo</p>
                    <p>5. Dieta rica en sal, grasas o alcohol</p>
                    <p>6. Estrés crónico</p>
                    <p>7. Consumo de tabaco</p>
                    <p>8. Falta de sueño o mala calidad del sueño</p>
                </div>

                <div className="card right">
                    <div className="title">¿Cómo tratarlo?</div>
                    <p>Existe un tratamiento en el cual se usan medicamentos, se realiza una dieta y se hace ejercicio, pero lo mejor que puedes hacer, es hacer un cambio a tu estilo devida, en el cual consumas menos sal, tengas mas actividad fisica, dejes de consumir tabaco, intentar estar con menos estres y en general que cuides mas de tu salud </p>
                </div>
            </div>

        </div>
    );
};

export default CardiacHypertension;