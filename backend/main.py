from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse

app = FastAPI()

app.mount("/", StaticFiles(directory="ui/dist", html=True), name="ui")

@app.get("/api/v1/hello")
async def root():
    return {"message": "Hello World"}

@app.get("/film/{id}", response_class=HTMLResponse)
async def film(id: int):
    with open("ui/dist/film.html") as file:
        return file.read()


@app.get("/film/{id}",response_class=HTMLResponse)
async def film(id:int):
    with open("ui/dist/film.html")as file:
        return file.read()
    
   #if things were working correctly i would have something like this:

#db querying
#    @app.get("/api/v1/films")
# async def film():
#     sarah taught me a cool trick:
# simplify_ur_life = []
# simplified_life =  response.get(films)
#for simplified_life in simplify_ur_life:
# films_simple = {
# 'film':simplified_life.get('film'),
#'director':simplified_life.get('director'),
#etc...
#}
#etc...


#for deleting
    # @app.delete("/api/v1/film/{id...?}")
    #async def delete_film(name of film to delete):
    #film =  await model_.get(the film)
    # etc etc