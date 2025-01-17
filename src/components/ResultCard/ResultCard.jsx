export default function ResultCard({ productData }) {
  return (
    <div className="result-card">
      <small>{productData.name}</small>
      <small>{productData.type}</small>
    </div>
  );
}
