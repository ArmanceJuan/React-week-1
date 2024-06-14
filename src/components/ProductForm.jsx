import { useRef, useState } from "react";
import "../css/productForm.css";

const ProductForm = ({ addProduct }) => {
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);

  const [productInfos, setProductInfos] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const handleAddProduct = (event) => {
    event.preventDefault();

    const newProduct = {
      name: productInfos.name,
      description: productInfos.description,
      price: productInfos.price,
    };

    addProduct(newProduct);

    setProductInfos({
      name: "",
      description: "",
      price: 0,
    });

    nameRef.current.focus();
  };

  return (
    <>
      <form onSubmit={handleAddProduct} className="formulaire">
        <label>Name : </label>
        <input
          ref={nameRef}
          value={productInfos.name}
          onChange={(event) =>
            setProductInfos({ ...productInfos, name: event.target.value })
          }
        />

        <label>Description : </label>
        <input
          ref={descriptionRef}
          value={productInfos.description}
          onChange={(event) =>
            setProductInfos({
              ...productInfos,
              description: event.target.value,
            })
          }
        />

        <label>Price : </label>
        <input
          ref={priceRef}
          type="number"
          value={productInfos.price}
          onChange={(event) =>
            setProductInfos({ ...productInfos, price: event.target.value })
          }
        />

        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default ProductForm;
