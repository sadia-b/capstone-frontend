import "./QuizPage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function QuizPage() {
  const [type, setType] = useState("");
  const [concern, setConcern] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (!type || !concern) {
      setError("Please select both type and concern before submitting.");
      return;
    }

    setError("");
    navigate(`/results/${concern}`);
    console.log(type);
    console.log(concern);

    return;
  }

  return (
    <div className="quiz-page">
      <form onSubmit={handleSubmit}>
        <div className="quiz">
          <label className="quiz__label">
            What type of skin do you have?
            <div className="quiz__flex">
              <div
                className={`quiz__option ${
                  type === "oily" ? "quiz__option--active" : ""
                }`}
                onClick={() => {
                  setType(type === "oily" ? "" : "oily");
                }}
              >
                Oily
              </div>

              <div
                className={`quiz__option ${
                  type === "dry" ? "quiz__option--active" : ""
                }`}
                onClick={() => setType(type === "dry" ? "" : "dry")}
              >
                Dry
              </div>

              <div
                className={`quiz__option ${
                  type === "acne" ? "quiz__option--active" : ""
                }`}
                onClick={() => setType(type === "acne" ? "" : "acne")}
              >
                Acne Prone
              </div>

              <div
                className={`quiz__option ${
                  type === "sensitive" ? "quiz__option--active" : ""
                }`}
                onClick={() => setType(type === "sensitive" ? "" : "sensitive")}
              >
                Sensitive
              </div>

              <div
                className={`quiz__option ${
                  type === "normal" ? "quiz__option--active" : ""
                }`}
                onClick={() => setType(type === "normal" ? "" : "normal")}
              >
                Normal/ Combo
              </div>
            </div>
          </label>

          <label>
            What is your main skin concern?
            <div className="quiz__flex">
              <div
                className={`quiz__option ${
                  concern === "Acne" ? "quiz__option--active" : ""
                }`}
                onClick={() => setConcern(concern === "Acne" ? "" : "Acne")}
              >
                Acne
              </div>
              <div
                className={`quiz__option ${
                  concern === "Oiliness" ? "quiz__option--active" : ""
                }`}
                onClick={() =>
                  setConcern(concern === "Oiliness" ? "" : "Oiliness")
                }
              >
                Excess Oils
              </div>
              <div
                className={`quiz__option ${
                  concern === "Dryness" ? "quiz__option--active" : ""
                }`}
                onClick={() =>
                  setConcern(concern === "Dryness" ? "" : "Dryness")
                }
              >
                Dryness
              </div>
              <div
                className={`quiz__option ${
                  concern === "Anti-Aging" ? "quiz__option--active" : ""
                }`}
                onClick={() =>
                  setConcern(concern === "Anti-Aging" ? "" : "Anti-Aging")
                }
              >
                Anti-Aging
              </div>
            </div>
          </label>
        </div>
        <button className="quiz__button">Get routine</button>
        {error && <div className="quiz__error">{error}</div>}
      </form>
    </div>
  );
}
