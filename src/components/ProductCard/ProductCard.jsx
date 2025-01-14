import "./ProductCard.scss";

export default function ProductCard({ product }) {
  return (
    <div className="product">
      <img
        className="product__img"
        src="src\assets\images\tatcha_cleanser.webp"
        alt={product.photoDescription}
      />
      <div className="product__details">{product.name}</div>
      <div className="product__details">{product.brand}</div>
      <div className="product__details">{product.price}</div>
    </div>
  );
}
