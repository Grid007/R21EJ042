import React, { useContext } from 'react';
import { ProductContext } from '../ProductContext';
import { Link, useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { products } = useContext(ProductContext);
  const { id } = useParams();

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Description: {product.description}</p>
      <p>Rating {product.rating}</p>
      <p>Discount: {product.discount}</p>
      <p>Availability: {product.availability}</p>
      <Link to="/products">Back to products list</Link>
    </div>
  );
};

export default ProductDetailPage;