function Card(props) {
  const { productName, productPrice, onAddToCart } = props;

  const staticImageUrl = "https://via.placeholder.com/300"; // URL gambar statis

  return (
    <div className="max-w-xl rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-64 object-cover" src={staticImageUrl} alt={productName} />
      <div className="px-12 py-4">
        <div className="font-bold text-xl mb-2">{productName}</div>
        <p className="text-gray-700 text-base mb-2">Rp{productPrice}</p>
        {/* Tombol untuk menambahkan produk ke keranjang */}
        <button onClick={() => onAddToCart({ productName, productPrice, imageSrc: staticImageUrl })} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Tambahkan ke Keranjang
        </button>
      </div>
    </div>
  );
}

export default Card;
