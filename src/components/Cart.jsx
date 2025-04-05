import { FiMinus, FiPlus } from "react-icons/fi";
import { FaGift } from "react-icons/fa";
import "../styles/Cart.css";

function Cart({ items, updateQuantity, removeItem, freeGiftId, subtotal }) {
  if (items.length === 0) {
    return (
      <div className="cart">
        <p className="empty-cart">Your cart is empty</p>
      </div>
    );
  }
  
  //Here sorting items based on their id becuasee the free git appears at the bottom of the cart
  const sortedItems = [...items].sort((a, b) => {
    if (a.id === freeGiftId) return 1;
    if (b.id === freeGiftId) return -1;
    return 0;
  });
  
  return (
    <div className="cart">
      <ul className="cart-items">
        {sortedItems.map(item => (
          <li key={item.id} className="cart-item">
            <div className="item-details">
              <div className="item-name-container">
                <h3>{item.name}</h3>
                {item.id === freeGiftId && (
                  <span className="free-gift-label">
                    <FaGift className="gift-icon" /> Free Gift
                  </span>
                )}
              </div>
              <p className="item-price">₹{item.price} x {item.quantity} = {item.price * item.quantity} </p>
            </div>
            
            <div className="item-quantity-control">
              {item.id !== freeGiftId ? (
                <div className="item-actions">
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="cart-qty-btn"
                    >
                      {/* <FiMinus /> */}➖
                    </button>
                    <span className="cart-qty">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="cart-qty-btn"
                    >
                      {/* <FiPlus /> */}➕
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="remove-btn"
                    aria-label="Remove item"
                  >
                    ❌
                  </button>
                </div>
              ) : (
                <div className="free-item-quantity">x1</div>
              )}
            </div>
          </li>
        ))}
      </ul>
      
      <div className="cart-summary">
        <div className="subtotal-row">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        
        {items.some(item => item.id === freeGiftId) && (
          <div className="free-gift-row">
            <span>Free Gift</span>
            <span className="free-gift-value">- ₹ 0.00</span>
          </div>
        )}
        
        <div className="total-row">
          <span>Total</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;