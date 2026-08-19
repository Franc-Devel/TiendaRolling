import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext.jsx";
import { useCart } from "../context/CartContext.jsx"; 
import PageTransition from "../components/PageTransition.jsx";
import toast from "react-hot-toast";
function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProduct } = useProducts();
  const { addToCart } = useCart();
  const product = getProduct(id);
  const [cantidad, setCantidad] = useState(1);
  if (!product || product.active === false) {
    return (
      <PageTransition>
        <div className="page">
          <div className="empty-state">
            <p>
              El producto que buscás no existe o no está disponible en este
              momento.
            </p>
            <Link to="/" className="btn btn-primary">
              Volver al Home
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }
  const handleAgregarCarrito = () => {
    addToCart(product, cantidad);
    toast.success(`Agregaste ${cantidad}x ${product.name} al carrito`);
    setCantidad(1);
  };
  return (
    <PageTransition>
      <div className="page">
        <button className="btn-link" onClick={() => navigate(-1)}>
          ← Volver
        </button>
        <div className="product-detail">
          <img
            src={product.image}
            alt={product.name}
            className="product-detail-img"
          />
          <div className="product-detail-info">
            <span className="product-card-category">{product.category}</span>
            <h1>{product.name}</h1>
            <p className="product-detail-price">
              ${Number(product.price).toLocaleString("es-AR")}
            </p>
            <p className="product-detail-description">{product.description}</p>
            <hr
              style={{ borderColor: "var(--border-color)", margin: "1.5rem 0" }}
            />
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid var(--border-color)",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <button
                  style={{
                    background: "var(--bg-main)",
                    color: "var(--text-main)",
                    border: "none",
                    padding: "0.5rem 1rem",
                    cursor: "pointer",
                    fontSize: "1.2rem",
                  }}
                  onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                >
                  -
                </button>
                <span style={{ padding: "0 1rem", fontWeight: "bold" }}>
                  {cantidad}
                </span>
                <button
                  style={{
                    background: "var(--bg-main)",
                    color: "var(--text-main)",
                    border: "none",
                    padding: "0.5rem 1rem",
                    cursor: "pointer",
                    fontSize: "1.2rem",
                  }}
                  onClick={() => setCantidad(cantidad + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-primary"
                onClick={handleAgregarCarrito}
                style={{ flex: 1, padding: "0.8rem" }}
              >
                🛒 Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
export default ProductDetail;
