import { useState, useEffect } from "react";
import "./App.css";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  // Marche pas a revenir plus tard

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem("products"));
    if (storedProduct) {
      setProducts(storedProduct);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    console.log(localStorage);
  }, [products]);

  //

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
