import TodoList from "./components/todo/toDoList";
import GetToDo from "./components/todo/getToDo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";

function App() {
  return (
    
    <Router>
      <h1>Welcome to first page</h1>
      <h2><TodoList /></h2>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* <Route path="/todos/:toDoId" element={<GetToDo />} /> */}
      </Routes>
      {/* <GetToDo/> */}
    </Router>
  );
}

export default App;
