import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../templates/mainLayout/MainLayout";
import SearchBar from "../molecules/searchBar/SearchBar";
import ProductList from "../organisms/productList/ProductList";
import Button from "../atoms/button/Button";
import "./HomePage.css";
import WithSidebar from "../templates/withSidebar/WithSidebar";

const HomePage = ({ products, error, loading }) => {
  const navigate = useNavigate();

  const [term, setTerm] = useState("");

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(term.toLowerCase())
  );

  const goToCreatePage = () => {
    navigate("/create");
  };

  const handleSearch = (term) => {
    setTerm(term);
  };
  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
   <WithSidebar>
    <MainLayout>
      <div className="div">
        <SearchBar
          term={term}
          onChange={(e) => setTerm(e.target.value)}
          onSearch={handleSearch}
          
        />
        <Button onClick={goToCreatePage}>Crear producto</Button>
      </div>

      {filtered.length === 0 ? (
        <p>No se encontraron resultados.</p>
      ) : (
        <ProductList products={filtered} />
      )}
    </MainLayout>
  </WithSidebar> 
  );
};

export default HomePage;
