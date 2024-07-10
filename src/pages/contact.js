// src/pages/contact.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <h1>Contacto</h1>
      <p>Ponte en contacto con nosotros a través de los siguientes medios:</p>
      <ul>
        <li>Email: contacto@trisqueltour.com</li>
        <li>Teléfono: +123 456 7890</li>
        <li>Dirección: Calle Falsa 123, Ciudad, País</li>
      </ul>
      <Footer />
    </div>
  );
}
