import { useThree } from "@react-three/fiber";
import { Sky } from "three/examples/jsm/objects/Sky";
import * as THREE from "three";
import { useEffect } from "react";

const CustomSky = () => {
    const { scene } = useThree();

    useEffect(() => {
        const sky = new Sky();
        sky.scale.setScalar(450000);
        scene.add(sky);

    const sun = new THREE.Vector3();

    // Configura parámetros atmosféricos
    const { uniforms } = sky.material;
    uniforms["turbidity"].value = 10;
    uniforms["rayleigh"].value = 2;
    uniforms["mieCoefficient"].value = 0.005;
    uniforms["mieDirectionalG"].value = 0.8;

    // Posición del sol en el cielo
    const phi = THREE.MathUtils.degToRad(90 - 10); // Elevación
    const theta = THREE.MathUtils.degToRad(180); // Azimut
    sun.setFromSphericalCoords(1, phi, theta);
    uniforms["sunPosition"].value.copy(sun);

    return () => {
      scene.remove(sky);
    };
  }, [scene]);

  return null;
};

export default CustomSky;
