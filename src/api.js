import axios from 'axios';

const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIwNjgzNjQyLCJpYXQiOjE3MjA2ODMzNDIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImU3NTAyN2QzLWI2ZTctNDk1Yy05YzI0LWE2NDY3M2I2MTEwYiIsInN1YiI6ImFuaWtldGhzaGV0dHkwQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IkFlc3RoZXRpYyBQcm9kdWN0cyIsImNsaWVudElEIjoiZTc1MDI3ZDMtYjZlNy00OTVjLTljMjQtYTY0NjczYjYxMTBiIiwiY2xpZW50U2VjcmV0IjoiZVBIRkZtV0dOcnJicnhyRSIsIm93bmVyTmFtZSI6IkFuaWtldGgiLCJvd25lckVtYWlsIjoiYW5pa2V0aHNoZXR0eTBAZ21haWwuY29tIiwicm9sbE5vIjoiUjIxRUowNDIifQ.IkozkkIsoMnIdRrnxPkkMBKDh2XfFy0eMhtI19cof6g';

const axiosInstance = axios.create({
  headers: {
    'Authorization': `Bearer ${ACCESS_TOKEN}`
  }
});

export const fetchProducts = async (company, category, top, minPrice, maxPrice) => {
  try {
    const response = await axiosInstance.get(`/test/companies/${company}/categories/${category}/products`, {
      params: {
        top,
        minPrice,
        maxPrice,
      },
    });
    return response.data.map((product, index) => ({
      id: `${company}-${category}-${index}`,
      ...product,
      name: product.productName,
      company,
      category,
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const fetchProductById = async (id) => {
  
  const [company, category, index] = id.split('-');
  const products = await fetchProducts(company, category, 10, 1, 10000);
  return products.find(product => product.id === id);
};
