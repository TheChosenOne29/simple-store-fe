import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/notFound";
import AddProduct from "./pages/addProduct";
import Products from "./pages/Products";
import EditProduct from "./pages/editProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/create" element={<AddProduct />} />
        <Route path="/index" element={<Products />} />
        <Route path="/edit" element={<EditProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
