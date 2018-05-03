FROM centos:6
 
# install rbenv & ruby2
RUN  yum install -y git make gcc zlib-devel openssl-devel readline-devel ncurses-devel gdbm-devel db4-devel libffi-devel tk-devel
RUN yum install -y epel-release
RUN yum install -y --enablerepo=epel libyaml-devel
RUN git clone https://github.com/sstephenson/rbenv.git ~/.rbenv
RUN groupadd rbenv
RUN chgrp -R rbenv ~/.rbenv
RUN chmod -R g+rwxXs ~/.rbenv/
RUN mkdir ~/.rbenv/plugins
RUN git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
RUN cd ~/.rbenv/plugins/ruby-build/ && ./install.sh
RUN echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> /etc/profile.d/rbenv.sh
RUN echo 'eval "$(rbenv init -)"' >> /etc/profile.d/rbenv.sh
RUN source /etc/profile.d/rbenv.sh && rbenv install 2.5.1
RUN source /etc/profile.d/rbenv.sh && rbenv global 2.5.1

# build mod_mruby
RUN yum install gcc make -y
RUN yum install openssl openssl-devel httpd httpd-devel bison git -y
RUN git clone --depth 1 -b v1.15.0 https://github.com/matsumotory/mod_mruby.git
WORKDIR mod_mruby
RUN source /etc/profile.d/rbenv.sh && sh build.sh
