import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function HotelReservations() {
  return (
    <div>
      <Navbar />
      <main className="container">
        <h1>Reservas de Hotel</h1>
        <p>Detalles sobre nuestras reservas de hotel...</p>
      </main>
      <Footer />
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          width: 100%;
          max-width: 1200px;
        }
      `}</style>
    </div>
  );
}

