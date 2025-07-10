import { useState } from "react";
import Sidebar from "../../molecules/sidebar/Sidebar";
import { useAuth } from "../../../hook";
import "./WithSidebar.css";

const WithSidebar = ({ children }) => {
  const { user, logout } = useAuth();
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <div className="layout-container">
      <div className="content-wrapper">
        {showSidebar && (
          <div className="sidebar-container">
            <Sidebar isLoggedIn={!!user} onLogout={logout} />
          </div>
        )}

        <div className="main-container">
          
          <button className="toggle-button" onClick={toggleSidebar}>
            {showSidebar ? "Ocultar menú" : "Mostrar menú"}
          </button>

          {children}
        </div>
      </div>
    </div>
  );
};

export default WithSidebar;
