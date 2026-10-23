function CancelledOrders() {
  const orders = [
    { id: 301, name: "Gaming Mouse", reason: "Cancelled by customer" },
    { id: 302, name: "Phone Cover", reason: "Payment issue" },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-red-600 mb-5">
        ❌ Cancelled Orders
      </h3>

      <div className="grid gap-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-red-100 bg-red-50 p-4 rounded-xl"
          >
            <p className="font-bold text-gray-800">{order.name}</p>
            <p className="text-sm text-gray-500">Order #{order.id}</p>
            <p className="text-sm text-red-600 mt-2">{order.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CancelledOrders;