import "./ProductCard.scss";
import { useState } from "react";

export default function ProductCard({ product, favourite }) {
  const [favourited, setFavourited] = useState(false);
  const item = product || favourite;

  async function handleClick() {
    setFavourited(!favourited);
    console.log("like button clicked");
  }

  return (
    <div className="product">
      <img
        className="product__img"
        src={`http://localhost:8080/${item.photo}`}
        alt={item.photoDescription}
      />
      <div className="product__details">
        <small className="product__text">{item.name}</small>
        <small className="product__text">{item.brand}</small>
        <small className="product__text">${item.price}</small>
        <small className="product__text">{item.ingredient}</small>
        <small className="product__text">{item.concern}</small>
        <a
          className="product__text product__link"
          href={item.link}
          target="_blank"
        >
          Buy{" "}
          <svg
            width="12px"
            height="12px"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Interface / External_Link">
              <path
                id="Vector"
                d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                stroke="#000000"
              />
            </g>
          </svg>
        </a>
        <div className="product__text product__button" onClick={handleClick}>
          <svg
            className={`product__like ${
              favourited ? "product__like--active" : ""
            }`}
            width="14px"
            height="12px"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
              stroke="#000000"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
