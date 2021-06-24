FROM php:fpm
WORKDIR /var/www
RUN apt-get update &&\
    apt-get upgrade -y &&\
    apt-get install -y bash git
RUN docker-php-ext-install pdo_mysql
RUN "./composer.phar install"
CMD ["php-fpm"]

EXPOSE 9000