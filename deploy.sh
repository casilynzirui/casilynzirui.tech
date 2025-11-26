#!/bin/bash

# Build the static site
echo "Building static site..."
npm run build

# Check if out directory exists
if [ ! -d "out" ]; then
  echo "Error: out directory not found. Build failed."
  exit 1
fi

# Navigate to out directory
cd out

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
  echo "Initializing git repository..."
  git init
  git checkout -b main
fi

# Add all files
echo "Adding files..."
git add -A

# Commit changes
echo "Committing changes..."
git commit -m "Deploy static site to GitHub Pages"

# Add remote if it doesn't exist
if ! git remote | grep -q "origin"; then
  echo "Adding remote repository..."
  git remote add origin https://github.com/casilynzirui/casilynzirui.github.io.git
fi

# Push to GitHub Pages
echo "Pushing to GitHub Pages..."
git push -f origin main

echo "Deployment complete! Your site should be available at https://casilynzirui.github.io"

