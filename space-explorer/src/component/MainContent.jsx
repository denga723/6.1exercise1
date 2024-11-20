import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import Planet from "./components/Planet";

function App() {
  return (
    <div className="App">
      <Navbar items={["Home", "Gallery", "About"]} />
      <Planet />
      <MainContent />
      <Footer />
    </div>
  );
}

const MainContent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="content">
      {data.map((item, index) => (
        <Card
          key={index}
          image={item.url}
          title={item.title}
          description={item.explanation}
        />
      ))}
    </div>
  );
};

export default MainContent;
