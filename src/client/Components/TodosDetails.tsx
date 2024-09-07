import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { GET } from "../services/fetcher";
import { TodoItem } from "../frontend_types";
interface TodoDetails {

}


const TodoDetails = (props: TodoDetails) => {
    const { id } = useParams();
    const [data, setData] = useState<TodoItem | null>(null)


    useEffect(() => {
        GET(`/api/Todos/${id}`).then(data => setData(data))
    }, [id])


    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                    <div className='col-12 col-md-6 card'>
                        <div className='card-body bg-light'>
                            <h2 className='card-title d-flex justify-content-center align-items-center'></h2>
                            <p className='card-title  d-flex justify-content-center text-dark align-items-center'><span className='text-decoration-underline'>{data?.name}</span> </p>
                            <div className="d-flex justify-content-center align-items-center">
                            <Link to={`/todos/${id}/update`} className='btn btn-outline btn-dark'>Update Todo</Link>
                            <Link to='/todos' className='btn btn-outline btn-primary mx-4'>Go Back to Todos</Link>
                            <Link to='/todos/new' className='btn btn-outline btn-dark'>Add Your Own!</Link>
                            </div>
                            
                        </div>
                    </div>
            </section>
        </main>
    )

}

export default TodoDetails;