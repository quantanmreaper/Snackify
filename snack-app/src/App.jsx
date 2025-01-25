import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
           
           <Router>
              <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/product/:id" element={<ProductDetails />}></Route>
                  <Route path="/cart" element={<Cart />}></Route>
              </Routes>
           </Router>
           
  );
}

export default App;