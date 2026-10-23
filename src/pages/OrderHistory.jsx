function OrderHistory() {
  const orders = [
    { id: 201, name: "Bluetooth Speaker", price: "₹1,499" },
    { id: 202, name: "Running Shoes", price: "₹2,299" },
    { id: 203, name: "Travel Backpack", price: "₹1,799" },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-green-700 mb-5">
        ✅ Order History
      </h3>

      <div className="grid gap-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex justify-between items-center border border-green-100 bg-green-50 p-4 rounded-xl"
          >
            <div>
              <p className="font-bold text-gray-800">{order.name}</p>
              <p className="text-sm text-gray-500">Order #{order.id}</p>
            </div>

            <span className="text-green-700 font-bold">{order.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;