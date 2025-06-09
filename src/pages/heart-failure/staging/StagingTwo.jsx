import { Sky, Sparkles, Stars } from "@react-three/drei";

const StagingTwo = () => {
    return (
      <>  
      <Sky
         sunPosition={[0, -1, 0]} // El sol más abajo y detrás
         inclination={0.2}         // Sol más cerca del horizonte
         azimuth={0.20}            // Cambia la dirección del sol
         mieCoefficient={0.01}     // Más dispersión para una atmósfera densa
         mieDirectionalG={0.8}
         rayleigh={3}            // Menos dispersión azul -> tonos oscuros
         turbidity={1}             // Baja turbidez -> cielo más claro y limpio
      />
      <Stars
       radius={100}        // Tamaño de la esfera donde estarán las estrellas
       depth={50}          // Cuánto se extienden las estrellas hacia el fondo
       count={5000}        // Número de estrellas
       factor={4}          // Cuán grandes son las estrellas
       saturation={0}      // Color: 0 = blanco
       fade                // Hace que se desvanezcan con la distancia
       speed={1}           // Velocidad de parpadeo
/>
      </>
    );
};

export default StagingTwo;