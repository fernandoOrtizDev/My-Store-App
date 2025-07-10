import './Card.css';
import Button from '../../atoms/button/Button';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../../../services/productService';

const Card = ({ title, image, price, id }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteProduct(id);
    // window.location.reload(); 
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">${price}</p>

        <div className="card-buttons"> 
          <Button onClick={() => navigate(`/product/${id}`)}>Ver</Button>
          <Button onClick={() => navigate(`/edit/${id}`)} className="edit">Editar</Button>
          <Button onClick={handleDelete} className="danger">Eliminar</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
