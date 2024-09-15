import React from "react";
import RandomImageCard from "../Components/Todo_Card";

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center align-items-center vh-100">
        Quoute of the day!
        <RandomImageCard />
      </div>
    </div>
  );
};

export default Home;
