import React from "react";
import Announce from "../components/Announce";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
