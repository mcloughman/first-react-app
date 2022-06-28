import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const HikeDetails = () => {
  const { id } = useParams();
  const {
    data: hike,
    isPending,
    error,
  } = useFetch("http://localhost:8000/hikes/" + id);

  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/hikes/" + hike.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

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
          <button onClick={handleClick}>Delete Hike</button>
        </article>
      )}
    </div>
  );
};

export default HikeDetails;
