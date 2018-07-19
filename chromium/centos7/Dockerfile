FROM centos:7

RUN yum install git -y
RUN git clone https://github.com/creationix/nvm.git --depth 1 -b v0.33.11
WORKDIR nvm
RUN source /nvm/nvm.sh && nvm install v8.11.3
RUN source /nvm/nvm.sh && nvm use v8.11.3
RUN yum install libX11-devel libXcomposite-devel libXcursor-devel libXdamage-devel libXext-devel libXi-devel libXtst-devel cups-devel libXScrnSaver-devel libXrandr-devel alsa-lib pango atk-devel at-spi2-atk gtk3-devel -y
COPY sample.js .
ENV PUPPETEER_CHROMIUM_REVISION 564778
RUN source /nvm/nvm.sh && npm i puppeteer
