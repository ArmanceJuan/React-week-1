import Product from "./Product";
import "../css/product.css";

const ProductList = ({ products }) => {
  return (
    <div className="productcardContainer">
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
