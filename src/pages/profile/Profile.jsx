import { useCallback, useEffect } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router";
import "./Profile.css";

const Profile = () => {
  const { userLogged, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    logout()
      .then(() => {
        alert("Se ha cerrado la sesión correctamente");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  }, [logout, navigate]);

  useEffect(() => {
    if (!userLogged) return;
    const fetchData = async () => {
      const { displayName, email } = userLogged;
      const data = { displayName, email };
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}users`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );
        if (!response.ok)
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        return await response.json();
      } catch (error) {
        console.error(`Error creating user:`, error);
      }
    };
    fetchData();
  }, [userLogged]);

  return (
    <>
      <div className="profile-container">
        <h1>Perfil de usuario</h1>
        <h2>¡Bienvenido! {userLogged?.displayName}</h2>
        <button onClick={handleLogout} className="btnClose">
          Cerrar sesión
        </button>
      </div>
    </>
  );
};

export default Profile;
