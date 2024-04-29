FROM python:latest

RUN apt-get update && \
    apt-get install -y nodejs npm && \
    npm install -g npm@latest

WORKDIR /app

COPY . /app

WORKDIR /app/backend

RUN pip install poetry
RUN poetry install

RUN npm install eslint@7.32.0 --force

CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]
