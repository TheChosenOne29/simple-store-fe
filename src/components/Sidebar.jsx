import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white h-screen w-2/5 p-4">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <ul className="mb-2 space-y-2">
        <li>
          <Link to="/index" className="hover:text-blue-500 block">
            Daftar Produk
          </Link>
        </li>
        <li>
          <Link to="/edit" className="hover:text-blue-500 block">
            Edit Produk
          </Link>
        </li>
        <li>
          <Link to="/create" className="hover:text-blue-500 block">
            Tambah Produk
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
