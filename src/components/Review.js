export default function Review({ review }) {
    return (
      <div className="review">
        <h4>{review.user}</h4>
        <p>{review.comment}</p>
        <div className="rating">
          {Array(review.rating).fill().map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
        <style jsx>{`
          .review {
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 10px;
            background: #fff;
          }
          .rating span {
            color: #ffc107;
          }
          h4 {
            margin: 0 0 10px 0;
            color: #333;
          }
          p {
            color: #666;
          }
        `}</style>
      </div>
    );
  }
  