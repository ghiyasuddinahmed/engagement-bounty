# Docker Setup for Engagement Bounty

This document provides instructions for running the Engagement Bounty application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (optional, for easier management)

## Quick Start

### Option 1: Using Docker Compose (Recommended)

```bash
# Build and run the application
docker-compose up --build

# Run in background
docker-compose up -d --build

# Stop the application
docker-compose down
```

### Option 2: Using Docker Commands

```bash
# Build the image
docker build -t engagement-bounty .

# Run the container
docker run -d -p 3000:3000 --name engagement-bounty engagement-bounty

# Stop the container
docker stop engagement-bounty

# Remove the container
docker rm engagement-bounty
```

### Option 3: Using the Shell Script

```bash
# Make the script executable
chmod +x docker-run.sh

# Run the script
./docker-run.sh
```

## Accessing the Application

Once the container is running, the application will be available at:
- **Local**: http://localhost:3000
- **Programs Page**: http://localhost:3000/programs

## Container Management

### View Logs
```bash
# View real-time logs
docker logs -f engagement-bounty

# View recent logs
docker logs --tail 100 engagement-bounty
```

### Container Status
```bash
# Check container status
docker ps

# Check container health
docker inspect engagement-bounty | grep Health -A 10
```

### Stop and Remove
```bash
# Stop the container
docker stop engagement-bounty

# Remove the container
docker rm engagement-bounty

# Stop and remove in one command
docker rm -f engagement-bounty
```

## Docker Image Details

### Multi-Stage Build
The Dockerfile uses a multi-stage build approach:
1. **deps**: Installs production dependencies
2. **builder**: Builds the Next.js application
3. **runner**: Creates the final production image

### Security Features
- Runs as non-root user (`nextjs`)
- Uses Alpine Linux for smaller attack surface
- Minimal production dependencies

### Optimization
- Standalone output for smaller image size
- Output file tracing for optimal bundling
- Production-only dependencies

## Environment Variables

The following environment variables are set:
- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`
- `PORT=3000`
- `HOSTNAME=0.0.0.0`

## Health Checks

The container includes health checks that verify the application is running properly:
- Endpoint: `/api/health`
- Interval: 30 seconds
- Timeout: 10 seconds
- Retries: 3
- Start period: 40 seconds

## Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Check what's using port 3000
   lsof -i :3000
   
   # Use a different port
   docker run -d -p 3001:3000 --name engagement-bounty engagement-bounty
   ```

2. **Build fails**
   ```bash
   # Clean Docker cache
   docker system prune -a
   
   # Rebuild without cache
   docker build --no-cache -t engagement-bounty .
   ```

3. **Container won't start**
   ```bash   # Check container logs
   docker logs engagement-bounty
   
   # Check container details
   docker inspect engagement-bounty
   ```

### Performance Tuning

For production deployments, consider:
- Using Docker volumes for persistent data
- Setting memory and CPU limits
- Using Docker networks for service communication
- Implementing proper logging strategies

## Production Deployment

For production environments:
1. Use a reverse proxy (nginx, traefik)
2. Implement proper SSL/TLS
3. Set up monitoring and alerting
4. Use Docker secrets for sensitive data
5. Implement proper backup strategies

## Support

If you encounter issues:
1. Check the container logs
2. Verify Docker and Docker Compose versions
3. Ensure all prerequisites are met
4. Check the application logs for errors
