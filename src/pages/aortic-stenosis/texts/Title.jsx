import { Html } from "@react-three/drei";
import "./Title.css";

const Title = ({ title }) => {
  return (
    <Html
      center
      position={[0, -0.18, 0.2]}
    //   transform
      distanceFactor={1}
      wrapperClass="title2D"
    >
      <h1>{title}</h1>
    </Html>
  );
};

export default Title;
