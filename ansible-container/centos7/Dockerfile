FROM centos:7

RUN yum install epel-release -y
RUN yum install ansible -y
RUN yum install python-pip -y
RUN pip install --upgrade setuptools
RUN yum install docker -y
RUN pip install ansible-container[docker,k8s]
RUN pip install -U docker==2.7.0
RUN sed -i -e "s|'run', 'secrets'|'docker', 'secrets'|g" /usr/lib/python2.7/site-packages/container/docker/engine.py
