import { useState, useEffect } from "react";
import HikeList from "./HikeList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: hikes,
    isPending,
    error,
  } = useFetch("http://localhost:8000/hikes");

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
