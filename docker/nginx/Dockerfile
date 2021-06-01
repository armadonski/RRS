FROM nginx:alpine
WORKDIR /var/www
CMD ["nginx", "-g", "daemon off;"]
RUN "touch /var/logs/access.log && touch /var/logs/error.log"
EXPOSE 80 443