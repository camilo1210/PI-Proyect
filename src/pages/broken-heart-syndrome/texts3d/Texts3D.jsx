import { Center, Text3D } from "@react-three/drei";
import "./Texts3D.css";

const Text3d = ({ title, position}) => {
  return (
    <Center position={position}>
      <Text3D
        position={position}
        font="/public/Fonts/Arial.json"
        bevelEnabled
        bevelSize={0.01}
        bevelThickness={0.02}
        height={0.01}
        lineHeight={0.8}
        letterSpacing={0.02}
        size={0.5}
      >
        {`${title} `}
        <meshStandardMaterial color ="red" />
      </Text3D>
    </Center>
  );
};

export default Text3d;
