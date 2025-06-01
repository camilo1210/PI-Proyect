import { Clouds, Environment, Sparkles, Stars } from "@react-three/drei";

const Staging = () => {
  return (
    <>
      <Environment
        files={["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]}
        path="staging/cubemaps/hospital/"
        ground={{
          height: 50,
          radius: 100,
          scale: 1,
        }}
        background
      />
      <Sparkles count={15} speed={0.5} opacity={0.4} color="#ffffff" size={1} />
      <Sparkles count={10} speed={0.5} opacity={0.4} color="yellow" size={1} />
    </>
  );
};

export default Staging;
