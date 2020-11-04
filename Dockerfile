FROM nginx:1-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY static /usr/share/nginx/html

EXPOSE 80
