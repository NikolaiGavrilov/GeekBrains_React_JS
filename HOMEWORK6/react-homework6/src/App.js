// src/App.jsx
import React from "react";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import EditProduct from "./components/EditProduct";
import './App.css'

function App() {
  return (
    <div className="product-catalogue">
      <h1 style={{ paddingBottom: '24px' }}>Product Catalogue</h1>
      <AddProduct />
      <ProductList />

    </div>

  );
}

export default App;
