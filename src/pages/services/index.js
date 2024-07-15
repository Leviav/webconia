import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Services() {
  return (
    <div>
      <Navbar />
      <main className="container">
        <h1>Servicios</h1>
        <div className="services-grid">
          <div className="service-item">
            <img src="/images/custom-packages.jpg" alt="Paquetes Personalizados" />
            <h2><a href="/services/custom-packages">Paquetes Personalizados</a></h2>
          </div>
          <div className="service-item">
            <img src="/images/tour-guides.jpg" alt="Tours Guiados" />
            <h2><a href="/services/tour-guides">Tours Guiados</a></h2>
          </div>
          <div className="service-item">
            <img src="/images/hotel-reservations.jpg" alt="Reservas de Hotel" />
            <h2><a href="/services/hotel-reservations">Reservas de Hotel</a></h2>
          </div>
          <div className="service-item">
            <img src="/images/private-transport.jpg" alt="Transporte Privado" />
            <h2><a href="/services/private-transport">Transporte Privado</a></h2>
          </div>
        </div>
    </main>
      <Footer />
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          width: 100%;
          max-width: 1200px;
          box-sizing: border-box;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          width: 100%;
        }
        .service-item {
          background: #f4f4f4;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          transition: background 0.3s;
        }
        .service-item img {
          width: 100%;
          height: auto;
          border-radius: 10px;
          margin-bottom: 10px;
        }
        .service-item:hover {
          background: #e0e0e0;
        }
        a {
          text-decoration: none;
          color: #333;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
