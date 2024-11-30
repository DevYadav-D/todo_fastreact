from pydantic import BaseModel
from datetime import date

class Todo_base(BaseModel):
    description: str
    todo_date: date

class Todo_create(Todo_base):
    pass

class Todo_update(Todo_base):
    pass

class Todo(Todo_base):
    id: int

    class Config:
        from_attribute = True  #orm_mode = True depricated from latest pydantic