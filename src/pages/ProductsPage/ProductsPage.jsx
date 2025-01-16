import ProductCard from "../../components/ProductCard/ProductCard";
const baseURL = import.meta.env.VITE_API_URL;
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductsPage.scss";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseURL}/products`);
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(`Error retrieving products: ${error}`);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-card">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
