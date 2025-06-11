FROM python:3.8-slim
WORKDIR /server
COPY dependiences.txt .
RUN pip install -r dependiences.txt
COPY src/ .
CMD ["python","./app.py"]