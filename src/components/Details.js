import PropTypes from "prop-types";

const Details = ({ coverImg, title, description, genres, rating, runtime }) => {
  return (
    <div>
      <img src={coverImg}></img>
      <h1>{title}</h1>
      <ul>
        {genres
          ? genres.map((genre) => {
              return <li>{genre}</li>;
            })
          : null}
      </ul>
      <p>{description}</p>
      <div>Rating : {rating}</div>
      <div>Runtime : {runtime == 0 ? "정보가 없습니다" : runtime}</div>
    </div>
  );
};
``
Details.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
};

export default Details;
