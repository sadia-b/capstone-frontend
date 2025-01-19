import "./ResultCard.scss";
import { baseURL } from "../../../utils/helperFunctions";

export default function ResultCard({ productData, productOrder }) {
  return (
    <div className="result-card">
      <h5 className="card__title">
        Step {productOrder}: {productData.type}
      </h5>
      <div className="card__section">
        <div className="card__left">
          <div className="card__image-div">
            <img
              className="card__image"
              src={`${baseURL}/${productData.photo}`}
              alt={productData.photoDesription}
            />
          </div>
        </div>
        <ul className="card__right">
          <div className="card__right-wrapper">
            <li className="card__list card__list--bold">{productData.name}</li>
            <li className="card__list card__list--bold">{productData.brand}</li>
            <li className="card__list card__list--bold">
              ${productData.price}
            </li>
            <li className="card__list">{productData.ingredient}</li>
            <li className="card__list card__list--padding">
              {productData.type === "Mask"
                ? "Note: for use only at night."
                : ""}
              {productData.type === "SPF"
                ? "Note: for use only in the morning."
                : ""}
              {productData.type !== "Mask" && productData.type !== "SPF"
                ? "Note: This product is so great because of its ingredient and this is an explanation of how to use it."
                : ""}
            </li>
            <div className="card__button-section">
              <button className="card__button">
                <a
                  className="card__link"
                  href={productData.link}
                  target="_blank"
                >
                  Purchase
                </a>
              </button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
