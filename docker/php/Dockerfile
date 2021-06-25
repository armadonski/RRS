FROM php:fpm
WORKDIR /var/www
RUN apt-get update &&\
    apt-get upgrade -y &&\
    apt-get install -y bash git
RUN docker-php-ext-install pdo_mysql


CMD ./composer.phar install && php-fpm

EXPOSE 9000