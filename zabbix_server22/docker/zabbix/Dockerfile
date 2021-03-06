FROM debian:wheezy

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update -y && apt-get install -y wget

RUN \
    wget http://repo.zabbix.com/zabbix/2.2/debian/pool/main/z/zabbix-release/zabbix-release_2.2-1+wheezy_all.deb \
    && dpkg -i zabbix-release_2.2-1+wheezy_all.deb \
    && apt-get update -y \
    && apt-get install -y \
        zabbix-server-mysql \
        zabbix-frontend-php \
        zabbix-agent \
        zabbix-get \
        zabbix-sender \
    && rm -rf /var/lib/apt/lists/*

RUN \
    mkdir -p /var/run/zabbix \
    && chown zabbix.zabbix /var/run/zabbix

# configure php
RUN sed -i \
    -e 's/;date\.timezone.*/date.timezone = UTC/' \
    /etc/php5/apache2/php.ini

# configure zabbix web server
COPY zabbix.conf.php /etc/zabbix/web/zabbix.conf.php

COPY entrypoint.sh /entrypoint.sh

# Japanese
RUN apt-get install locales
RUN locale-gen ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LC_CTYPE ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP.utf8

EXPOSE 80 10050

ENTRYPOINT ["/bin/sh", "/entrypoint.sh"]
