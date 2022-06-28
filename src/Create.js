import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Michael");
  const [photo, setPhoto] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const hike = { title, body, author, photo };
    setIsPending(true);
    fetch("http://localhost:8000/hikes", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(hike),
    }).then(() => {
      console.log("New Blog Added!");
      setIsPending(false);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Add a New Hike</h2>
          <label>Hike Title</label>
          <input
            style={{ height: "20px" }}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Hike Body: </label>
          <textarea
            rows="10"
            required
            value={body}
            style={{ textDecoration: "muted" }}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Hike Author</label>
          {/* Using select box isn't really necessary just to demonstrate how it would be done */}
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="michael">Michael</option>
            <option value="manuela">Manuela</option>
            <option value="jeffery">Jeffery</option>
          </select>
          <label id="img-label">Image Url</label>
          <input
            type="text"
            id="img-url"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </fieldset>
        {!isPending && <button className="add-btn">Add Hike</button>}
        {isPending && <button disabled>Adding hike...</button>}
      </form>
    </div>
  );
};

export default Create;
