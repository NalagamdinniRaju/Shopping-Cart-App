
import { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ProgressBar from "./components/ProgressBar";
import "./styles/App.css";

// Product data
const PRODUCTS = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Smartphone", price: 300 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Smartwatch", price: 150 },
];

const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };
const THRESHOLD = 1000;

function App() {
  const [cart, setCart] = useState([]);
  const [showGiftMessage, setShowGiftMessage] = useState(false);

  // Calculating cart subtotal
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Check if free gift should be added or removed based on threshold
  useEffect(() => {
    const hasGift = cart.some(item => item.id === FREE_GIFT.id);

    if (subtotal >= THRESHOLD && !hasGift) {
      // Add free gift when threshold is met
      setCart((prevCart) => [...prevCart, { ...FREE_GIFT, quantity: 1 }]);
      setShowGiftMessage(true);

      // Showing toast notification with Congratulations message
      toast.success(
        <span style={{ fontWeight: "bold" }}>
          Congratulations! You've unlocked a Free Gift! 🎁
        </span>,
        {
          icon: null,
          duration: 3000,
          style: { textAlign: "center" },
        }
      );

      // Hiding message after 3 seconds
      const timer = setTimeout(() => {
        setShowGiftMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    } else if (subtotal < THRESHOLD && hasGift) {
      // Remove free gift when total drops below threshold
      setCart(prevCart => prevCart.filter(item => item.id !== FREE_GIFT.id));
      setShowGiftMessage(false);
    }
  }, [subtotal, cart]);

  // Adding product to cart
  const addToCart = (productId, quantity) => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      
      if (existingItem) {
        // Updating quantity if item already in cart
        return prevCart.map(item => 
          item.id === productId ? {...item, quantity: item.quantity + quantity} : item
        );
      } else {
        // Adding new item to cart
        return [...prevCart, { ...product, quantity }];
      }
    });
    
    toast.success(`Added ${quantity} ${product.name} to cart`, {
      duration: 2000
    });
  };

  // Update cart item quantity
  const updateCartQuantity = (productId, quantity) => {
    //Here we don't allow updating the free gift
    if (productId === FREE_GIFT.id) return;

    setCart(prevCart => {
      if (quantity <= 0) {
        // Remove item if quantity is 0 or less
        return prevCart.filter(item => item.id !== productId);
      }
      
      return prevCart.map(item => 
        item.id === productId ? {...item, quantity} : item
      );
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    // Here we don't allow removing the free gift
    if (productId === FREE_GIFT.id) return;
    
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  return (
    <div className="container">
      <Toaster position="top-center" />
      
      <h1>Shopping Cart App</h1>
      
      {/* Progress toward free gift */}
      <ProgressBar current={subtotal} threshold={THRESHOLD} />
      
      <div className="content">
        <div className="products-section">
          <h2>Products</h2>
          <div className="products-grid">
            <ProductList products={PRODUCTS} addToCart={addToCart} />
          </div>
        </div>
        
        <div className="cart-section">
          <h2>Your Cart</h2>
          <Cart 
            items={cart}
            updateQuantity={updateCartQuantity}
            removeItem={removeFromCart}
            freeGiftId={FREE_GIFT.id}
            subtotal={subtotal}
          />
        </div>
      </div>
    </div>
  );
}

export default App;