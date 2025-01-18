import ProductCard from "../../components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import "./ProductsPage.scss";
import { fetchProducts } from "../../../utils/helperFunctions";

export default function ProductsPage({ updateLikedStatus }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  if (!products) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="product-card">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            updateLikedStatus={updateLikedStatus}
          />
        );
      })}
    </div>
  );
}
