FROM python:3.9-slim

WORKDIR /app

# Install curl using apt-get (for Debian-based images)
RUN apt-get update && apt-get install -y curl

COPY . .

RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

EXPOSE 8000



