import { useParams } from "react-router-dom";
import "./ResultPage.scss";
import { fetchProductsByConcern } from "../../../utils/helperFunctions";
import { useEffect, useState } from "react";
import ResultCard from "../../components/ResultCard/ResultCard";

export default function ResultPage() {
  const { concern } = useParams();
  const [productConcern, setProductConcern] = useState("");

  useEffect(() => {
    fetchProductsByConcern(setProductConcern, concern);
  }, [concern]);

  console.log(productConcern);

  if (!productConcern) {
    return <p>Loading ...</p>;
  }

  const sortedProducts = productConcern.sort((a, b) => {
    const order = ["Cleanser", "Toner", "Serum", "Mask", "Moisturizer", "SPF"];
    return order.indexOf(a.type) - order.indexOf(b.type);
  });

  return (
    <div className="results">
      {sortedProducts.map((productData) => (
        <ResultCard key={productData.id} productData={productData} />
      ))}
    </div>
  );
}
