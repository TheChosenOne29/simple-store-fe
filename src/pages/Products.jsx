import Sidebar from "../components/Sidebar";
import AdminCard from "../components/adminCard";

function Products() {
  return (
    <div className="flex">
      {/* Sidebar tetap di sebelah kiri */}
      <div className="fixed left-0 top-0 h-full w-auto bg-gray-800 text-white p-4">
        <Sidebar />
      </div>

      {/* Konten halaman berada di sebelah kanan */}
      <div className="ml-1/4 p-4">
        {" "}
        {/* Menyesuaikan margin kiri agar tidak tertutup oleh Sidebar */}
        <AdminCard imageSrc="url_gambar_produk" productName="Nama Produk" productPrice="Harga Produk"/>
        {/* Konten lainnya */}
      </div>
    </div>
  );
}

export default Products;
