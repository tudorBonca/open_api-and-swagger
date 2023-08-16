from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class Book(BaseModel):
    id: int
    name: str
    author: str
    genre: str


book = Book(id =0, name="Book", author="BookMan", genre="fixtion")


@app.get("/book")
def get_book():
    return {"book": book}


@app.post("/book")
def save_book(new_book: Book):
    return {"new_book": new_book}
