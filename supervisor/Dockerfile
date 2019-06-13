FROM centos:latest

# Install supervisor
RUN yum install -y epel-release
RUN sed -i -e 's/https/http/g' /etc/yum.repos.d/epel.repo
RUN yum install -y supervisor

# Install httpd
RUN yum install -y httpd
COPY httpd.ini /etc/supervisord.d/

# STARTUP SSHD
RUN yum install openssh-server -y
RUN ssh-keygen -A
COPY sshd.ini /etc/supervisord.d/sshd.ini

# STARTUP RSYSLOGD
RUN yum install rsyslog -y
RUN sed -i -e 's/^$ModLoad imjournal/#$ModLoad imjournal/g' -e 's/OmitLocalLogging on/OmitLocalLogging off/g' -e 's/^$IMJournalStateFile imjournal.state/#$IMJournalStateFile imjournal.state/g' /etc/rsyslog.conf
RUN sed -i -e 's/^$SystemLogSocketName/#$SystemLogSocketName/g' /etc/rsyslog.d/listen.conf
COPY rsyslogd.ini /etc/supervisord.d/

EXPOSE 22 80
CMD ["/usr/bin/supervisord","-n", "-c","/etc/supervisord.conf"]
