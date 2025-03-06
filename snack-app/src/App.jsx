import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

//Importing Context Providers for Cart Management 
import {CartProvider} from "./context/CartContext";
import {AuthProvider} from "./context/AuthContext";
import {SnackProvider} from "./context/SnackContext";

function App() {
  return (
      
      <SnackProvider>
        <CartProvider>
          <AuthProvider>

          <Router>
              <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/productdetails" element={<ProductDetails />}></Route>
                  <Route path="/cart" element={<Cart />}></Route>
              </Routes>
           </Router>

          </AuthProvider>
        </CartProvider>
      </SnackProvider>
           
           
  );
}

export default App;