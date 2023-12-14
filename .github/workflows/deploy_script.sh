#!/bin/bash
# Navigate to your app directory
cd /path/to/your/app

# Pull the latest changes
git pull origin main

# Your deployment commands (e.g., Docker commands)
docker-compose down
docker-compose up -d --build
