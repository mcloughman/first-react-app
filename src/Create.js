import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Michael");
  return (
    <div className="create">
      <form>
        <fieldset>
          <h2>Add a New Hike</h2>
          <label>Hike Title</label>
          <input
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
        </fieldset>
        <button class="add-btn">Add Hike</button>
      </form>
    </div>
  );
};

export default Create;
