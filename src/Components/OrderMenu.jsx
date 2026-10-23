import { NavLink } from "react-router-dom";

function OrderMenu() {
  const linkStyle = ({ isActive }) =>
    `px-5 py-3 rounded-xl font-semibold transition ${
      isActive
        ? "bg-indigo-600 text-white shadow-md"
        : "bg-gray-100 text-gray-600 hover:bg-indigo-100"
    }`;

  return (
    <div className="flex flex-wrap gap-3 border-b pb-5">
      <NavLink to="/orders/current" className={linkStyle}>
        🚚 Current Orders
      </NavLink>

      <NavLink to="/orders/history" className={linkStyle}>
        📋 Order History
      </NavLink>

      <NavLink to="/orders/cancelled" className={linkStyle}>
        ❌ Cancelled Orders
      </NavLink>
    </div>
  );
}

export default OrderMenu;