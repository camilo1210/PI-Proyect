const Recipient = () => {
  return (
    <mesh rotation-x={-Math.PI / 2} receiveShadow={true}>
      <circleGeometry args={[4, 32]} />
      <meshStandardMaterial roughness={0.8} metalness={1} />
    </mesh>
  );
};

export default Recipient;
