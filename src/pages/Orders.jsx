import { Outlet } from "react-router-dom";
import OrderMenu from "../Components/OrderMenu";

function Orders() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        📦 Order Management
      </h2>

      <p className="text-gray-500 mb-6">
        Manage and track all your orders in one place.
      </p>

      <OrderMenu />

      <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Orders;