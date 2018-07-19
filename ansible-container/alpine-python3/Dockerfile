FROM python:3.5-alpine

RUN apk add git libc-dev gcc make linux-headers curl
RUN curl -kL https://bootstrap.pypa.io/get-pip.py | python
RUN git clone https://github.com/ansible/ansible-container.git
WORKDIR ansible-container
RUN git checkout -b release-0.9.2 refs/tags/release-0.9.2
RUN python -m pip install pip==9.0.3
RUN pip install -e .[docker]
RUN apk add docker
