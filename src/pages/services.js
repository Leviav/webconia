import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <div>
      <Navbar />
      <h1>Servicios</h1>
      <p>Ofrecemos una variedad de servicios para satisfacer tus necesidades turísticas:</p>
      <ul>
        <li>Tours guiados</li>
        <li>Reservas de hotel</li>
        <li>Transporte privado</li>
        <li>Paquetes personalizados</li>
      </ul>
      <Footer />
    </div>
  );
}
