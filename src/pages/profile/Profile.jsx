import "./Profile.css"
import useAuthStore from "../../stores/use-auth-store";
const Profile = () => {
    console.log(useAuthStore())
    const { userLogged } = useAuthStore();
    return (
        <>
        <h1>Pérfil de usuario</h1>
        <h2>¡Bienvenido! {userLogged?.displayName}</h2>
        </>
    );
};

export default Profile;