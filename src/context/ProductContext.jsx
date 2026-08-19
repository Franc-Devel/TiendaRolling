import { createContext, useContext, useEffect, useState } from "react";
const ProductContext = createContext();
const STORAGE_KEY = "products";
const seedProducts = [
  {
    id: crypto.randomUUID(),
    active: true,
    name: "Auriculares Sony WH-1000XM4",
    description:
      "Cancelación de ruido líder en la industria, conexión Bluetooth multipunto.",
    price: 299990,
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&q=80",
  },
  {
    id: crypto.randomUUID(),
    active: true,
    name: "Mouse Gamer Inalámbrico",
    description:
      "Sensor óptico de alta precisión, diseño ergonómico y batería de larga duración.",
    price: 45000,
    category: "Periféricos",
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&q=80",
  },
  {
    id: crypto.randomUUID(),
    active: true,
    name: "Teclado Mecánico Keychron K2",
    description: "Teclado mecánico inalámbrico 75% con switches Gateron Brown.",
    price: 115000,
    category: "Periféricos",
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&q=80",
  },
  {
    id: crypto.randomUUID(),
    active: true,
    name: 'Monitor LG UltraGear 27"',
    description: "Panel IPS, 144Hz, 1ms, ideal para gaming competitivo.",
    price: 320000,
    category: "Monitores",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80",
  },
  {
    id: crypto.randomUUID(),
    active: true,
    name: "SSD Interno WD Black 1TB",
    description:
      "Almacenamiento ultrarrápido NVMe para reducir los tiempos de carga.",
    price: 82000,
    category: "Componentes",
    image: "https://www.necxus.com.ar/products_image/43108/1000x1000_1.jpg",
  },
  {
    id: crypto.randomUUID(),
    active: true,
    name: "Memoria RAM HyperX 16GB",
    description: "Módulo DDR4 a 3200MHz de alto rendimiento para multitarea.",
    price: 41000,
    category: "Componentes",
    image:
      "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=400&q=80",
  },
  {
    id: crypto.randomUUID(),
    active: true,
    name: "Micrófono HyperX QuadCast",
    description: "Micrófono de condensador USB para streaming y podcasts.",
    price: 110000,
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&q=80",
  },
  {
    id: crypto.randomUUID(),
    active: true,
    name: "Cámara Mirrorless Sony Alpha",
    description:
      "Cámara profesional de lentes intercambiables. Ideal para fotografía de estudio y grabación de video en 4K.",
    price: 1250000,
    category: "Cámaras",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80",
  },
  {
    id: crypto.randomUUID(),
    active: true,
    name: "Placa de Video RTX 4060 Ti",
    description: "Nvidia GeForce RTX 4060 Ti 8GB GDDR6.",
    price: 580000,
    category: "Componentes",
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&q=80",
  },
  {
    id: crypto.randomUUID(),
    active: true,
    name: "Procesador AMD Ryzen 5 5600X",
    description: "6 núcleos, 12 hilos, hasta 4.6GHz. Arquitectura Zen 3.",
    price: 185000,
    category: "Componentes",
    image:
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&q=80",
  },
  {
    id: crypto.randomUUID(),
    active: true,
    name: "Fuente Corsair RM750x",
    description: "750W, Certificación 80 Plus Gold, 100% modular.",
    price: 135000,
    category: "Componentes",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&q=80",
  },
  {
    id: crypto.randomUUID(),
    active: true,
    name: "Gabinete NZXT H510 Flow",
    description: "Panel frontal perforado para máximo flujo de aire.",
    price: 95000,
    category: "Componentes",
    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&q=80",
  },
  {
    id: crypto.randomUUID(),
    active: true,
    name: "Auriculares Razer Kraken V3",
    description: "Audio espacial THX y retroiluminación Razer Chroma RGB.",
    price: 89000,
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=400&q=80",
  },
  {
    id: crypto.randomUUID(),
    active: true,
    name: "Mousepad SteelSeries QcK",
    description: "Superficie de tela microtejida para máximo control.",
    price: 18000,
    category: "Accesorios",
    image:
      "https://stylewatch.vtexassets.com/arquivos/ids/204387/mouse-pad-steelseries-qck-prism-cloth-3xl-st8216_01.jpg?v=637734740229470000",
  },
  {
    id: crypto.randomUUID(),
    active: true,
    name: "Teclado Redragon Kumara K552",
    description: "Mecánico Tenkeyless, switches Outemu Blue, luz roja.",
    price: 42000,
    category: "Periféricos",
    image:
      "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=400&q=80",
  },
  {
    id: crypto.randomUUID(),
    active: true,
    name: "Monitor Samsung Odyssey G5",
    description: "27 pulgadas, panel curvo 1000R, 144Hz.",
    price: 345000,
    category: "Monitores",
    image:
      "https://images.unsplash.com/photo-1551645120-d70bfe84c826?w=400&q=80",
  },
  {
    id: crypto.randomUUID(),
    active: true,
    name: "Disco Duro Seagate Barracuda 2TB",
    description: "7200 RPM, ideal para almacenamiento masivo de juegos.",
    price: 55000,
    category: "Componentes",
    image:
      "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400&q=80",
  },
  {
    id: crypto.randomUUID(),
    active: true,
    name: "Placa Madre ASUS ROG Strix B550-F",
    description: "Socket AM4, WiFi 6, soporte PCIe 4.0.",
    price: 175000,
    category: "Componentes",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
  },
  {
    id: crypto.randomUUID(),
    active: true,
    name: "Parlantes Edifier R1280T",
    description: "Monitores de estudio activos, sonido nítido y balanceado.",
    price: 130000,
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&q=80",
  },
  {
    id: crypto.randomUUID(),
    active: true,
    name: "Silla Gamer Secretlab Titan",
    description: "Soporte lumbar integrado, espuma de curado en frío.",
    price: 450000,
    category: "Accesorios",
    image:
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=400&q=80",
  },
];
function loadProducts() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch (err) {
    console.error("Error leyendo productos de localStorage:", err);
  }
  return seedProducts;
}
export function ProductProvider({ children }) {
  const [products, setProducts] = useState(loadProducts);
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    } catch (err) {
      console.error("Error guardando productos en localStorage:", err);
    }
  }, [products]);
  const addProduct = (product) => {
    const newProduct = { ...product, id: crypto.randomUUID(), active: true };
    setProducts((prev) => [...prev, newProduct]);
  };
  const updateProduct = (id, updatedFields) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedFields } : p)),
    );
  };
  const toggleProductStatus = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, active: !p.active } : p)),
    );
  };
  const getProduct = (id) => products.find((p) => p.id === id);
  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        toggleProductStatus,
        getProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts debe usarse dentro de un ProductProvider");
  }
  return context;
}
