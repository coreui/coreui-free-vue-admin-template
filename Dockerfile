# Use the official Node.js image as the base image
FROM node:22.2.0

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the Vue.js application for production
RUN npm run build

# Expose port 80
EXPOSE 80

# Define the command to run your application
CMD ["node", "start"]
