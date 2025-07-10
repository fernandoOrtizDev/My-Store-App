import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createUser, updateUser, getUserById } from "../../services/UserService";
import MainLayout from "../templates/mainLayout/MainLayout";
import Button from "../atoms/button/Button";
import Input from "../atoms/input/Input";

const UserFormPage = ({ isEdit }) => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    name: { firstname: "", lastname: "" },
  });

  const [error, setError] = useState(""); // ✅ Paso 1: manejar estado de error
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit && id) {
      getUserById(id).then((data) => {
        setFormData({
          email: data.email,
          username: data.username,
          password: "", // la API no devuelve la contraseña
          name: {
            firstname: data.name.firstname,
            lastname: data.name.lastname,
          },
        });
      });
    }
  }, [isEdit, id]);

  const handleChange = (field, value) => {
    if (field === "firstname" || field === "lastname") {
      setFormData((prev) => ({
        ...prev,
        name: {
          ...prev.name,
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Paso 2: validación simple
    if (
      !formData.email ||
      !formData.username ||
      !formData.password ||
      !formData.name.firstname ||
      !formData.name.lastname
    ) {
      setError("Todos los campos son obligatorios");
      return;
    }

    // ✅ Paso 3: continuar si pasa validación
    setError(""); // limpia error
    if (isEdit) {
      await updateUser(id, formData);
    } else {
      await createUser(formData);
    }
    navigate("/");
  };

  return (
    <MainLayout>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "400px",
          margin: "auto",
          color: "white",
        }}
      >
        <h2>{isEdit ? "Editar Usuario" : "Crear Usuario"}</h2>

        {/* ✅ Paso 4: mostrar error */}
        {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

        <Input
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="Email"
        />
        <Input
          value={formData.username}
          onChange={(e) => handleChange("username", e.target.value)}
          placeholder="Username"
        />
        <Input
          value={formData.password}
          onChange={(e) => handleChange("password", e.target.value)}
          placeholder="Contraseña"
        />
        <Input
          value={formData.name.firstname}
          onChange={(e) => handleChange("firstname", e.target.value)}
          placeholder="Nombre"
        />
        <Input
          value={formData.name.lastname}
          onChange={(e) => handleChange("lastname", e.target.value)}
          placeholder="Apellido"
        />
        <Button type="submit">Guardar</Button>
        
        <Button type="button" onClick={() => navigate("/")}>Volver a inicio</Button>
      </form>
    </MainLayout>
  );
};

export default UserFormPage;
