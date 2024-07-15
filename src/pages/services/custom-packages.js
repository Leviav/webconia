import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CustomPackages() {
  return (
    <div className="container">
      <Navbar />
      <h1>Paquetes Personalizados</h1>
      <p>Detalles sobre nuestros paquetes personalizados...</p>
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
