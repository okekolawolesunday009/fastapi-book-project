# Use an official lightweight Python image as the base
FROM python:3.8-slim

# Set the working directory inside the container
WORKDIR app

# Copy only necessary files first (for better caching)
COPY requirements.txt .

# Install FastAPI and other dependencies
RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY . .

# Expose the FastAPI port (default is 8000)
EXPOSE 8000

# Set the FastAPI entry point using uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

