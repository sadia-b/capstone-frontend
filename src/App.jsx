import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import ResultPage from "./pages/ResultPage/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/quiz" element={<QuizPage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/results/:concern" element={<ResultPage />}></Route>
        {/* make not found page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
