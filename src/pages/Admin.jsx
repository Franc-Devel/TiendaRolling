import { useState } from "react";
import { useProducts } from "../context/ProductContext.jsx";
import ProductForm from "../components/ProductForm.jsx";
import PageTransition from "../components/PageTransition.jsx";
import toast from "react-hot-toast";
const AdminTableRow = ({ product, onEdit, onToggle }) => (
  <tr style={{ opacity: product.active !== false ? 1 : 0.5 }}>
    <td>
      <img
        src={product.image}
        alt={product.name}
        className="admin-thumb"
        style={{
          filter: product.active !== false ? "none" : "grayscale(100%)",
        }}
      />
    </td>
    <td>{product.name}</td>
    <td>
      <span
        style={{
          fontSize: "0.75rem",
          padding: "0.2rem 0.5rem",
          borderRadius: "4px",
          background: product.active !== false ? "var(--accent)" : "#ef4444",
          color: "#fff",
        }}
      >
        {product.active !== false ? "Activo" : "Inactivo"}
      </span>
    </td>
    <td>${Number(product.price).toLocaleString("es-AR")}</td>
    <td className="admin-actions">
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => onEdit(product)}
      >
        Editar
      </button>
      <button
        className={
          product.active !== false
            ? "btn btn-danger btn-sm"
            : "btn btn-primary btn-sm"
        }
        onClick={() => onToggle(product)}
      >
        {product.active !== false ? "Desactivar" : "Activar"}
      </button>
    </td>
  </tr>
);
const AdminProductList = ({ products, onEdit, onToggle }) => {
  if (products.length === 0) {
    return <p>No hay productos cargados todavía.</p>;
  }

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Estado</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <AdminTableRow
            key={product.id}
            product={product}
            onEdit={onEdit}
            onToggle={onToggle}
          />
        ))}
      </tbody>
    </table>
  );
};
function Admin() {
  const { products, addProduct, updateProduct, toggleProductStatus } =
    useProducts();
  const [editingProduct, setEditingProduct] = useState(null);

  const handleCreate = (data) => {
    addProduct(data);
    toast.success("Producto creado con éxito");
  };
  const handleUpdate = (data) => {
    updateProduct(editingProduct.id, data);
    setEditingProduct(null);
    toast.success("Producto actualizado correctamente");
  };
  const handleToggleStatus = (product) => {
    toggleProductStatus(product.id);
    if (editingProduct?.id === product.id) setEditingProduct(null);

    if (product.active) {
      toast.error("Producto desactivado de la tienda");
    } else {
      toast.success("Producto reactivado en la tienda");
    }
  };
  return (
    <PageTransition>
      <div className="page">
        <h1>Panel de Administración</h1>
        <p className="page-subtitle">
          Crear, editar y gestionar el estado de los productos
        </p>
        <div className="admin-layout">
          <ProductForm
            initialData={editingProduct}
            onSubmit={editingProduct ? handleUpdate : handleCreate}
            onCancel={() => setEditingProduct(null)}
          />
          <div className="admin-list">
            <h3>Productos ({products.length})</h3>
            {}
            <AdminProductList
              products={products}
              onEdit={setEditingProduct}
              onToggle={handleToggleStatus}
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
export default Admin;
