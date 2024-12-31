import React, { createContext, useState, useContext } from 'react';
import { faker } from '@faker-js/faker';

export const productContext = createContext();

const generateProducts = () => {
  return Array.from({ length: 12 }, () => ({
    productId: faker.string.uuid(),
    productName: faker.commerce.productName(),
    productItem: faker.commerce.product(),
    productPrice: faker.commerce.price({ symbol: "$" }),
    productDescription: faker.commerce.productDescription(),
    productImage: faker.image.url(),
  }));
};

export const ProductProvider = ({ children }) => {
  const [myProducts, setMyProducts] = useState(generateProducts());

  return (
    <productContext.Provider value={{ myProducts, setMyProducts }}>
      {children}
    </productContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(productContext);
};
