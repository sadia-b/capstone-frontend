import { useEffect, useState } from "react";
import "./FavouritesPage.scss";
import { fetchFavourites } from "../../../utils/helperFunctions";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function FavouritesPage({ updateLikedStatus }) {
  const [favouriteProducts, setFavouriteProducts] = useState([]);

  useEffect(() => {
    fetchFavourites(setFavouriteProducts);
  }, []);

  console.log(favouriteProducts);

  if (favouriteProducts.length === 0) {
    return (
      <h5 className="favourite__empty">
        No favourites yet. Go to the Products page and hit the heart button on
        your favourite products!
      </h5>
    );
  }

  if (!favouriteProducts) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="favourite">
      {favouriteProducts.map((favourite) => {
        return (
          <ProductCard
            key={favourite.id}
            favourite={favourite}
            updateLikedStatus={updateLikedStatus}
          />
        );
      })}
    </div>
  );
}
