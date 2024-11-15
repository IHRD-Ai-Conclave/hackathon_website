

# Use the latest Node.js Alpine image as the base for building
FROM node:alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if present)
COPY package.json package-lock.json ./

# Install all dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

CMD ["npm","run","dev"]