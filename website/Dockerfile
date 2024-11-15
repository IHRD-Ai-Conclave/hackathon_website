# Use the official Node.js image as the base
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if present)
COPY package.json . 
COPY package-lock.json . 

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js application

# Set the command to run the Next.js app in production mode
CMD ["npm", "run","dev"]

