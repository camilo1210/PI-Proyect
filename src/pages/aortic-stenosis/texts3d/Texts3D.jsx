import { Text3D } from "@react-three/drei";
import "./Texts3D.css";

const Text3D = () =>{
    return(
        <Text3D
            // font="/fonts/helvetiker_regular.typeface.json"
            size={0.5}
            height={0.1}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.03}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
        >
            Qué es?
            <meshStandardMaterial color="#00ff00" />
        </Text3D>
    )
}