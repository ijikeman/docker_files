FROM centos:latest

RUN yum install -y epel-release
RUN sed -i -e 's/https/http/g' /etc/yum.repos.d/epel.repo
RUN yum install -y ansible
