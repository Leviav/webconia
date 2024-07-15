import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import DestinationCard from '../components/DestinationCard';
import TourCard from '../components/TourCard';

export default function Home() {
  const [query, setQuery] = useState('');
  
  const destinations = [
    { name: 'Draculandia', description: 'Parque de locos', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zZtaDdhGA9PevZQeD5TPaGePwUyYzUYRZg&s' },
    { name: 'La casita de Dora', description: 'Comida gratis', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdVo_1B1rH0bHQn2EYBni8a-lEhT0v-T7Vww&s' },
  ];

  const tours = [
    { id: 1, name: 'Isla Larga', description: 'Visita Isla Larga', image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTua044lVfZmy5YECcBoqHmV6GCUNj5InWcPxsShdPXd5I3H_jUAWLy-RaFZLaFM5qGH83HrHFu_SsxXxdzWja-iLZvilkjrdcJeOtNLg' },
    { id: 2, name: 'La colonia Tovar', description: 'Viaja con comodidad y confianza a este maravilloso lugar', image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*6KVk7wsU5ENn8HbYAXA2TQ.jpeg' },
  ];

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery.toLowerCase());
  };

  const filteredDestinations = destinations.filter(destination =>
    destination.name.toLowerCase().includes(query) || 
    destination.description.toLowerCase().includes(query)
  );

  const filteredTours = tours.filter(tour =>
    tour.name.toLowerCase().includes(query) || 
    tour.description.toLowerCase().includes(query)
  );

  return (
    <div>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <main>
        <section className="featured-destinations">
          <h2>Destinos Populares</h2>
          <div className="card-container">
            {filteredDestinations.map((destination, index) => (
              <DestinationCard key={index} destination={destination} />
            ))}
          </div>
        </section>
        <section className="recommended-tours">
          <h2>Tours Recomendados</h2>
          <div className="card-container">
            {filteredTours.map((tour, index) => (
              <Link href={`/tours/${tour.id}`} key={index}>
                <a>
                  <TourCard tour={tour} />
                </a>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        main {
          padding: 20px;
        }
        .featured-destinations, .recommended-tours {
          margin-bottom: 40px;
        }
        h2 {
          margin-bottom: 20px;
        }
        .card-container {
          display: flex;
          gap: 20px;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        @media (max-width: 768px) {
          .card-container {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}
