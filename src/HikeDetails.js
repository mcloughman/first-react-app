import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const HikeDetails = () => {
  const { id } = useParams();
  const {
    data: hike,
    isPending,
    error,
  } = useFetch("http://localhost:8000/hikes/" + id);
  return (
    <div className="hike-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {hike && (
        <article>
          <h2>{hike.title}</h2>
          <p>Written by: {hike.author}</p>
          <img
            src={hike.photo}
            style={{ width: "500px" }}
            alt={`${hike.title}`}
          />
          <p>{hike.body}</p>
        </article>
      )}
    </div>
  );
};

export default HikeDetails;
