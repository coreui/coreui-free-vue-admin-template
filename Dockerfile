# Use the official Node.js image as the base image
FROM node:5.0.0

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

# Use the official Nginx image to serve the Vue.js application
FROM nginx:alpine

# Copy the built files from the previous stage to the Nginx web directory
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
