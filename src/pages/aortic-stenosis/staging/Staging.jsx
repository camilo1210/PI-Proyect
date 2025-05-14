import { Environment } from "@react-three/drei";

const Staging = () => {
  return (
   <Environment
      files={[
        "px.png",
        "nx.png",
        "py.png",
        "ny.png",
        "pz.png",
        "nz.png",
      ]}
      path="staging/cubemaps/hospital/"
      ground={{
        height: 50,
        radius: 100,
        scale: 1,
      }}
      background
    />
  );
};

export default Staging;
