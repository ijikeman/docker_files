FROM python
RUN apt-get update -y && apt-get install -y \
     apt-transport-https \
     ca-certificates \
     curl \
     gnupg2 \
     software-properties-common
RUN curl -fsSL https://download.docker.com/linux/$(. /etc/os-release; echo "$ID")/gpg | apt-key add -
RUN apt-key fingerprint 0EBFCD88
RUN add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/$(. /etc/os-release; echo "$ID") \
   $(lsb_release -cs) \
   stable"
RUN apt-get update -y && apt-get install -y docker-ce
VOLUME /var/lib/docker
CMD ["/etc/init.d/docker", "start"]
RUN curl -kL https://bootstrap.pypa.io/get-pip.py | python
RUN python -m pip install pip==9.0.3
RUN pip install --upgrade setuptools
RUN pip install ansible-container[docker,k8s]
RUN pip install -U docker==2.7.0
#RUN sed -i -e "s|'run', 'secrets'|'docker', 'secrets'|g" /usr/lib/python2.7/site-packages/container/docker/engine.pyZ
