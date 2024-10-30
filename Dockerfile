# Use the official Python 3.10 image from the Docker Hub
FROM python:3.10-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file to the working directory
COPY requirements.txt .



# Upgrade pip
RUN pip install --upgrade pip




# Install the required packages
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code to the working directory
COPY . .

# Run database migrations (optional)
RUN python manage.py migrate

# Collect static files
RUN python manage.py collectstatic --noinput

# Expose the port the app runs on
EXPOSE 8000

# Start the application with Gunicorn
CMD ["gunicorn", "myproject.myproject.wsgi:application", "--bind", "0.0.0.0:8000"]

