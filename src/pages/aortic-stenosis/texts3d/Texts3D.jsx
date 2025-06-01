import { Center, Text3D } from "@react-three/drei";
import "./Texts3D.css";

const Text3d = ({ title }) => {
  return (
    <Center position={[-0.3, 0.5, 0.6]}>
      <Text3D
        position={[0, 0, 0]}
        font="/Fonts/Arial.json"
        bevelEnabled
        bevelSize={0.01}
        bevelThickness={0.02}
        height={0.01}
        lineHeight={0.8}
        letterSpacing={0.02}
        size={0.3}
      >
        {`${title} `}
        <meshStandardMaterial />
      </Text3D>
    </Center>
  );
};

export default Text3d;
