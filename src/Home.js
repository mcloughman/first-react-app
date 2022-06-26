import { useState, useEffect } from "react";
import HikeList from "./HikeList";

const Home = () => {
  const [hikes, setHikes] = useState(null);
  const [isPending, setIsPending] = useState(true);

  // be careful of changinging state inside useEffect, you could cause an infinite loop
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/hikes")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setHikes(data);
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
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
