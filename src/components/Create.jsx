import { useState } from "react";

function Create() {
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("productName", formData.productName);
    formDataToSend.append("productPrice", formData.productPrice);

    // Lakukan sesuatu dengan formDataToSend, seperti mengirimnya ke backend API
    console.log("Data yang akan dikirim:", formDataToSend);
    // Reset formulir setelah pengiriman
    setFormData({
      productName: "",
      productPrice: "",
    });
  };

  return (
    <div className="container mx-auto mt-10 p-8">
      <h1 className="text-3xl font-bold mb-6">Tambah Produk Baru</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col items-start">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
            Nama Produk
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6 flex flex-col items-start">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productPrice">
            Harga Produk
          </label>
          <input
            type="number"
            id="productPrice"
            name="productPrice"
            value={formData.productPrice}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4 flex flex-col items-start">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productDescription">
            Deskripsi Produk
          </label>
          <textarea
            id="productDescription"
            name="productDescription"
            value={formData.productDescription}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32" // Sesuaikan ketinggian (height) sesuai kebutuhan
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Tambah Produk
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
