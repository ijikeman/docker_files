FROM ubuntu:16.04

RUN apt-get update -y
RUN apt-get install python curl -y
RUN curl -kL https://bootstrap.pypa.io/get-pip.py | python
RUN pip install --force-reinstall pip==9.0.3
RUN pip install ansible-container[docker]==0.9.2 | true
RUN pip install --upgrade pip
RUN apt-get install docker.io -y
