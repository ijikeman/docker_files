FROM centos

RUN yum install httpd mod_security -y
RUN echo 'ServerName localhost' >> /etc/httpd/conf/httpd.conf
RUN echo 'SecRuleEngine On' > /etc/httpd/conf.d/mod_security.conf
RUN echo 'SecRule REQUEST_URI "/406/index.html" "id:999999,log,deny,status:406"' >> /etc/httpd/conf.d/mod_security.conf
RUN mkdir /var/www/html/406
