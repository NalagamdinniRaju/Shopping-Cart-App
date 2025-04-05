
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import "../styles/ProductList.css";

function ProductList({ products, addToCart }) {
  return (
    <>
      {products.map(product => (
        <ProductItem 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
        />
      ))}
    </>
  );
}

function ProductItem({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };
  
  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    setQuantity(1); // Here Reseting the quantity after adding
  };
  
  return (
    <div className="product-card">
      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="price">₹{product.price}</p>
      </div>
      
      <div className="product-actions">
        <div className="quantity-selector">
          <button onClick={decrementQuantity} className="quantity-btn">
            <FiMinus />
          </button>
          <span className="quantity">{quantity}</span>
          <button onClick={incrementQuantity} className="quantity-btn">
            <FiPlus />
          </button>
        </div>
        
        <button onClick={handleAddToCart} className="add-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductList;