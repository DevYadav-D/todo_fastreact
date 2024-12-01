import axios from "axios";
import { API_BASE_URL } from "../../config/todo/todoConfig";


export const getTodos = () => axios.get(`${API_BASE_URL}/todos`);
export const getTodobyId = (id) => axios.get(`${API_BASE_URL}/todos/${id}`);
export const createTodo = (data) => axios.post(`${API_BASE_URL}/todos`, data);
export const updateTodobyId = (id, data) => axios.put(`${API_BASE_URL}/todos/${id}`, data);
export const deleteTodobyId = (id) => axios.delete(`${API_BASE_URL}/todos/${id}`);
