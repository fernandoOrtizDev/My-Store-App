import "./mainLayout.css";


const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">🛒 Mi Tienda</header>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default MainLayout;
