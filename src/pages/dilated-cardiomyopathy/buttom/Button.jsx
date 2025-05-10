import { useEffect, useState } from "react";
import usePersonStore from "/src/stores/dilated-cardiomiopathy-stores/use-person-store";
import "./Button.css";

const Button = () => {
  const { setCurrentAnimation } = usePersonStore();
  const [isSymptomsActive, setIsSymptomsActive] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.code === "Space" || event.code === "Enter") && !event.repeat) {
        if (!isSymptomsActive) {
          setCurrentAnimation("dizzy"); // Activa la animación "dizzy"
          setIsSymptomsActive(true);
        } else {
          setCurrentAnimation("walking"); // Activa la animación "walking"
          setIsSymptomsActive(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSymptomsActive, setCurrentAnimation]);

  return (
    <div className="buttons-container">
      <button
        className="symptoms-button"
        onClick={() => {
          if (!isSymptomsActive) {
            setCurrentAnimation("dizzy"); // Activa la animación "dizzy"
            setIsSymptomsActive(true);
          } else {
            setCurrentAnimation("walking"); // Activa la animación "walking"
            setIsSymptomsActive(false);
          }
        }}
      >
        {isSymptomsActive ? "Reiniciar" : "Sintomas"}
      </button>
    </div>
  );
};

export default Button;