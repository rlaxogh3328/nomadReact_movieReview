import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <hr></hr>
      <img src={medium_cover_image} alt={title} />
      <div>
        <Link to={`/movie/${id}`}>{title}</Link>
      </div>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.propTyes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
