import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Hiking Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Add New Hike</Link>
      </div>
    </nav>
  );
};

export default Navbar;
