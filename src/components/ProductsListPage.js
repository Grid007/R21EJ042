import React, { useContext } from 'react';
import { ProductContext } from '../ProductContext';
import { Link } from 'react-router-dom';

const ProductsListPage = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <h2 style={{ color: "white" }} className="text-center mx-auto">Products List</h2>
        </div>
      </nav>
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div className="card h-100">
                <h3 className="card-title">
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                </h3>
                <div className="card-body">
                  <p className="card-text">Price: ${product.price}</p>
                  <p className="card-text">Category: {product.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsListPage;