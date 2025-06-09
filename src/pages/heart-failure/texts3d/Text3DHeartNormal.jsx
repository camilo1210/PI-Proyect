import { Center, Html } from "@react-three/drei";
import "./Texts3D.css";

const Text3DHeartNormal = ({ title }) => {
  return (
    <Center position={[0, -4, 0]}>
      <Html center>
         <h1 className="html-text">{title}</h1>
      </Html>
    </Center>
  );
};

export default Text3DHeartNormal;