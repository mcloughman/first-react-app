import { Link } from "react-router-dom";

const HikeList = ({ hikes, title }) => {
  return (
    <div className="hike-list">
      <h1 id="hike-title">{title}</h1>
      {hikes.map((hike) => {
        return (
          <div className="hike-preview" key={hike.id}>
            <Link to={`hikes/${hike.id}`}>
              <h2>{hike.title}</h2>
              <p>{hike.body.substring(0, 100)}...</p>
              <p>
                Author:{" "}
                <i>
                  <b>{hike.author}</b>
                </i>
              </p>
              <img
                src={hike.photo}
                style={{ width: "400px" }}
                alt={hike.title}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default HikeList;
