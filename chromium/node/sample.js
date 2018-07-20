const puppeteer = require('puppeteer');

(async() => {

//const browser = await puppeteer.launch();
//const browser = await puppeteer.launch({args: ['--no-sandbox'],  executablePath: '/nvm/node_modules/puppeteer/.local-chromium/linux-564778/chrome-linux/chrome'});
const browser = await puppeteer.launch({args: ['--no-sandbox']});
const page = await browser.newPage();
await page.goto('https://example.com');
await page.screenshot({path: 'example.png'});

browser.close();
})();
