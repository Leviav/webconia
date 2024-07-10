// src/pages/index.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Bienvenidos a Trisqueltour</h1>
      <p>Descubre las mejores experiencias en nuestro país</p>
      <Footer />
    </div>
  );
}
