import React from "react";
import Planet from "./components/Planet";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Space Explorer</h1>
      <Planet />
      <Footer />
    </div>
  );
}

export default App;
