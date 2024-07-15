import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Review from '../../components/Review';

const tours = {
  1: {
    name: 'Eiffel Tower Tour',
    description: 'Visit the Eiffel Tower.',
    image: '/images/eiffel.jpg',
    itinerary: 'Start at the base, go to the top, enjoy the view.',
    price: '$50',
    duration: '2 hours',
    reviews: [
        { user: 'Alice', comment: 'Amazing tour!', rating: 5 },
        { user: 'Bob', comment: 'Great experience!', rating: 4 },
      ]
  },
  2: {
    name: 'Statue of Liberty Tour',
    description: 'Visit the Statue of Liberty.',
    image: '/images/statueofliberty.jpg',
    itinerary: 'Ferry ride, statue visit, museum tour.',
    price: '$30',
    duration: '3 hours',
    reviews: [
        { user: 'Charlie', comment: 'Loved it!', rating: 5 },
        { user: 'David', comment: 'Very informative.', rating: 4 },
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
          <p><strong>Itinerary:</strong> {tour.itinerary}</p>
          <p><strong>Price:</strong> {tour.price}</p>
          <p><strong>Duration:</strong> {tour.duration}</p>
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
