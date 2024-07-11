import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductProvider } from './ProductContext';
import ProductsListPage from './components/ProductsListPage';
import ProductDetailPage from './components/ProductDetailPage';

const App = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <div className="App">
          <header className="App-header">
            <h1>Product Catalog</h1>
          </header>
          <main>
            <Routes>
              <Route path="/" exact element={<ProductsListPage />} />
              <Route path="/products/:productId" element={<ProductDetailPage />} />
            </Routes>
          </main>
        </div>
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;