import ApiService from "../apiServices";

export const fetchTodos = async() => {
    return ApiService.get("/todos");
};

export const fetchTodoById = async(id) => {
    return ApiService.get(`/todos/${id}`);
};

export const createNewTodo = async(data) => {
    return ApiService.post("/todos", data);
};

export const updateTodo = async(id, data) => {
    return ApiService.put(`/todos/${id}`, data);
};

export const deleteTodo = async(id) => {
    return ApiService.delete(`/todos/${id}`);
};
