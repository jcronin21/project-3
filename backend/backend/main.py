from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse

app = FastAPI()

app.mount("/", StaticFiles(directory="ui/dist", html=True), name="ui")

@app.get("/api/v1/hello")
async def root():
    return {"message": "Hello World"}

@app.get("/film/{id}",response_class=HTMLResponse)
async def film(id:int):
    with open("ui/dist/film.html")as file:
        return file.read()