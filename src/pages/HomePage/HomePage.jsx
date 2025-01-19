/* eslint-disable react/no-unescaped-entities */
import "./HomePage.scss";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home">
      <section className="hero">
        <img
          className="hero__image"
          src="src\assets\images\hero.jpg"
          alt="skincare image"
        />
        <div className="hero__description">
          <p className="hero__text">
            Discover your perfect skincare routine with ease! Our website is
            designed to create personalized skincare plans tailored to your
            unique needs. Whether you're looking to combat acne, hydrate dry
            skin, or achieve that radiant glow, we’ve got you covered. Say
            goodbye to guesswork and hello to healthy, confident skin!
          </p>
          <Link to="/quiz">
            <button className="hero__button">Take quiz here!</button>
          </Link>
        </div>
      </section>
      <section className="section">
        <h5 className="section__heading">
          Take a skincare quiz to find your specialized skincare routine,
          without any hassle. To view all products, go to the{" "}
          <span className="section__bold-text">Products </span> page. Every
          product that you like you can save and they can be seen under{" "}
          <span className="section__bold-text">My Products.</span>
        </h5>
      </section>
    </div>
  );
}
