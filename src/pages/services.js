import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <div>
      <Navbar />
      <h1>Servicios</h1>
      <p>Ofrecemos una variedad de servicios para satisfacer tus necesidades turísticas:</p>
      <ul>
        <li><a href="/services/tour-guides">Tours guiados</a></li>
        <li><a href="/services/hotel-reservations">Reservas de Hotel</a></li>
        <li><a href="/services/private-transport">Transporte Privado</a></li>
        <li><a href="/services/custom-packages">Paquetes Personalizados</a></li>
      </ul>
      <Footer />
    </div>
  );
}
