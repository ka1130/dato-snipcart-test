import React from 'react';
import Layout from './src/components/layout';
import { CartProvider } from './src/context/CartContext';

const rootWrapper = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export const rootProvider = ({ element }) => (
  <CartProvider>{element}</CartProvider>
);

export default rootWrapper;
