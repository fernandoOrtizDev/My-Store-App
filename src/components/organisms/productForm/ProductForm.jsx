import { useNavigate } from "react-router-dom";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import "./ProductForm.css";

const ProductForm = ({ formData, onChange, onSubmit }) => {
  const navigate = useNavigate();

  return (
    <form className="product-form" onSubmit={onSubmit}>
      <Input
        value={formData.title}
        onChange={(e) => onChange("title", e.target.value)}
        placeholder="Título"
      />
      <Input
        value={formData.price}
        onChange={(e) => onChange("price", e.target.value)}
        placeholder="Precio"
      />
      <Input
        value={formData.description}
        onChange={(e) => onChange("description", e.target.value)}
        placeholder="Descripción"
      />
      <Input
        value={formData.image}
        onChange={(e) => onChange("image", e.target.value)}
        placeholder="URL de imagen"
      />
      <Input
        value={formData.category}
        onChange={(e) => onChange("category", e.target.value)}
        placeholder="Categoría"
      />
      <Button type="submit">Guardar</Button>
      <Button type="button" onClick={() => navigate("/")}> Volver a inicio</Button>

      

    </form>
    
  );
};

export default ProductForm;
