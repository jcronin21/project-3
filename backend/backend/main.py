from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.get("/api/v1/hello")
async def root():
    return {"message": "Hello World"}

@app.get("/")
async def get_index():
    with open("index.html") as f:
        html_content = f.read()
    return HTMLResponse(content=html_content, status_code=200)
