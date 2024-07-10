import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog() {
  return (
    <div>
      <Navbar />
      <h1>Blog</h1>
      <p>Lee nuestras últimas publicaciones sobre destinos turísticos y consejos de viaje:</p>
      <ul>
        <li><a href="/blog/post1">Post 1</a></li>
        <li><a href="/blog/post2">Post 2</a></li>
        <li><a href="/blog/post3">Post 3</a></li>
      </ul>
      <Footer />
    </div>
  );
}
