import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast"; // <-- Importamos el Toaster
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Admin from "./pages/Admin.jsx";
function App() {
  const location = useLocation();
  return (
    <div className="app">
      <Header />
      {}
      <Toaster position="bottom-right" reverseOrder={false} />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/admin" element={<Admin />} />
            <Route
              path="*"
              element={<h2 className="page">Página no encontrada</h2>}
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
export default App;
