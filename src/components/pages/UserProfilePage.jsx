import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserById, deleteUser } from "../../services/UserService";
import MainLayout from "../templates/mainLayout/MainLayout";
import Button from "../atoms/button/Button";

const UserProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(id).then(setUser);
  }, [id]);

  const handleDelete = async () => {
    await deleteUser(id);
    navigate("/");
  };

  if (!user) return <p style={{ color: "white" }}>Cargando usuario...</p>;

  return (
    <MainLayout>
      <div style={{ color: "white" }}>
        <h2>Perfil del Usuario</h2>
        <p><strong>Nombre:</strong> {user.name.firstname} {user.name.lastname}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Usuario:</strong> {user.username}</p>
        <Button onClick={() => navigate(`/edit-user/${id}`)} className="edit">Editar</Button>
        <Button onClick={handleDelete} className="danger">Eliminar</Button>
        <Button onClick={() => navigate("/")}>Volver a inicio</Button>
      </div>
    </MainLayout>
  );
};

export default UserProfilePage;
