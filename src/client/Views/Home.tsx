import React from "react";
import RandomImageCard from "../Components/Todo_Card";
import DynamicBackground from "../Components/DynamicBackground";

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <div>
      <DynamicBackground />
      <div className="container mt-5">
        <div className="d-flex justify-content-center align-items-center vh-100"></div>
      </div>
    </div>
  );
};

export default Home;
