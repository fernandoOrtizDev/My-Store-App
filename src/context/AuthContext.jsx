import { createContext, useContext, useState } from 'react';
import { loginUser, getAllUsers } from '../services/UserService';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (username, password) => {
    try {
      const credentials = { username, password };
      const res = await loginUser(credentials);
      const token = res.token;

      // Buscar el usuario correcto después del login
      const allUsers = await getAllUsers();
      const matchedUser = allUsers.find((u) => u.username === username);

      if (!matchedUser) {
        console.error("❌ Usuario no encontrado después del login");
        return false;
      }

      setUser(matchedUser);
      console.log("✅ Login exitoso:", matchedUser);
      console.log("🔑 Token:", token);

      navigate("/");
      return true;
    } catch (error) {
      console.error("❌ Login fallido:", error.response?.data || error.message);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
