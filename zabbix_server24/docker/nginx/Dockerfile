FROM nginx:latest

RUN apt-get update && apt-get install wget -y
RUN wget http://repo.zabbix.com/zabbix/2.4/ubuntu/pool/main/z/zabbix-release/zabbix-release_2.4-1+trusty_all.deb -O /tmp/zabbix.deb && dpkg -i /tmp/zabbix.deb
RUN apt-get update && apt-get install zabbix-agent -y
RUN sed -i -e 's/127.0.0.1/172.20.0.2/g' -e 's/Zabbix Server/zabbix/g' /etc/zabbix/zabbix_agentd.conf
RUN mkdir -p /var/run/zabbix && chown zabbix:zabbix /var/run/zabbix
