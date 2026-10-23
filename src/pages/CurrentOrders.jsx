function CurrentOrders() {
  const orders = [
    { id: 101, name: "Wireless Headphones", status: "Shipped" },
    { id: 102, name: "Smart Watch", status: "Processing" },
    { id: 103, name: "Laptop Bag", status: "Out for Delivery" },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-blue-700 mb-5">
        🚚 Current Orders
      </h3>

      <div className="grid gap-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex justify-between items-center border border-blue-100 bg-blue-50 p-4 rounded-xl"
          >
            <div>
              <p className="font-bold text-gray-800">{order.name}</p>
              <p className="text-sm text-gray-500">Order #{order.id}</p>
            </div>

            <span className="bg-blue-600 text-white px-3 py-2 rounded-full text-sm">
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentOrders;