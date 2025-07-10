import { useState } from "react";
import { useAuth } from "../../hook/useAuth";
import Input from "../../components/atoms/input/Input";
import Button from "../../components/atoms/button/Button";
import WithSidebar from "../../components/templates/withSidebar/WithSidebar";
import "../pages/UserFormPage.css";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(form.username, form.password);
    if (!success) {
      setError("Credenciales inválidas");
    }
  };

  return (
    <WithSidebar>
      <div className="form-page-container">
        <h2 className="form-title">Iniciar sesión</h2>
        <div className="form-card">
          <form onSubmit={handleSubmit}>
            <Input
              value={form.username}
              onChange={(e) => handleChange("username", e.target.value)}
              placeholder="Nombre de usuario"
              label="Usuario"
            />
            <Input
              type="password"
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="Contraseña"
              label="Contraseña"
            />
            {error && <p style={{ color: "red", marginTop: "8px" }}>{error}</p>}

            <div className="detail-buttons"> 
            <Button type="submit">Iniciar sesión</Button>
            <Button onClick={() => navigate("/")}>Volver a inicio</Button>
            </div>
          </form> 
        </div>
      </div>
      
    </WithSidebar>
  );
};

export default LoginPage;
