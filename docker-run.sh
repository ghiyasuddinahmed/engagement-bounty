#!/bin/bash

# Docker run script for Next.js application

echo "🚀 Building and running Next.js application with Docker..."

# Build the Docker image
echo "📦 Building Docker image..."
docker build -t engagement-bounty .

# Stop and remove existing container if it exists
echo "🛑 Stopping existing container..."
docker stop engagement-bounty 2>/dev/null || true
docker rm engagement-bounty 2>/dev/null || true

# Run the container
echo "🏃 Running container..."
docker run -d \
  --name engagement-bounty \
  -p 3000:3000 \
  --restart unless-stopped \
  engagement-bounty

echo "✅ Container is running!"
echo "🌐 Application available at: http://localhost:3000"
echo "📊 View logs with: docker logs -f engagement-bounty"
echo "🛑 Stop with: docker stop engagement-bounty"
