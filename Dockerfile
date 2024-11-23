# Step 1: Build the React App
FROM node:alpine3.19 as build
WORKDIR /app 
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Step 2: Server With Nginx
FROM nginx:alpine3.19
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]