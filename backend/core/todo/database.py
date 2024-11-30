from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL = "sqlite:///./test.db"  

engine = create_engine(DATABASE_URL, echo=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def init_db():
    from db.todo.model import Todo
    Base.metadata.create_all(bind=engine)
    # Ensure session commit 
    with engine.begin() as connection: 
        Base.metadata.create_all(bind=connection)