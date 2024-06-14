import "../css/product.css";

const Product = ({ name, description, price }) => {
  return (
    <div className="productcard">
      <h2>{name}</h2>
      <div className="productcardinfos">
        <p>{description}</p>
        <p>{price} €</p>
      </div>
    </div>
  );
};

export default Product;
