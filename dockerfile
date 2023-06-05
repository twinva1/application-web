FROM node:14.19.1-alpine as NODE
WORKDIR /app

# copy package.json separately for caching dependencies layer
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


FROM nginx:alpine
COPY ./nginx.conf ./etc/nginx/conf.d/default.conf
COPY --from=NODE /app/dist/application-web /usr/share/nginx/html
