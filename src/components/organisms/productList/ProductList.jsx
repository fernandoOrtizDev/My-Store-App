import './ProductList.css';
import Card from '../../molecules/card/Card';
import { deleteProduct } from '../../../services/productService';

const ProductList = ({ products }) => {
  const handleDelete = async (id) => {
    await deleteProduct(id);
    // window.location.reload(); 
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ProductList;
