import { useCart } from "../context/CartContext.jsx";
function CartPanel({ isOpen, onClose }) {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();
  if (!isOpen) return null;
  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Tu Carrito</h2>
          <button className="btn-close" onClick={onClose}>
            ✖
          </button>
        </div>
        <div className="cart-body">
          {cart.length === 0 ? (
            <p className="empty-cart">El carrito está vacío.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>
                    {item.quantity} x $
                    {Number(item.price).toLocaleString("es-AR")}
                  </p>
                </div>
                <button
                  className="btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-footer">
            <h3>Total: ${Number(totalPrice).toLocaleString("es-AR")}</h3>
            <button
              className="btn btn-primary"
              style={{ width: "100%", marginBottom: "10px" }}
              onClick={() => {
                alert("¡Simulación de compra exitosa!");
                clearCart();
                onClose();
              }}
            >
              Finalizar Compra
            </button>
            <button
              className="btn btn-secondary"
              style={{ width: "100%" }}
              onClick={clearCart}
            >
              Vaciar Carrito
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default CartPanel;
