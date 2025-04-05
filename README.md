# 🛒 Shopping Cart App

A modern React shopping cart application with automatic free gift functionality based on order threshold.

## ✨ Features

- **🛍️ Product Catalog**: Browse and add products to your cart
- **🎁 Free Gift System**: Automatically adds a Wireless Mouse when cart value reaches ₹1000
- **📊 Progress Tracking**: Visual feedback on progress toward unlocking the free gift
- **➕ Quantity Management**: Easily adjust product quantities in the cart
- **🔔 Toast Notifications**: User-friendly notifications for cart actions

## 🔧 Technical Details

The application is built with React and includes several key components:

- **App**: Main component that manages state and coordinates other components
- **ProductList**: Displays available products with quantity controls
- **Cart**: Shows items in cart with quantity controls and subtotal calculations
- **ProgressBar**: Visual indicator of progress toward free gift threshold

## 🚀 Implementation Highlights

- **State Management**: Uses React useState and useEffect hooks for state management
- **Conditional Rendering**: Different UI states based on cart contents and total
- **Automatic Gift Logic**: Free gift is automatically added/removed based on order total
- **Responsive Design**: Clean, modern UI with responsive elements

## 💡 How It Works

1. Add products to your cart using the quantity selectors
2. Watch the progress bar fill as you approach the ₹1000 threshold
3. Once you reach ₹1000, a free Wireless Mouse is automatically added to your cart
4. If you reduce your cart value below ₹1000, the free gift is automatically removed

## 🛠️ Technologies Used

- React (with Hooks)
- react-hot-toast for notifications
- CSS for styling
- Vite for development and building

## 📥 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/NalagamdinniRaju/Shopping-Cart-App.git
cd shopping-cart-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to ` http://localhost:5173/`


## 🏗️ Building for Production

```bash
npm run build
# or
yarn build
```
