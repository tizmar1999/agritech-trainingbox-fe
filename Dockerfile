# Stage 1: Build TypeScript
FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . . 

# Compile TypeScript to JavaScript
RUN npm run build

# Stage 2: Run the app with only dist & node_modules
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app ./
COPY --from=builder /app/package*.json ./
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]