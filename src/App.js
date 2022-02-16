import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Error from "./components/error/Error";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
export default App;
