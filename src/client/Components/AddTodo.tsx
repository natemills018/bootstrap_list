import React, { useEffect, useState } from "react";
import { GET, POST } from "../services/fetcher";
import { useNavigate } from "react-router-dom";

interface TodoProps {}

const AddTodo = (props: TodoProps) => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState("");

  useEffect(() => {});

  const handleButton = () => {
    const url = "/api/todos/";
    POST(url, { todo }).then((todo) => {
      console.log(todo);
    });

    alert("Thanks for your Feedback!");
  };


  console.log(todo);

  return <div>
    <div className="container mt-5">

        <section className="row justify-content-center">
            
            <div className="card-body">
                <h1 className="d-flex justify-content-center">
                    Add Your Todo Here!
                </h1>
            </div>


            <div className="d-flex justify-content-center">
              <input 
                className="m-2"
                placeholder="Type your Todo here!"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                />
            </div>



            <div className="d-flex justify-content-center m-2">
                <button className="rounded mx-4 bg-lightgray" onClick={handleButton}>
                    Click to Add Your Todo
                </button>
            </div>

        </section>


    </div>
  </div>;
};

export default AddTodo;
