FROM phpdockerio/php74-fpm:latest
WORKDIR "/var/www"
VOLUME /var/www/

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
    && apt-get install -y apt-utils locales \
    && echo "pl_PL.UTF-8 UTF-8" >> /etc/locale.gen \
    && dpkg-reconfigure -f noninteractive locales \
    && echo "Europe/Warsaw" > /etc/timezone \
    && ln -fs /usr/share/zoneinfo/Europe/Warsaw /etc/localtime \
    && dpkg-reconfigure -f noninteractive tzdata \
    && apt-get install -y sudo htop vim mc wget curl cron screen at \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

ENV LANGUAGE="pl_PL" \
    LANG="pl_PL.UTF-8" \
    LC_ALL="pl_PL.UTF-8"

RUN apt-get update \
    && apt-get -y install \
    apt-transport-https \
    git \
    software-properties-common \
    npm \
    php7.4 \
    php7.4-bcmath \
    php7.4-curl \
    php7.4-gd \
    php7.4-imap \
    php7.4-intl \
    php7.4-mbstring \
    php7.4-pgsql \
    php7.4-mysql \
    php7.4-soap \
    php7.4-xmlrpc \
    php7.4-xsl \
    php7.4-zip \
    php-imagick \
    php-redis \
    php-xdebug \
    php-mbstring \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

COPY etc /etc

RUN phpenmod php-ini-config \
    && phpenmod xdebug-docker \
    && phpenmod pdo_mysql

RUN usermod -u 1000 www-data \
    && groupmod -g 1000 www-data \
    && usermod -s /bin/bash www-data

RUN echo 'alias pa="php artisan"' >> ~/.bashrc