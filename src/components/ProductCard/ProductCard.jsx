import "./ProductCard.scss";
import { useState } from "react";
import {
  fetchFavourites,
  postFavourites,
  removeFavourites,
} from "../../../utils/helperFunctions";
import EditProductModal from "../EditProductModal/EditProductModal";
import { useLocation } from "react-router-dom";

export default function ProductCard({
  product,
  favourite,
  updateLikedStatus,
  setProducts,
  setFavouriteProducts,
}) {
  const item = product || favourite;
  const [favourited, setFavourited] = useState(item.liked);
  const [modal, setModal] = useState(false);
  const location = useLocation();

  const openModal = () => {
    setModal(true);
    console.log(modal);
  };
  const closeModal = () => setModal(false);

  async function handleClick() {
    const newLikedStatus = !favourited;
    setFavourited(newLikedStatus);

    updateLikedStatus(item.id, newLikedStatus);

    const favouriteProduct = {
      product_id: item.id,
      user_id: 1,
    };

    try {
      if (!favourited) {
        const newFavourite = await postFavourites(favouriteProduct);
        if (newFavourite) {
          setFavourited(true);
        }
      } else {
        await removeFavourites(item.id);
        setFavourited(false);
        await fetchFavourites(setFavouriteProducts);
      }
    } catch (error) {
      console.error("Error toggling favourite status:", error);
    }
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
        {location.pathname === "/products" ? (
          <div
            className="product__text product__button product_button--hidden"
            onClick={openModal}
          >
            <svg
              width="14px"
              height="14px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z"
                fill="#0F0F0F"
              />
            </svg>
          </div>
        ) : (
          ""
        )}
      </div>
      <EditProductModal
        isOpen={modal}
        close={closeModal}
        product={product}
        setProducts={setProducts}
      />
    </div>
  );
}
