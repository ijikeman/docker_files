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

#ENTRYPOINT ["/usr/bin/mysqld_safe"]
