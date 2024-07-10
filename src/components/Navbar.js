import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/about">
            Acerca de
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contacto
          </Link>
        </li>
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
