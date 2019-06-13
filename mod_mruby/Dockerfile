FROM centos:latest

# Install supervisor
RUN yum install -y epel-release
RUN sed -i -e 's/https/http/g' /etc/yum.repos.d/epel.repo
RUN yum install -y supervisor

# Install httpd 
RUN yum install -y httpd
COPY httpd.ini /etc/supervisord.d/

# Install mod_mruby
RUN yum install -y httpd-devel git ruby gcc make bison openssl-devel
RUN git clone https://github.com/matsumotory/mod_mruby.git
WORKDIR mod_mruby
RUN sh build.sh
RUN make install

EXPOSE 80
CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisord.conf"]
