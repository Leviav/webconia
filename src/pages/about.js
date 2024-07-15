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
      <p>En Trisqueltour, nuestra misión es ofrecer experiencias de viaje inolvidables que permitan a 
        nuestros clientes descubrir y disfrutar de las maravillas culturales, naturales e históricas de
         nuestro país. Nos comprometemos a brindar servicios de alta calidad, personalizados y accesibles, ad
         aptados a las necesidades y preferencias de cada viajero. A través de una atención al cliente excepcion
         al, nos esforzamos por ser la opción preferida para todos aquellos que buscan aventuras auténticas y enr
         iquecedoras. Trabajamos con pasión y dedicación para superar las expectativas de nuestros clientes y c
         ontribuir al desarrollo sostenible del turismo local.</p>
      <Footer />
    </div>
  );
}
