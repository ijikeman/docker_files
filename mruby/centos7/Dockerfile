FROM rpmbuild.centos:latest

RUN yum install openssl openssl-devel ruby bison -y
RUN git clone -b v1.15.0 --depth 1 https://github.com/matsumotory/mod_mruby.git
WORKDIR mod_mruby
RUN sh build.sh
