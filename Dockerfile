# Use the latest Node.js image
FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Start the application in development mode with hot reloading
CMD ["npm", "run", "start:dev"]
