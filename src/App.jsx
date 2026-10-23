import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import CurrentOrders from "./pages/CurrentOrders";
import OrderHistory from "./pages/OrderHistory";
import CancelledOrders from "./pages/CancelledOrders";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-100">
        <Navbar />

        <main className="max-w-6xl mx-auto p-5">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/orders" element={<Orders />}>
              <Route index element={<Navigate to="current" replace />} />
              <Route path="current" element={<CurrentOrders />} />
              <Route path="history" element={<OrderHistory />} />
              <Route path="cancelled" element={<CancelledOrders />} />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;