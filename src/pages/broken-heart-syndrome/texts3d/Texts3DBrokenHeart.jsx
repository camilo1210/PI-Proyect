import { Center, Text3D } from "@react-three/drei";
import PropTypes from "prop-types";
import "./Texts3D.css";

const Text3dBrokenHeart = ({
  title = "",
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = 0.3,
  color = "red",
  fontPath = "/Fonts/Arial.json",
}) => {
  return (
    <Center position={position} rotation={rotation}>
      <Text3D
        position={[0, 0, 0]}
        font={fontPath}
        bevelEnabled
        bevelSize={0.01}
        bevelThickness={0.02}
        height={0.09}
        lineHeight={0.8}
        letterSpacing={0.02}
        size={size}
        castShadow
        receiveShadow
      >
        {title}
        <meshStandardMaterial color={color} />
      </Text3D>
    </Center>
  );
};

// ✅ Validación de props
Text3dBrokenHeart.propTypes = {
  title: PropTypes.string.isRequired,
  position: PropTypes.arrayOf(PropTypes.number),
  rotation: PropTypes.arrayOf(PropTypes.number),
  size: PropTypes.number,
  color: PropTypes.string,
  fontPath: PropTypes.string,
};

export default Text3dBrokenHeart;
