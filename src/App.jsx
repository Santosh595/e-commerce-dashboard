import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OrdersListPage from "./pages/OrdersListPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/orderlist" element={<OrdersListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
