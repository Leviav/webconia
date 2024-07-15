import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Review from '../../components/Review';

const tours = {
  1: {
    name: 'Isla Larga',
    description: 'Visita esta maravillosa isla del caribe',
    image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTua044lVfZmy5YECcBoqHmV6GCUNj5InWcPxsShdPXd5I3H_jUAWLy-RaFZLaFM5qGH83HrHFu_SsxXxdzWja-iLZvilkjrdcJeOtNLg',
    itinerary: 'Salida desde Bejuma, viaja directo, con toda la logistica preparada para llegar hasta isla larga',
    price: '$50',
    duration: '12 horas, salida 6:00am llegada 6:00pm',
    reviews: [
        { user: 'Dorenis', comment: "A mi que me encanta viajar y siempre ando buscando en que peligro meterme, recomiendo a esta gente", rating: 5 },
        { user: 'Mateo', comment: 'Me gusta ir pero mas me gusta jugar maincraft', rating: 2 },
      ]
  },
  2: {
    name: 'Colonia tovar',
    description: 'Visita este maravilloso lugar lleno de fresas con crema',
    image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*6KVk7wsU5ENn8HbYAXA2TQ.jpeg',
    itinerary: 'salida desde Bejuma, parada en valencia, desayuno, parada para refrescar y paseo por los sitios emblematicos de la Colinia Tovar',
    price: '$80',
    duration: '18 horas',
    reviews: [
        { user: 'Levi', comment: 'Antes tenia que manejar todo el camino, pero ahora me pagan por hacerlo', rating: 5 },
        { user: 'Dora', comment: 'Ay tan bello mi niño chiquitico', rating: 5 },
      ]
  }
};

export default function TourDetail() {
  const router = useRouter();
  const { id } = router.query;
  const tour = tours[id];

  if (!tour) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar />
      <main>
        <div className="tour-detail">
          <img src={tour.image} alt={tour.name} />
          <h1>{tour.name}</h1>
          <p>{tour.description}</p>
          <p><strong>Itinerario:</strong> {tour.itinerary}</p>
          <p><strong>Costo:</strong> {tour.price}</p>
          <p><strong>Duracion:</strong> {tour.duration}</p>
          <section className="reviews">
            <h2>Opiniones</h2>
            {tour.reviews.map((review, index) => (
              <Review key={index} review={review} />
            ))}
          </section>
        </div>
      </main>
      <Footer />
      <style jsx>{`
        .tour-detail {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }
        img {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
        h1 {
          margin-top: 20px;
          color: #333;
        }
        p {
          color: #666;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
