import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function GetToDo() {
    const { todoId } = useParams();
    const { data: todo, error, loading } = useFetch(`/todos/${todoId}`);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
            <h2>To-Do Details</h2>
            <p>ID: {todo.id}</p>
            <p>Description: {todo.description}</p>
            <p>Date: {todo.todo_date}</p>
        </>
    );
}

export default GetToDo;



// import React, {useState, useEffect} from "react";
// import axios from "axios";
// import {useParams} from "react-router-dom";

// function GetToDo(){
//     const {toDoId} = useParams();
//     const[formData, setFormData]= useState({
//         todo:null, 
//         error:""
//     });
    
//     useEffect(()=> {
//         console.log(`fetching data for todoId: ${toDoId}`);
//         axios.get(`http://localhost:8000/todos/${toDoId}`)
//             .then((res)=> {
//                 console.log('Response data:', res.data);
//                 setFormData(prev => ({...prev, todo:res.data}));
//             })
//             .catch((error)=> {
//                 console.error("Error fetching data:", error);
//                 setFormData(prev => ({...prev, error:"Error fetching data"}));
//             });
//     }, [toDoId]);

//     if (formData.error) return <div>{formData.error}</div>
//     if (formData.todo===null) return <div>loading....</div>
    
//     return (
//         <>
//         <h2>To do details</h2>
//         <p>ID: {formData.todo.id}</p>
//         <p>Description:{formData.todo.description}</p>
//         <p>Date:{formData.todo.date}</p>
//         </>
//     );
// };

// export default GetToDo;