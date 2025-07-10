import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../templates/mainLayout/MainLayout";
import { getProductById, deleteProduct } from "../../services/productService";
import "./ProductDetailPage.css"; 
import Button from "../atoms/button/Button";


const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  const handleDelete = async () => {
    await deleteProduct(id);
    navigate("/");
  };

  if (!product) return <p style={{ color: "white" }}>Cargando producto...</p>;

  return (
    <MainLayout>
      <div className="detail-container">
        <div className="detail-card">
          <img src={product.image} alt={product.title} className="detail-image" />
          <h2 className="detail-title">{product.title}</h2>
          <p className="detail-price">${product.price}</p>
          <p className="detail-description">{product.description}</p>
          <p className="detail-category">Categoría: {product.category}</p>
          <div className="detail-buttons">
            <Button onClick={() => navigate(`/edit/${product.id}`)} className="edit">Editar</Button>
            <Button onClick={handleDelete} className="danger">Eliminar</Button>
            <Button onClick={() => navigate("/")}>Volver a inicio</Button>

          </div>

        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetailPage;
