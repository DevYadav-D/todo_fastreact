from sqlalchemy import Column, Integer, String, Date
from core.todo.database import Base

class Todo(Base):
    __tablename__ = "todos"

    id = Column(Integer, primary_key= True, index= True)
    description = Column(String, nullable=False)
    todo_date = Column(Date, nullable=False)

    def __repr__(self):
        return f'<Todo(id={self.id}, description={self.description}, date={self.date})>'