import { Center, Text3D } from "@react-three/drei";
import "./Texts3D.css";

const Text3dFullHeart = ({ title }) => {
  return (
    <Center position={[-0.08, 0.05, -0.05]} rotation={[0, Math.PI, 0]} >
      <Text3D
        castShadow
        position={[0, 0, 0]}
        font="/Fonts/Arial.json"
        bevelEnabled
        bevelSize={0.01}
        bevelThickness={0.02}
        height={0.01}
        lineHeight={0.8}
        letterSpacing={0.01}
        size={0.06}
        receiveShadow={true}
      >
        {`${title} `}
        <meshStandardMaterial color="red" />
      </Text3D>
    </Center>
  );
};

export default Text3dFullHeart;
