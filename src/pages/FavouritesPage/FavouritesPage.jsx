import { useEffect, useState } from "react";
import "./FavouritesPage.scss";

export default function FavouritesPage() {
  const [favouriteProduct, setFavouriteProduct] = useState([]);

  if (!favouriteProduct) {
    return <p>Loading products...</p>;
  }

  return;
}
