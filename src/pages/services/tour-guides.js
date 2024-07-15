import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function TourGuides() {
  return (
    <div>
      <Navbar />
      <main className="container">
        <h1>Tours Guiados</h1>
        <p>Detalles sobre nuestros tours guiados...</p>
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
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
