import { Environment, Sky, Sparkles } from "@react-three/drei";

const Staging = () => {
    return (
      <>  
      <Sky 
        sunPosition={[0, 0, -1]} 
        inclination={[0.2]}
        azimuth={180}
        mieCoefficient={0.005}
        mieDirectionalG={0.07}
        rayleigh={3}
        turbidity={10}
      />
      <Sparkles
         count={256}
         speed={1.5}
         opacity={1}
         color={"gray"}
         size={4}
         scale={[8, 8, 8]}
         noise={0.5}
      />
      </>
    );
};

export default Staging;