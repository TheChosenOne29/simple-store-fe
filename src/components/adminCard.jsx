function AdminCard(props) {
  const { productName, productPrice, productDescription, onEditProduct } = props;

  const staticImageUrl = "https://via.placeholder.com/300"; // URL gambar statis

  const handleEditClick = () => {
    // Panggil fungsi onEditProduct untuk menampilkan formulir pengeditan produk
    onEditProduct({ productName, productPrice, productDescription });
  };

  return (
    <div className="max-w-xl rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-64 object-cover" src={staticImageUrl} alt={productName} />
      <div className="px-12 py-4">
        <div className="font-bold text-xl mb-2">{productName}</div>
        <p className="text-gray-700 text-base mb-2">Rp{productPrice}</p>
        {/* Tombol untuk mengedit produk */}
        <button onClick={handleEditClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Edit Produk
        </button>
      </div>
    </div>
  );
}

export default AdminCard;
