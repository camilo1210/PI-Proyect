import usePersonStore from "/src/stores/dilated-cardiomiopathy-stores/use-person-store";
import "./Button.css"

const Button = () => {
  const { setCurrentAnimation } = usePersonStore();

  return (
    <div className="buttons-container">
      <button
        className="symptoms-button"
        onClick={() => setCurrentAnimation("dizzy")} // Activa la animación "dizzy"
      >
        {"Sintomas"}
      </button>
      <button
        className="reset-button"
        onClick={() => setCurrentAnimation("walking")} // Reinicia a la animación "walking"
      >
        {"Reiniciar"}
      </button>
    </div>
  );
};

export default Button;