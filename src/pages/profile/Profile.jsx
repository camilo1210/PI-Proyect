import "./Profile.css";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router";
import { useCallback } from "react";
const Profile = () => {
  console.log(useAuthStore());
  const { userLogged, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    logout()
      .then(() => {
        navigate("/");
        alert("Se ha cerrado la sesión correctamente");
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  }, [logout, navigate]);
  return (
    <>
      <h1>Perfil de usuario</h1>
      <h2>¡Bienvenido! {userLogged?.displayName}</h2>
      <button onClick={handleLogout} title="Cerrar sesión" className="btnClose">
        Cerrar sesión
      </button>
    </>
  );
};

export default Profile;
