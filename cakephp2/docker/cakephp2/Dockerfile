FROM tamurayoshiya/cakephp2

#RUN echo "mysql-server mysql-server/root_password password root" | debconf-set-selections && \
#  echo "mysql-server mysql-server/root_password_again password root"| debconf-set-selections && \
#  apt-get install -y mysql-server
#
#RUN mysqld_safe & \
#  sleep 10 && \
#  echo "grant all on *.* to root@'172.17.%' identified by 'root' with grant option"| mysql -uroot -proot && \
#  echo "create database testdb;"| mysql -uroot -proot

RUN sed -i -e 's/src\/cakephp/src\/cakephp\/app\/webroot/g' /etc/apache2/sites-enabled/000-default.conf

# composer install
RUN mkdir -p /usr/local/composer
WORKDIR /usr/local/composer
RUN php -r "readfile('https://getcomposer.org/installer');" | php
COPY composer.json /usr/local/composer/composer.json
RUN php composer.phar install
RUN echo "include_path='/var/www/html/src/cakephp/lib:.:/usr/local/lib/php:/usr/local/composer/vendors/phpunit/phpunit/'" >> /usr/local/etc/php/php.ini

#ENTRYPOINT ["/usr/bin/mysqld_safe"]
