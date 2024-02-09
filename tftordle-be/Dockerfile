FROM python

RUN mkdir /app

WORKDIR /app

COPY . /app/

RUN pip install -r requirements.txt

EXPOSE 3000

CMD ["python", "/app/src/app.py"]