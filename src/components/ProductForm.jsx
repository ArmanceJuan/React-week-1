import { useState } from "react";

const ProductForm = ({ addProduct }) => {
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
  };

  return (
    <>
      <form onSubmit={handleAddProduct}>
        <label>Name : </label>
        <input
          value={productInfos.name}
          onChange={(event) =>
            setProductInfos({ ...productInfos, name: event.target.value })
          }
        />

        <label>Description : </label>
        <input
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
