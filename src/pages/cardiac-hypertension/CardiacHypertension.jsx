import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import Lights from "./lights/Lights";
import { Model } from "./models-3d/HealthyHeartModel";

const CardiacHypertension = () => {
    return (
        <div className="cardiac-hypertension-container">
            <h1 className="cardiac-hypertension-title">Hipertension Arterial</h1>

            <div className="model-container">
            <Canvas
                    shadows
                    // Selecciona el tipo de shadowMap:
                    gl={{
                        antialias: true,
                        // Para SOMBRAS SUAVES:
                        shadowMap: { type: THREE.PCFSoftShadowMap },
                        // Para SOMBRAS DURAS, reemplaza por THREE.BasicShadowMap
                    }}
                    style={{
                        width: "100%",
                        height: 300,
                        background: "transparent",
                    }}
                >
                    {/* Opción: plano invisible que solo recibe sombras */}
                    <ContactShadows
                        position={[0, -0.75, 0]} // justo debajo del modelo
                        rotation-x={-Math.PI / 2} // acostado horizontal
                        width={10}
                        height={10}
                        far={1} // distancia máxima del drop
                        resolution={512}
                        // blur = 0 → sombra dura
                        // blur > 0 → sombra más suave
                        blur={2}
                        opacity={0.5}
                    />

                    <Lights />
                   <Model scale={4} position={[0, 0, 0]} /> 

                    <OrbitControls
                        enableZoom
                        maxDistance={10}
                        minDistance={2}
                        autoRotate
                        autoRotateSpeed={1}
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