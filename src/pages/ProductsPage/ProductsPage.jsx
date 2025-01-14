import Header from "../../components/Header/Header";
import PlantSVG from "../../components/PlantSVG/PlantSVG";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function ProductsPage() {
  const product = {
    id: 1,
    type: "Cleanser",
    time: "Day",
    concern: "Dryness",
    brand: "CeraVe",
    name: "Hydrating Cleanser",
    ingredient: "Ceramides",
    price: 19.99,
    photo: "images/cerave-cleanser.webp",
    photoDescription: "image of product",
    link: "https://www.walmart.ca/en/ip/cerave-hydrating-facial-cleanser-with-hyaluronic-acid-and-3-ceramides-gentle-moisturizing-non-foaming-facial-cleanser-for-men-women-daily-face-wash-fo/6000200706743",
  };

  return (
    <div>
      <Header />
      <ProductCard product={product} />
    </div>
  );
}
