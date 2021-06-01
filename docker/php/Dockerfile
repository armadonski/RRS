FROM php:7.1-fpm-alpine
WORKDIR /var/www
COPY composer-installer.sh /usr/bin/composer-installer
RUN chmod +x /usr/bin/composer-installer
RUN docker-php-ext-install pdo_mysql
CMD ["composer-installer"]
CMD ["php-fpm"]
EXPOSE 9000