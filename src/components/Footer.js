// src/components/Footer.js
export default function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Trisqueltour. Todos los derechos reservados.</p>
      <style jsx>{`
        footer {
          background: #333;
          color: white;
          text-align: center;
          padding: 1rem;
          position: relative;
          bottom: 0;
          width: 100%;
        }
      `}</style>
    </footer>
  );
}
