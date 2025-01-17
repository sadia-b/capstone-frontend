import { useParams } from "react-router-dom";
import "./ResultPage.scss";

export default function ResultPage() {
  const { concern } = useParams();

  return (
    <div className="results">
      <h3 className="results__title">Routine</h3>
      <h4>{concern}</h4>
    </div>
  );
}
