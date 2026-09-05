# Use an official lightweight Node.js image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy dependency files first (better build caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# App listens on port 3000
EXPOSE 3000

# Command to run the app
CMD ["node", "app.js"]
