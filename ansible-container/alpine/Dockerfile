FROM alpine

RUN apk add git libc-dev gcc make python python-dev linux-headers curl
RUN curl -kL https://bootstrap.pypa.io/get-pip.py | python
RUN git clone https://github.com/ansible/ansible-container.git
WORKDIR ansible-container
RUN git checkout -b release-0.9.2 release-0.9.2
RUN pip install -e .[docker]
RUN apk add docker
