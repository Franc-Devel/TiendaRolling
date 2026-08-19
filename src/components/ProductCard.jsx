import { Link } from "react-router-dom";
function ProductCard({ product }) {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = `https://placehold.co/400x400/161b22/00d8ff?text=${encodeURIComponent(product.category)}`;
  };
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-card-img"
        onError={handleImageError} // <-- Atrapamos el error acá
      />
      <div className="product-card-body">
        <span className="product-card-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-card-price">
          ${Number(product.price).toLocaleString("es-AR")}
        </p>
      </div>
    </Link>
  );
}
export default ProductCard;
