import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GET } from "../services/fetcher";
import { TodoItem } from "../frontend_types";
import { todo } from "node:test";
interface ListProps {}

const List = (props: ListProps) => {
  const [data, setData] = useState<TodoItem[]>([]);

  useEffect(() => {
    GET("/api/todos").then((data) => setData(data));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="text-primary text-center">
          {data.map((data) => (
            <div
              className="col-md-6 m-1 card"
              key={`book-${data._id}`}
            >
              <div className="card-body mx-1">
                <p>{data.name}</p>
                <div className="d-flex justify-content-center pb-3">
                  {/* <Link
                    to={`/books/${todo._id}`}
                    className="btn btn-md btn-dark"
                  >
                    Details
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
