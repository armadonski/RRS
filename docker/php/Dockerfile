FROM php:fpm
WORKDIR /var/www
RUN apt-get update &&\
    apt-get upgrade -y &&\
    apt-get install -y bash git
RUN docker-php-ext-install pdo_mysql
CMD ["php-fpm"]
CMD ["./composer.phar", "install"]
EXPOSE 9000