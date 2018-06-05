From centos:6

RUN yum install -y epel-release
RUN curl https://dl.eff.org/certbot-auto -o /usr/bin/certbot-auto
RUN chmod a+x /usr/bin/certbot-auto
RUN /usr/bin/certbot-auto --os-packages-only --non-interactive
