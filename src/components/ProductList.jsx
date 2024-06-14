import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div>
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
