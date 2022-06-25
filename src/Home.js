import { useState } from "react";
import HikeList from "./HikeList";

const Home = () => {
  const [hikes, setHikes] = useState([
    {
      title: "Charleston Peak",
      body: "This hike can be done by way of a couple different routes. It can be done as an up and back route or a loop with cars placed about a mile apart. Most of the routes result in an approximately 17 mile round trip hike. While the hike is very strenuous. The effort is well worth it. The views from the peak and the gratification of getting it to the top make it all worthwhile. Given the altitude of the peak (11,900ft), it's best to make sure you're acclimated by doing some shorter hikes up there to prepare.",
      photo:
        "https://res.cloudinary.com/mrjiggyfly/image/upload/v1595530404/Charleston%20Peak/IMG_1092_jbpmhl.jpg",
      author: "Michael",
      id: 1,
    },
    {
      title: "Observation Point",
      body: "Spectacular hike located in Zion National Park. Unfortunately, for the time being, the normal 8.8 strenuous round trip hike that starts at Weeping Rock shuttle stop is closed due to the danger of potential rockfall. There's another way to get to the peak from East Rim trail. But the photos and the description included here are from the Weeping Rock trailhead. The first mile is extremely strenuous in the way of elevation gain. From there things level off for a while as you make your way into and through Echo Canyon which is very nice. From there the elevation gain picks back up and the never-ending switchbacks begin. It is in this section that the alternate way from East Rim Trail merges with the main trail. Finally, when the switchbacks do indeed end, there's a pleasnt 3/4 mile flat trail that takes you to the fabulous Observation Point!",
      photo:
        "https://res.cloudinary.com/mrjiggyfly/image/upload/v1595528565/Observation%20Point/IMG_4902_xga2iy.jpg",
      author: "Manuela",
      id: 2,
    },
    {
      title: "Terrace Canyon",
      body: "Another beautful hike that begins at the Pine Creek Trailhead inside the Scenic Red Rock Loop Drive. For about the first mile, this hike follows the exact same trail as Fern Canyon. But instead of going to the right of Mescalito, the shorter peak with the Red Cap, this route goes to the left. This hike is longer than Fern Canyon. There lots of class 2 & 3 boulder scrambling. And you really need to pay attention to the directions and or waypoints from Branch Whitney's book, Hiking Las Vegas. Even then it's easy to miss a turn or to end up in Gunsight Canyon instead of Terrace Canyon. So it's best to try and go with someone who has done it before. The canyon is beautiful, especially when there's seasonal water cascading down the terraces. Love to use the word 'cascading'.",
      photo:
        "https://res.cloudinary.com/mrjiggyfly/image/upload/v1595529070/Terrace%20Canyon/IMG_0227_vbahrd.jpg",
      author: "Jeffery",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newHikes = hikes.filter((hike) => hike.id !== id);
    setHikes(newHikes);
  };

  return (
    <div className="home">
      <HikeList hikes={hikes} title="All Hikes" handleDelete={handleDelete} />
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
