import Card from "../components/Card";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center mt-20">
        <Card imageSrc="url_gambar_produk" productName="Nama Produk" productPrice="Harga Produk" />
        <Card imageSrc="url_gambar_produk" productName="Nama Produk" productPrice="Harga Produk" />
        <Card imageSrc="url_gambar_produk" productName="Nama Produk" productPrice="Harga Produk" />
        <Card imageSrc="url_gambar_produk" productName="Nama Produk" productPrice="Harga Produk" />
      </div>
    </div>
  );
}

export default Home;
