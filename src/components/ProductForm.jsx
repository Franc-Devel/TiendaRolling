import { useEffect, useState } from "react";
const emptyForm = {
  name: "",
  description: "",
  price: "",
  category: "",
  image: "",
};
function ProductForm({ initialData, onSubmit, onCancel }) {
  const [form, setForm] = useState(emptyForm);
  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || "",
        description: initialData.description || "",
        price: initialData.price || "",
        category: initialData.category || "",
        image: initialData.image || "",
      });
    } else {
      setForm(emptyForm);
    }
  }, [initialData]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.price) return;
    onSubmit({
      ...form,
      price: parseFloat(form.price),
      image:
        form.image.trim() ||
        `https://placehold.co/400x400?text=${encodeURIComponent(form.name)}`,
    });

    if (!initialData) setForm(emptyForm);
  };
  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h3>{initialData ? "Editar producto" : "Nuevo producto"}</h3>
      <label>
        Nombre *
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Descripción
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={3}
        />
      </label>
      {}
      <label>
        Precio *
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          min="0"
          step="0.01"
          required
        />
      </label>
      <label>
        Categoría
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
        />
      </label>
      <label>
        URL de imagen
        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="https://..."
        />
      </label>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {initialData ? "Guardar cambios" : "Crear producto"}
        </button>
        {initialData && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancel}
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}
export default ProductForm;
