
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Orders from "./pages/Orders";
import CurrentOrders from "./pages/CurrentOrders";
import OrderHistory from "./pages/OrderHistory";
import CancelledOrders from "./pages/CancelledOrders";

function App() {
  return (
    <BrowserRouter>
      <h1>E-commerce Application</h1>

      <Link to="/orders">Orders</Link>

      <Routes>
        <Route path="/orders" element={<Orders />}>
          <Route index element={<CurrentOrders />} />
          <Route path="current" element={<CurrentOrders />} />
          <Route path="history" element={<OrderHistory />} />
          <Route path="cancelled" element={<CancelledOrders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
