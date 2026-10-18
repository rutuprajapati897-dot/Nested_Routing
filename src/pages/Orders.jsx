
import { Link, Outlet } from "react-router-dom";

function Orders() {
  return (
    <div>
      <h2>E-commerce Order Management</h2>

      <nav>
        <Link to="current">Current Orders</Link>
        {" | "}
        <Link to="history">Order History</Link>
        {" | "}
        <Link to="cancelled">Cancelled Orders</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Orders;
