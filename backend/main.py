from fastapi import FastAPI
import uvicorn
import logging

#todo start
from routers.todo.router import router as todo_router
from core.todo.database import init_db as todo_db_init
#todo end

# Configure logging 
logging.basicConfig(level=logging.INFO)

app = FastAPI()

@app.get("/")
def get():
    return {"hello":"here is it"}

#todo start
app.include_router(todo_router, prefix="/todos", tags=["todos"])
todo_db_init()
#todo end


if __name__=="__main__":
    uvicorn.run("main:app", reload=True)