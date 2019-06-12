FROM centos:latest

# Install httpd 
RUN yum install -y httpd httpd-devel git ruby gcc make bison openssl-devel

# Install mod_mruby
RUN git clone https://github.com/matsumotory/mod_mruby.git
WORKDIR mod_mruby
RUN sh build.sh
RUN make install

# supervisor
RUN yum install -y epel-release
RUN yum install -y supervisor
COPY httpd.ini /etc/supervisord.d/httpd.ini
RUN sed -i -e 's/nodaemon=false/nodaemon=true/g' /etc/supervisord.conf

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
