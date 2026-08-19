import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";
import { useCart } from "../context/CartContext.jsx";
import CartPanel from "./CartPanel.jsx";
function Header() {
  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";
  const { isDarkMode, toggleTheme } = useTheme();
  const { totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <header className="header">
        <div className="header-content">
          <NavLink to="/" className="logo">
            🛒 Tienda<span>React</span>
          </NavLink>
          <nav className="nav">
            <NavLink to="/" className={linkClass} end>
              Home
            </NavLink>
            <NavLink to="/admin" className={linkClass}>
              Admin
            </NavLink>
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? "☀️ Claro" : "🌕 Oscuro"}
            </button>
            {/* Botón del Carrito */}
            <button className="cart-toggle" onClick={() => setIsCartOpen(true)}>
              🛒 Carrito
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </button>
          </nav>
        </div>
      </header>
      {/* Renderizamos el panel flotante */}
      <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
export default Header;
