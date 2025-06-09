import { Environment, Sky, Sparkles } from "@react-three/drei";

const Staging = () => {
    return (
      <>  
      <Sky
         sunPosition={[0, -1, -1]} // El sol más abajo y detrás
         inclination={0.6}         // Sol más cerca del horizonte
         azimuth={0.25}            // Cambia la dirección del sol
         mieCoefficient={0.01}     // Más dispersión para una atmósfera densa
         mieDirectionalG={0.8}
         rayleigh={3}            // Menos dispersión azul -> tonos oscuros
         turbidity={1}             // Baja turbidez -> cielo más claro y limpio
      />
      <Sparkles
         count={600}
         speed={0.1}
         opacity={0.3}
         color={"gray"}
         size={4.5}
         scale={[15, 8, 15]}
         noise={2}
      />
      </>
    );
};

export default Staging;