From centos:7

# Install ansible
RUN yum install -y epel-release
RUN yum install -y ansible
RUN yum install -y openssh-clients
RUN yum install -y docker-client
RUN mkdir /ansible
WORKDIR /ansible

## Install rbenv
RUN yum install -y git gcc gcc-c++ openssl-devel readline-devel git
RUN git config --global http.sslVerify false
RUN git clone https://github.com/rbenv/rbenv.git ~/.rbenv --depth 1
RUN mkdir ~/.rbenv/plugins
RUN git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build --depth 1
RUN echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
RUN echo 'eval "$(rbenv init -)"' >> ~/.bashrc

# Install Ruby
RUN yum install tar gcc make curl bzip2 -y
RUN source ~/.bashrc && rbenv install 2.6.3
RUN source ~/.bashrc && rbenv global 2.6.3

# Install ansible_spec
RUN source ~/.bashrc && gem install ansible_spec

# Install docker-api
RUN source ~/.bashrc && gem install docker-api

# Set ruby path
ENV PATH=/root/.rbenv/versions/2.6.3/bin:$PATH
