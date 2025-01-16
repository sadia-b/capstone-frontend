import "./ProductCard.scss";

export default function ProductCard({ product }) {
  return (
    <div className="product">
      <img
        className="product__img"
        src="src\assets\images\tatcha_cleanser.webp"
        alt={product.photoDescription}
      />
      <div className="product__details">
        <small className="product__text">{product.name}</small>
        <small className="product__text">{product.brand}</small>
        <small className="product__text">${product.price}</small>
        <small className="product__text">${product.ingredient}</small>
        <small className="product__text">${product.concern}</small>
        <a href={product.link}>Buy </a>
      </div>
    </div>
  );
}
