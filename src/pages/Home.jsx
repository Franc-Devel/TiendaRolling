import { useProducts } from "../context/ProductContext.jsx";
import ProductCard from "../components/ProductCard.jsx";
import PageTransition from "../components/PageTransition.jsx";
function Home() {
  const { products } = useProducts();
  const activeProducts = products.filter((product) => product.active !== false);
  return (
    <PageTransition>
      <div className="page">
        <h1>Nuestros Productos</h1>
        <p className="page-subtitle">
          {activeProducts.length} producto
          {activeProducts.length !== 1 ? "s" : ""} disponible
          {activeProducts.length !== 1 ? "s" : ""}
        </p>
        {activeProducts.length === 0 ? (
          <div className="empty-state">
            <p>Todavía no hay productos cargados.</p>
          </div>
        ) : (
          <div className="product-grid">
            {activeProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
}
export default Home;
