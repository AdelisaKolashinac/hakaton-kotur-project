const RecommendationCard = () => {
  return (
    <div className="recommendation-card text-white mb-4">
      <h5 className="recommendation-card-title mb-3">Популарно</h5>

      <img
        src="./menu/recommendation-card-img.png"
        alt="Коктел"
        className="mb-3"
      />
      <p>Септември</p>
      <h2 className="recommendation-card-subtitle">
        Summer Cocktails and Mockatails
      </h2>
      <p className="recommendation-card-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam odit
        corporis eveniet eum et qui, debitis porro optio, nesciunt rerum aut
        illo, voluptates laboriosam necessitatibus? Eaque quibusdam ipsum atque,
        modi officia incidunt dolores, laboriosam quas excepturi ipsam
        voluptates beatae tempore.
      </p>
    </div>
  );
};

export default RecommendationCard;
