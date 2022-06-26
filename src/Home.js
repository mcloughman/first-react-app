import { useState, useEffect } from "react";
import HikeList from "./HikeList";

const Home = () => {
  const [hikes, setHikes] = useState(null);

  // be careful of changinging state inside useEffect, you could cause an infinite loop
  useEffect(() => {
    fetch("http://localhost:8000/hikes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHikes(data);
      });
  }, []);

  return (
    <div className="home">
      {hikes && <HikeList hikes={hikes} title="All Hikes" />}
      {/*  Below is how you would filter the hike list using filter
      <HikeList
        hikes={hikes.filter((hike) => hike.author === "Jeffery")}
        title="Jeffery's Blogs"
      />
      */}
    </div>
  );
};

export default Home;
