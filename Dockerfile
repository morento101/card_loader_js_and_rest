# pull official python image
FROM python:3.7.9-alpine

# set env vars
# no .pyc files
ENV PYTHONDONTWRITEBYTECODE 1
# no console log bufferizing
ENV PYTHONUNBUFFERED 1

# creating working dir
WORKDIR /code

# psycopg2 dependecies
RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev jpeg-dev zlib-dev

# upgrade pip and install requirements from .txt
COPY requirements.txt /code/
RUN pip install -r requirements.txt

# copy project to workdir
COPY . /code/