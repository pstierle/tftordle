Setup Local Database

- docker run -d --name tftordle -e POSTGRES_PASSWORD=postgres --publish 127.0.0.1:5432:5432/tcp postgres
- su - postgres
- createdb tftordle

Create Virutal Environment

- python -m venv venv

Activate Virutal Environment

- .\venv\Scripts\activate

Install Packages

- pip install -r requirements.txt

Run App

- flask --app src/app run --debug
