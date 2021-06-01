FROM nginx
WORKDIR /var/www
COPY ./conf/nginx.conf /etc/nginx/nginx.conf
COPY ./conf/conf/sites-enabled/default.conf /etc/nginx/sites-enabled/default.conf
COPY ./conf/conf/fastcgi.conf /etc/nginx/fastcgi.conf
COPY ./conf/conf/proxy.conf /etc/nginx/proxy.conf
COPY ./conf/conf/mime.types /etc/nginx/mime.types
COPY ./conf/conf/upstream.conf /etc/nginx/conf.d/default.conf
COPY ./logs/error.log /var/logs/error.log
COPY ./logs/access.log /var/www/logs/access.log




CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80 443