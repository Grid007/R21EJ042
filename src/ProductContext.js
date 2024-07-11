import React, { createContext, useEffect, useState } from 'react';
import { fetchProducts } from './api';
import ProductsListPage from './components/ProductsListPage';

export const ProductContext = createContext();

export const ProductProvider = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const productsData = await fetchProducts('AMZ', 'Laptop', 10, 1, 10000);
      setProducts(productsData);
    } catch (err) {
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ProductsListPage />
      )}
    </ProductContext.Provider>
  );
};