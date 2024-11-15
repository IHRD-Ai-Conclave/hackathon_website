

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

# Build the Next.js application
RUN npm run build

# Use the latest Node.js Alpine image for the final stage
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app ./

# Install only production dependencies
RUN npm install --only=production

# Set the command to run the Next.js app in dev mode
CMD ["npm", "start" ]