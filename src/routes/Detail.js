import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        );
        const json = await response.json();
        setMovie(json);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    // clean-up function
    return () => {};
  }, []);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        height: "100vh", // 화면 높이의 100%로 설정
      }}
    >
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${movie.data.movie.background_image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.5,
              zIndex: -1,
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
            }}
          >
            <div>
              <h1>{movie.data.movie.title}</h1>
              <h2 style={{ padding: 30, textAlign: "left" }}>
                {movie.data.movie.rating} / 10
              </h2>
            </div>
            <hr />
            <img
              src={movie.data.movie.medium_cover_image}
              alt={movie.data.movie.title}
            />
            <p>{movie.data.movie.description_intro}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
