import { Html } from "@react-three/drei";
import "./Title.css";

const Title = ({ title }) => {
  return (
    <Html
      center
      position={[-0.3, 0.2, 0]}
    //   transform
      distanceFactor={1}
      wrapperClass="title"
    >
      <h1>{title}</h1>
    </Html>
  );
};

export default Title;
