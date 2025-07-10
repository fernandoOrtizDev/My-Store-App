import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hook/useAuth"; 
import Button from "../../atoms/button/Button";
import "./Sidebar.css";

const Sidebar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();
  const { user } = useAuth(); 
  return (
    <div className="sidebar">
      <h2>Menú</h2>
      {isLoggedIn ? (
        <>
          <Button onClick={() => navigate(`/user/${user?.id}`)}>Ver perfil</Button>
          <Button onClick={() => navigate(`/edit-user/${user?.id}`)}>Editar usuario</Button>
          <Button onClick={onLogout} className="danger">Cerrar sesión</Button>
        </>
      ) : (
        <>
          <Button className="edit" onClick={() => navigate("/create-user")}>Crear usuario</Button>
          <Button className="edit" onClick={() => navigate("/login")}>Iniciar sesión</Button>
        </>
      )}
    </div>
  );
};

export default Sidebar;
