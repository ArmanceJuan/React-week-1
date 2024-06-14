import { useState } from "react";
import "./App.css";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  const addProductList = (newProducts) => {
    setProducts([...products, newProducts]);
  };

  return (
    <div>
      <ProductForm addProduct={addProductList} />
      <h2>Product List</h2>
      <ProductList products={products} />
    </div>
  );
}

export default App;
