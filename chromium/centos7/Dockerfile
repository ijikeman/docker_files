FROM centos:7

ARG CHROMIUM_VERSION=571375
ARG NVM_VERSION=v0.33.11
ARG NODE_VERSION=v8.11.3

# install nvm
RUN yum install git -y
RUN git clone https://github.com/creationix/nvm.git --depth 1 -b $NVM_VERSION
WORKDIR nvm

# install node
RUN source /nvm/nvm.sh && nvm install $NODE_VERSION
RUN source /nvm/nvm.sh && nvm use $NODE_VERSION
RUN yum install libX11-devel libXcomposite-devel libXcursor-devel libXdamage-devel libXext-devel libXi-devel libXtst-devel cups-devel libXScrnSaver-devel libXrandr-devel alsa-lib pango atk-devel at-spi2-atk gtk3-devel -y

# install puppeteer
ENV PUPPETEER_CHROMIUM_REVISION $CHROMIUM_VERSION
RUN source /nvm/nvm.sh && npm i puppeteer@1.2.0
RUN source /nvm/nvm.sh && npm i log4js@2.5.3
RUN echo 'source /nvm/nvm.sh' >> /root/.bashrc
env NVM_BIN "/nvm/versions/node/$NODE_VERSION/bin"
env NVM_CD_FLAGS ""
env NVM_DIR "/nvm"
env PATH "/nvm/versions/node/$NODE_VERSION/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
ADD sample.js .
