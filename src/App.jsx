import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import ResultPage from "./pages/ResultPage/ResultPage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";
import { useState } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  const [likedProducts, setLikedProducts] = useState([]);

  const updateLikedStatus = (productId, liked) => {
    setLikedProducts((prev) =>
      liked ? [...prev, productId] : prev.filter((id) => id !== productId)
    );
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/quiz" element={<QuizPage />}></Route>
        <Route
          path="/products"
          element={<ProductsPage updateLikedStatus={updateLikedStatus} />}
        ></Route>
        <Route path="/results/:concern" element={<ResultPage />}></Route>
        <Route
          path="/my-products"
          element={<FavouritesPage updateLikedStatus={updateLikedStatus} />}
        ></Route>
        {/* make not found page */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
