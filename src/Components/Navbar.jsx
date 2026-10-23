import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-indigo-950 text-white px-8 py-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold">ShopEase</h1>

      <div className="flex gap-6">
        <Link
          to="/"
          className="hover:text-yellow-300 cursor-pointer"
        >
          Home
        </Link>

        <Link
          to="/orders/current"
          className="hover:text-yellow-300 cursor-pointer"
        >
          Orders
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;