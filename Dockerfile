# Use the official Node.js 1.0.0 image as the base image
FROM vue:5.0.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 6000

# Command to run the application
CMD ["vue", "index.js"]
