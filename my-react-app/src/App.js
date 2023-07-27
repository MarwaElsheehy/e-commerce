import { useState } from "react"
import "./App.css"
import NavBar from "./components/Home/Utilities/NavBar"
import { ProductDetails } from "./page/home/Category/ProductDetails"
import HomePage from "./page/home/HomePage"
import { Routes, Route } from 'react-router-dom'
import { Cart } from "./page/home/Category/Cart"

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    let ProductItem = cartItems.find(product => product.id === item.id);
    if (ProductItem) {
      ProductItem.quantity += 1;
      setCartItems([...cartItems]);

    } else {
      item.quantity = 1;
      setCartItems([item, ...cartItems])
    }
    console.log(ProductItem)
  }
  return (
    <div className="App">
      <NavBar cartItems={cartItems}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product/:productId" element={<ProductDetails addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems}/>}/>
      </Routes>
    </div>
  );
}

export default App;
