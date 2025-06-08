import { Center, Text3D } from "@react-three/drei";

const Text3DHeartFailure = ({ title }) => {
  return (
    <Center position={[0, 3, 0.2]}>
      <Text3D
        castShadow
        font="/Fonts/Arial.json"
        bevelEnabled
        bevelSize={0.02}
        bevelThickness={0.05}
        height={0.02}
        lineHeight={1}
        letterSpacing={0.04}
        size={0.8} 
        receiveShadow
      >
        {`${title}`}
        <meshStandardMaterial color= "crimson" />
      </Text3D>
    </Center>
  );
};

export default Text3DHeartFailure;