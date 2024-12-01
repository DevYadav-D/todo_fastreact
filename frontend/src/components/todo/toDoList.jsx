import React from "react";
import useFetch from "../../hooks/useFetch";

function TodoList() {
    const { data: items, error, loading } = useFetch('/todos');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>{item.description}</div>
            ))}
        </div>
    );
}

export default TodoList;


// import React, {useState, useEffect} from "react";
// import axios from "axios";

// function TodoList() {
//     const [items, setItems]= useState(null);

//     useEffect(()=>{
//         axios.get('http://localhost:8000/todos')
//         .then((res)=> setItems(res.data))
//         .catch((error)=> console.error("Error fetching data:", error))
//     }, []);
//     if (items === null) {
//         console.log('Items are still null.'); 
//         return <div>Loading...</div>; 
//     } 
//     if (items === undefined) { 
//         console.log('Items are undefined.'); 
//         return <div>Error: items are undefined.</div>; 
//     } 
//     console.log('Items before map:', items); 
//     return ( 
//         <div> 
//             {items.map((item) => (
//                 <div key={item.id}>{item.description}
//                 </div> 
//                 ))} 
//         </div>
//     );
// }

// export default TodoList;
