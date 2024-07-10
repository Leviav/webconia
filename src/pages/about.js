// src/pages/about.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Navbar /> 
      <h1>Acerca de Nosotros</h1>
      <p>Somos una empresa dedicada a proporcionar las mejores experiencias turísticas.</p>
      <p>Nuestra misión es ofrecer servicios de alta calidad que superen las expectativas de nuestros clientes.</p>
      <Footer />
    </div>
  );
}
