mysql -u zabbix -pzabbix zabbix -h mysql </usr/share/doc//zabbix-server-mysql-2.2.20/create/schema.sql
mysql -u zabbix -pzabbix zabbix -h mysql </usr/share/doc//zabbix-server-mysql-2.2.20/create/images.sql
mysql -u zabbix -pzabbix zabbix -h mysql </usr/share/doc//zabbix-server-mysql-2.2.20/create/data.sql
/usr/sbin/zabbix_server -c /etc/zabbix/zabbix_server.conf

