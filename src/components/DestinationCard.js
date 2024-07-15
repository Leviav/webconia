export default function DestinationCard({ destination }) {
    return (
      <div className="card">
        <img src={destination.image} alt={destination.name} />
        <h3>{destination.name}</h3>
        <p>{destination.description}</p>
        <style jsx>{`
          .card {
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
          }
          img {
            width: 100%;
            height: auto;
            border-radius: 8px;
          }
          @media (max-width: 768px) {
            .card {
              padding: 10px;
            }
          }
        `}</style>
      </div>
    );
  }
  