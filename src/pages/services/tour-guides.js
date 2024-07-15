import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function TourGuides() {
  return (
    <div className = "container">
      <Navbar />
      <h1>Tours Guiados</h1>
      <p>Detalles sobre nuestros tours guiados...</p>
      <Footer />
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
        }
      `}</style>
    </div>
  );
}
