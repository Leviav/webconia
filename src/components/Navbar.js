import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link href="/"><a>Trisqueltour</a></Link>
      </div>
      <ul>
        <li><Link href="/" legacyBehavior><a>Inicio</a></Link></li>
        <li><Link href="/about" legacyBehavior><a>Acerca de</a></Link></li>
        <li><Link href="/contact" legacyBehavior><a>Contacto</a></Link></li>
        <li><Link href="/services" legacyBehavior><a>Servicios</a></Link></li>
        <li><Link href="/blog" legacyBehavior><a>Blog</a></Link></li>
      </ul>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #333;
          padding: 1rem;
          width: 100%;
          box-sizing: border-box;
        }
        .logo a {
          font-size: 1.5rem;
          color: white;
          text-decoration: none;
        }
        ul {
          list-style: none;
          display: flex;
          gap: 1rem;
          margin: 0;
          padding: 0;
       li {
          margin: 0;
        }
        a {
          color: white;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        @media (max-width: 768px) {
          nav {
            flex-direction: column;
          }
          ul {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </nav>
  );
}
