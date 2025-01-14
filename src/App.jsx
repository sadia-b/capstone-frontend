import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ProductsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
