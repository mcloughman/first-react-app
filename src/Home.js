import { useState, useEffect } from "react";
import HikeList from "./HikeList";

const Home = () => {
  const [hikes, setHikes] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // be careful of changinging state inside useEffect, you could cause an infinite loop
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/hikes")
        .then((response) => {
          if (!response.ok) {
            throw Error("OH NO ERROR!!!");
          }
          return response.json();
        })
        .then((data) => {
          setIsPending(false);
          setHikes(data);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}

      {isPending && <div>Loading...</div>}
      {hikes && <HikeList hikes={hikes} title="All Hikes" />}
      {/* Below is how you would filter the hike list using filter
      <HikeList
        hikes={hikes.filter((hike) => hike.author === "Jeffery")}
        title="Jeffery's Blogs"
      />
      */}
    </div>
  );
};

export default Home;
