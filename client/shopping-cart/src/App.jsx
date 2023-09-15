import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import BillPage from "./pages/BillPage";
import CheckoutLayout from "./components/CheckoutLayout";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutLayout />}>
          <Route path="step-1" element={<CheckoutPage />} />
          <Route path="step-2" element={<BillPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
