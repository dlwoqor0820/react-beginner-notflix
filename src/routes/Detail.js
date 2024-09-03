import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../components/Details";

const Detail = () => {
  const { id } = useParams();
  const [details, setDetail] = useState({});

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div key={id}>
      <Details
        coverImg={details.medium_cover_image}
        title={details.title}
        description={details.description_full}
        genres={details.genres}
        rating={details.rating}
        runtime={details.runtime}
      />
    </div>
  );
};

export default Detail;
