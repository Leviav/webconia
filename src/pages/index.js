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
    { name: 'Paris', description: 'The city of light.', image: '/images/paris.jpg' },
    { name: 'New York', description: 'The city that never sleeps.', image: '/images/newyork.jpg' },
  ];

  const tours = [
    { id: 1, name: 'Eiffel Tower Tour', description: 'Visit the Eiffel Tower.', image: '/images/eiffel.jpg' },
    { id: 2, name: 'Statue of Liberty Tour', description: 'Visit the Statue of Liberty.', image: '/images/statueofliberty.jpg' },
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
