from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from api.todo.dependencies import get_db
from services.todo.service import create_todo, get_all_todos, update_todo, delete_todo, get_todo
from schemas.todo.schema import Todo, Todo_create, Todo_update

router = APIRouter()

@router.post("/", response_model=Todo)
def create_todo_endpoint(todo: Todo_create, db:Session=Depends(get_db)):
    return create_todo(db, **todo.model_dump())

@router.get("/", response_model=list[Todo])
def get_all_todo_endpoint(db:Session=Depends(get_db)):
    return get_all_todos(db)

@router.get("/{todo_id}", response_model=Todo)
def get_todo_endpoint(todo_id: int, db:Session=Depends(get_db)):
    return get_todo(db, todo_id)

@router.put("/{todo_id}", response_model=Todo)
def update_todo_endpoint(todo_id: int, todo:Todo_update, db:Session=Depends(get_db)):
    updated_todo = update_todo(db, todo_id, **todo.model_dump(exclude_unset=True))
    if not updated_todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    return updated_todo

@router.delete("/{todo_id}", response_model=Todo)
def delete_todo_endpoint(todo_id: int, db:Session=Depends(get_db)):
    if not delete_todo(db, todo_id):
        raise HTTPException(status_code=404, detail= "Todo is not in the list")
    return {"detail": "Todo deleted"}