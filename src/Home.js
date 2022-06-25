import { useState } from "react";

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
  ]);

  return (
    <div className="home">
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

export default Home;
