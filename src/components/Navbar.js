import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/" legacyBehavior><a>Inicio</a></Link></li>
        <li><Link href="/about" legacyBehavior><a>Acerca de</a></Link></li>
        <li><Link href="/contact" legacyBehavior><a>Contacto</a></Link></li>
        <li><Link href="/services" legacyBehavior><a>Servicios</a></Link></li>
        <li><Link href="/blog" legacyBehavior><a>Blog</a></Link></li>
      </ul>
      <style jsx>{`
        nav {
          background: #333;
          padding: 1rem;
        }
        ul {
          list-style: none;
          display: flex;
          gap: 1rem;
        }
        li {
          margin: 0;
        }
        a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
}
