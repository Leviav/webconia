import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const handleSearch = (query) => {
    console.log(`Buscando: ${query}`);
    // Aquí puedes añadir lógica para manejar la búsqueda
  };

  return (
    <div>
      <Navbar />
      <h1>Bienvenidos a Trisqueltour</h1>
      <SearchBar onSearch={handleSearch} />
      <p>Descubre las mejores experiencias en nuestro país</p>
      <Footer />
    </div>
  );
}
