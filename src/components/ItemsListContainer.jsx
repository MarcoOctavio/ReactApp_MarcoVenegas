import React, { useEffect, useState } from 'react';
import faktary from '../assets/faktary.png';
import ItemList from './ItemList';
import SearchBar from './SearchBar'; 
import { useParams } from 'react-router-dom';
import { db } from '../service/firebase'; 
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({ greeting, texto }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); 
  const { category } = useParams();

  useEffect(() => {
    let isMounted = true; 

    const fetchProducts = async () => {
      try {
        setLoading(true);

        const productsRef = collection(db, 'productos');
        const q = category
          ? query(productsRef, where('category', '==', category))
          : productsRef;

        const snap = await getDocs(q);
        const items = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        if (isMounted) setData(items);
      } catch (err) {
        console.error('Error leyendo Firestore:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProducts();
    return () => { isMounted = false; };
  }, [category]);

  if (loading) return <p className="text-center mt-5">Cargando productos…</p>;

  const nombresCategorias = {
    cerveza: "Cerveza",
    hidromiel: "Hidromiel",
    vino: "Vino",
    sidra: "Sidra",
    top10: "Top 10",
  };
  const textosCategorias = {
    cerveza: "Explora nuestra cerveza de calidad y variedad",
    hidromiel: "Aprovecha nuestras ofertas mágicas",
    vino: "Descubre nuestras delicias encantadas",
    sidra: "Sumérgete en nuestros sabores hechizantes",
    top10: "Nuestras 10 bebidas favoritas según los clientes",
  };

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredData = data.filter((prod) => {
    if (!normalizedSearch) return true;

    const name = (prod.name || "").toLowerCase();
    const categoryProd = (prod.category || "").toLowerCase();
    const description = (prod.description || "").toLowerCase();

    return (
      name.includes(normalizedSearch) ||
      categoryProd.includes(normalizedSearch) ||
      description.includes(normalizedSearch)
    );
  });

  return (
    <div className="container mt-5">
      {/* Encabezado / bienvenida */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="welcome-card text-center">
            <h1 className="display-4 mb-3">
              {category
                ? (nombresCategorias[category.toLowerCase()] || "Categoría")
                : "Bienvenid@s"}
            </h1>
            <p className="lead">
              {category
                ? (textosCategorias[category.toLowerCase()] || "Explora nuestros productos")
                : texto}
            </p>
          </div>
        </div>
      </div>

      {/* Imagen */}
      <div className="row justify-content-center mt-4">
        <div className="contenedor-imagen">
          <img src={faktary} alt="botellas de magia" className="imgen1" />
        </div>
      </div>

      {/* 🔍 Barra de búsqueda */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-6 col-lg-4">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Buscar por nombre, descripción o categoría..."
          />
        </div>
      </div>

      {/* Listado de productos filtrados */}
      <ItemList data={filteredData} />
    </div>
  );
};

export default ItemListContainer;
