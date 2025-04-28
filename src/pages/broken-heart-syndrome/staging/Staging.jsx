import { useThree } from "@react-three/fiber";
import { Sky } from "three/examples/jsm/objects/Sky";
import { useEffect } from "react";


const CustomSky = () => {
    const { scene } = useThree();

    useEffect(() => {
        const sky = new Sky();
        sky.scale.setScalar(450000);
        scene.add(sky);

        sky.material.uniforms["turbidity"].value = 10;
        sky.material.uniforms["rayleigh"].value = 3;
        sky.material.uniforms["mieCoefficient"].value = 0.005;
        sky.material.uniforms["mieDirectionalG"].value = 0.07;

        return () => {
    scene.remove(sky);
    };
    }, [scene]);

    return null;
};

export default CustomSky;
