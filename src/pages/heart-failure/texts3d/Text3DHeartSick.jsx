import { Center, Html } from "@react-three/drei";
import "./Texts3D.css";

const Text3DHeartSick = ({ title }) => {
  return (
    <Center position={[0, -4.5, 0]}>
          <Html center zIndexRange={[0, 0]}>
             <h1 className="html-text">{title}</h1>
          </Html>
    </Center>
  );
};

export default Text3DHeartSick;