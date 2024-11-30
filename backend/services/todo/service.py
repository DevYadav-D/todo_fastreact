from sqlalchemy.orm import Session
from fastapi import HTTPException
from sqlalchemy.exc import SQLAlchemyError
from db.todo.model import Todo
from datetime import date
import logging

def create_todo(db:Session, description:str, todo_date: date):
    try:
        new_todo = Todo(
            description = description,
            todo_date = todo_date
        )
        db.add(new_todo)
        db.commit()
        db.refresh(new_todo)
        return new_todo
    except SQLAlchemyError as e:
        db.rollback()
        logging.error(f'error creating todo: {e}')
        raise HTTPException(status_code=500, detail=str(e))


def get_all_todos(db:Session):
    return db.query(Todo).all()

def get_todo(db: Session, todo_id:int):
    try:
        todo = db.query(Todo).filter(Todo.id==todo_id).first()
        if not todo:
            raise HTTPException(status_code=404, detail="Todo not found")
        return todo
    except SQLAlchemyError as e:
        logging.error(f'Error fetching todo: {e}')
        raise HTTPException(status_code=500, detail="Internal server error")
    
def update_todo(db:Session, todo_id:int, **kwargs):
    todo =  db.query(Todo).filter(Todo.id==todo_id).first()
    if todo:
        for key, value in kwargs.items():
            setattr(todo, key, value)
        db.commit()
        db.refresh(todo)
        return todo
    return None

def delete_todo(db:Session, todo_id:int):
    try:
        todo = db.query(Todo).filter(Todo.id==todo_id).first()
        if not todo:
            raise HTTPException(status_code=404, detail="Todo not found")
        db.delete(todo)
        db.commit()
        return {"detail":"To do deleted"}
    except SQLAlchemyError as e:
        db.rollback()
        logging.error(f'Error deleting todo: {e}')
        raise HTTPException(status_code=500, detail="Internal server error")
