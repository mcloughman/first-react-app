const BlogList = ({ hikes, title }) => {
  return (
    <div className="hike-list">
      <h1>{title}</h1>
      {hikes.map((hike) => {
        return (
          <div className="hike-preview" key={hike.id}>
            <h2>{hike.title}</h2>
            <p>{hike.body.substring(0, 100)}...</p>
            <p>
              Author:{" "}
              <i>
                <b>{hike.author}</b>
              </i>
            </p>
            <img src={hike.photo} style={{ width: "400px" }} alt={hike.title} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
