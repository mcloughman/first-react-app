import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <h5>That Page Cannot Be Found</h5>
      <Link to="/">Back to Home Page...</Link>
    </div>
  );
};

export default NotFound;
