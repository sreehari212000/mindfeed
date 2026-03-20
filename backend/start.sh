#!/bin/sh

echo "Waiting for Qdrant to be ready..."

sleep 5

echo "Initializing Qdrant..."
node qdrant/initializeQdrant.js

echo "Starting backend server..."
node server.js