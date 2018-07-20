FROM node:8.11

RUN apt-get update && apt-get install libx11-xcb-dev libxcomposite-dev libxcursor-dev libxdamage-dev libxi-dev libxtst-dev libnss3-dev libcups2-dev libxss-dev libxrandr-dev libasound2-dev libatk1.0-dev libatk-bridge2.0-dev libgtk-3-dev -y
RUN npm i puppeteer@1.2.0
RUN npm i log4js@2.5.3
ADD sample.js .
