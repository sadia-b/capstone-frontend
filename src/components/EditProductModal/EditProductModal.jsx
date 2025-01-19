import { useEffect, useState } from "react";
import "./EditProductModal.scss";
import axios from "axios";

export default function EditProductModal({
  isOpen,
  close,
  product,
  setProducts,
}) {
  const [productName, setProductName] = useState("");
  const [productNameError, setProductNameError] = useState(false);
  const [productBrand, setProductBrand] = useState("");
  const [productBrandError, setProductBrandError] = useState(false);
  const [productPrice, setProductPrice] = useState("");
  const [productPriceError, setProductPriceError] = useState(false);

  useEffect(() => {
    if (isOpen && product) {
      setProductName(product.name || "");
      setProductBrand(product.brand || "");
      setProductPrice(product.price || "");
    }
  }, [isOpen, product]);

  if (!isOpen) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("button clicked");

    setProductNameError(!productName);
    setProductBrandError(!productBrand);
    setProductPriceError(!productPrice);

    if (!productName || !productBrand || !productPrice) {
      return;
    }

    const newProductInfo = {
      type: product.type,
      time: product.time,
      concern: product.concern,
      brand: productBrand,
      name: productName,
      ingredient: product.ingredient,
      price: parseFloat(productPrice),
      liked: product.liked,
      photo: product.photo,
      photoDescription: product.photoDescription,
      link: product.link,
    };
    console.log(newProductInfo);
    console.log(product.id);

    const url = `http://localhost:8080/products/${product.id}`;

    try {
      const response = await axios.put(url, newProductInfo);
      if (response.status === 200) {
        console.log("Product updated successfully", response.data);
        const updatedProducts = await axios.get(
          "http://localhost:8080/products"
        );
        setProducts(updatedProducts.data);
        close();
      }
    } catch (error) {
      console.log(`Error updating product: ${error}`);
    }

    if (!product) {
      return <p>Loading product details...</p>;
    }
  };

  return (
    <div>
      <div className="modal__overlay"></div>
      <div className="modal">
        <h3>Edit Product</h3>
        <form onSubmit={handleSubmit} className="edit">
          <div className="edit__wrapper">
            <label className="edit__label">Name</label>
            <input
              type="text"
              name="name"
              value={productName}
              className={`edit__input ${
                productNameError ? "edit__input--error" : ""
              }`}
              onChange={(event) => {
                setProductName(event.target.value);
                setProductNameError(false);
              }}
            />
            {productNameError && <p>This field is required</p>}
          </div>
          <div className="edit__wrapper">
            <label className="edit__label">Brand</label>
            <input
              type="text"
              name="brand"
              value={productBrand}
              className={`edit__input ${
                productBrandError ? "edit__input--error" : ""
              }`}
              onChange={(event) => {
                setProductBrand(event.target.value);
                setProductBrandError(false);
              }}
            />
            {productBrandError && <p>This field is required</p>}
          </div>
          <div className="edit__wrapper">
            <label className="edit__label">Price</label>
            <input
              type="text"
              name="price"
              value={productPrice}
              className={`edit__input ${
                productPriceError ? "edit__input--error" : ""
              }`}
              onChange={(event) => {
                setProductPrice(event.target.value);
                setProductPriceError(false);
              }}
            />
            {productPriceError && <p>This field is required</p>}
          </div>
          <button type="submit" className="modal__close">
            Done
          </button>
        </form>
      </div>
    </div>
  );
}
