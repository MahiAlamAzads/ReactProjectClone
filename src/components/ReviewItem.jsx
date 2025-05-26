const ReviewItem = ({ name, rating, reviewText }) => {
  // Generate star icons based on rating (out of 5)
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= rating ? "text-warning" : "text-secondary"}>
        &#9733;
      </span>
    );
  }

  return (
    <div className="card mb-3 text-center rounded-4">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div>{stars}</div>
        <p className="card-text mt-3">{reviewText}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
