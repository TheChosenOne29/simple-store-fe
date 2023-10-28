import Edit from "../components/Edit";
import Sidebar from "../components/Sidebar";

function EditProduct() {
  return (
    <div className="flex">
      {/* Sidebar tetap di sebelah kiri */}
      <div className="fixed left-0 top-0 h-full w-auto bg-gray-800 text-white p-4">
        <Sidebar />
      </div>

      {/* Konten halaman berada di sebelah kanan, di tengah halaman */}
      <div className="flex-1 flex flex-col justify-center items-center my-8 mx-auto max-w-md p-4 rounded shadow-lg">
        <Edit />
      </div>
    </div>
  );
}

export default EditProduct;
