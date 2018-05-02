FROM rpmbuild.centos:latest

RUN yum install openssl openssl-devel ruby -y
RUN git clone https://github.com/matsumotory/mod_mruby.git
WORKDIR mod_mruby
RUN sh build.sh
