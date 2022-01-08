FROM node:16-alpine AS build

COPY . .

RUN npm ci
RUN npm run build

FROM nginx:1-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build public /usr/share/nginx/html

EXPOSE 80
