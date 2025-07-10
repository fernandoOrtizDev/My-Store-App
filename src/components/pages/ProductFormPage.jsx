import MainLayout from "../templates/mainLayout/MainLayout";
import ProductForm from "../organisms/productForm/ProductForm";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getProductById,
  createProduct,
  updateProduct,
} from "../../services/productService";
import "./ProductFormPage.css"; // 👈 importante

const ProductFormPage = ({ isEdit }) => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (isEdit && id) {
      getProductById(id).then((data) => {
        setFormData({
          title: data.title,
          price: data.price,
          description: data.description,
          image: data.image,
          category: data.category,
        });
      });
    }
  }, [isEdit, id]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit && id) {
      await updateProduct(id, formData);
    } else {
      await createProduct(formData);
    }
    navigate("/");
  };

  return (
    <MainLayout>
      <div className="form-page-container">
        <h2 className="form-title">
          {isEdit ? "Editar producto" : "Crear nuevo producto"}
        </h2>
        <div className="form-card"> {/* este contenedor tiene el estilo de tarjeta */}
          <ProductForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
          
        </div>
        
      </div>
    </MainLayout>
  );
};

export default ProductFormPage;
