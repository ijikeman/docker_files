FROM centos:latest

RUN yum install gcc make gdb -y

RUN yum install wget openssl openssl-devel httpd -y
RUN wget -O /tmp/pound.tar.gz 'http://www.apsis.ch/pound/Pound-2.7.tgz'
RUN cd /tmp/; tar zxvf pound.tar.gz
WORKDIR /tmp/Pound-2.7
RUN ./configure
RUN sed -i -e 's/-g -O2/-g3 -O0/g' Makefile
RUN make
RUN echo 'test page' > /var/www/html/index.html
RUN groupadd pound
RUN useradd -g pound pound
COPY pound.cfg /usr/local/etc/pound.cfg
COPY gdbinit /root/.gdbinit
RUN yum install tcpdump -y
