from fastapi import FastAPI
from models import Todo

app = FastAPI()

@app.get("/")
async def root():
    return {"message":"hello"}

todos = []

#get all todos
@app.get("/todos")
async def get_todos():
    return {"todos":todos}

#get single todos
@app.get("/todos/{todo_id}")
async def get_todo(todo_id: int):
    for todo in todos:
        if todo.id == todo_id:
            return {"todo": todo}
    return {"No todos item found"}

#create a todo
@app.post("/todos")
async def create_todos(todo: Todo):
    todos.append(todo)
    return {"todos": "Todo has been added"}

#update a todo
@app.put("/todos/{todo_id}")
async def update_todo(todo_id: int, todo_obj:Todo):
    for todo in todos:
        if todo.id == todo_id:
            todo.id = todo_id 
            todo.item = todo_obj.item
            return {"todo":todo}
    return {"message": "not found todos"}

#delete a todo
@app.delete("/todos/{todo_id}")
async def delete_todo(todo_id: int):
    for todo in todos:
        if todo.id == todo_id:
            todos.remove(todo)
            return {"successfully removed"}
    return {"message": "No todo available"}