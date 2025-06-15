import { Center, Text3D } from "@react-three/drei";
import "./Texts3D.css";

const Text3d = ({ title }) => {
  return (
    <Center position={[-0.3, 0.3, 0.6]}>
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
        castShadow={true}
        receiveShadow={true}
      >
        {`${title} `}
        <meshStandardMaterial
          color="#ff0000" // Color rojo
          metalness={0.5} // Ajusta el aspecto metálico (0-1)
          roughness={0.2} // Ajusta la rugosidad (0-1)
          castShadow={true}
          receiveShadow={true}
        />
      </Text3D>
    </Center>
  );
};

export default Text3d;
